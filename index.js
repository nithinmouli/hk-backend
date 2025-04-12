import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import fs from 'fs';
import { S3Client, PutObjectCommand, ListBucketsCommand } from '@aws-sdk/client-s3';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const prismaClient = new PrismaClient();
const port = process.env.PORT || 3000;

// Initialize Supabase client for non-storage operations
const supabaseUrl = 'https://zfpypstzojglsvrnftgi.supabase.co';
const supabaseKey = '87b9279f0016aa7b86bec7bba9350911';
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize S3 client for Supabase Storage
const s3Client = new S3Client({
  forcePathStyle: true,
  region: 'ap-south-1',
  endpoint: 'https://zfpypstzojglsvrnftgi.supabase.co/storage/v1/s3',
  credentials: {
    accessKeyId: '87b9279f0016aa7b86bec7bba9350911',
    secretAccessKey: '7a3b563b969e0d77aa4da3852cc7c913e6de86249edad05d5fdac6a0f921a108'
  }
});

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_KEY);

// Setup middleware
app.use(bodyParser.json());
app.use(cors());

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware to authenticate JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }
  // Expected format: "Bearer <token>"
  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err || !decoded?.id) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = { id: decoded.id };
    next();
  });
}

// Login endpoint
app.post('/login', async (req, res) => {
  const { phone_number, password } = req.body;

  if (!phone_number || !password) {
    return res.status(400).json({ error: 'Phone number and password are required' });
  }

  console.log('Login attempt with phone number:', phone_number);

  try {
    // Find user by phone number
    const users = await prismaClient.users.findUnique({
      where: { phone_number },
    });

    if (!users || users.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create a JWT token
    const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET );

    return res.json({ success: true, token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'An error occurred during login' });
  }
});

// User preferences endpoint
app.post('/preferences', authenticateJWT, async (req, res) => {
  const { diseases, allergies, healthGoals } = req.body;

  try {
    // Get the authenticated user's ID
    const userId = req.user.id;

    // Check if user exists
    const user = await prismaClient.users.findUnique({
      where: { id: userId },
      include: {
        diseases: true,
        allergies: true,
        health_goals: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Handle diseases
    if (diseases && diseases.length > 0) {
      // Delete existing diseases
      await prismaClient.diseases.deleteMany({
        where: { userId: user.id },
      });
      
      // Add new diseases
      await prismaClient.diseases.createMany({
        data: diseases.map((disease) => ({
          name: disease,
          userId: user.id,
        })),
        skipDuplicates: true,
      });
    }

    // Handle allergies
    if (allergies && allergies.length > 0) {
      // Delete existing allergies
      await prismaClient.allergies.deleteMany({
        where: { userId: user.id },
      });
      
      // Add new allergies
      await prismaClient.allergies.createMany({
        data: allergies.map((allergy) => ({
          name: allergy,
          userId: user.id,
        })),
        skipDuplicates: true,
      });
    }

    // Handle health goals
    if (healthGoals && healthGoals.length > 0) {
      // Delete existing health goals
      await prismaClient.health_goals.deleteMany({
        where: { userId: user.id },
      });
      
      // Add new health goals
      await prismaClient.health_goals.createMany({
        data: healthGoals.map((goal) => ({
          name: goal,
          userId: user.id,
        })),
        skipDuplicates: true,
      });
    }

    return res.json({ 
      success: true, 
      message: user.diseases.length > 0 || user.allergies.length > 0 || user.health_goals.length > 0 
        ? 'Preferences updated successfully' 
        : 'Preferences added successfully' 
    });
  } catch (error) {
    console.error('Error updating preferences:', error);
    return res.status(500).json({ error: 'An error occurred while updating preferences' });
  }
});

// Analyze product endpoint with AWS S3 upload - UPDATED TO USE EXISTING BUCKET
app.post('/api/analyze-product', authenticateJWT, upload.single('image'), async (req, res) => {
  try {
    const imageFile = req.file;
    const userId = req.user.id;

    if (!imageFile) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // Validate user exists
    const user = await prismaClient.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Get the buffer from the uploaded file
    const buffer = imageFile.buffer;
    
    // List available buckets
    try {
      const listBucketsCommand = new ListBucketsCommand({});
      const bucketsResponse = await s3Client.send(listBucketsCommand);
      const availableBuckets = bucketsResponse.Buckets?.map(b => b.Name) || [];
      console.log("Available buckets:", availableBuckets);
      
      // Using the existing "hackthon" bucket instead of "product-images"
      const bucketName = 'hackthon'; // Changed to use the existing bucket
      const fileName = `product_images/${userId}/${uuidv4()}-${imageFile.originalname}`;
      
      console.log(`Uploading file ${fileName} to bucket ${bucketName}`);
      
      const uploadParams = {
        Bucket: bucketName,
        Key: fileName,
        Body: buffer,
        ContentType: imageFile.mimetype
      };
      
      const uploadCommand = new PutObjectCommand(uploadParams);
      await s3Client.send(uploadCommand);
      
      console.log('File uploaded successfully to S3');
      
      // Construct the public URL for the uploaded file
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/${bucketName}/${fileName}`;
      console.log('Image URL:', imageUrl);

      // Analyze the image using Google's Generative AI
      const analysisResult = await performImageAnalysis(buffer);
      
      if (!analysisResult) {
        return res.status(500).json({ error: 'Image analysis failed' });
      }

      // Extract the first ingredient's queries for searches
      const parsedAnalysis = extractJsonFromResponse(analysisResult);
      
      let videoSearchResults = null;
      let shoppingSearchResults = null;
      
      if (parsedAnalysis?.ingredients && parsedAnalysis.ingredients.length > 0) {
        const firstIngredient = parsedAnalysis.ingredients[0];
        
        if (firstIngredient.recipeQuery) {
          videoSearchResults = await performVideoSearch(firstIngredient.recipeQuery);
        }
        
        if (firstIngredient.shoppingQuery) {
          shoppingSearchResults = await performShoppingSearch(firstIngredient.shoppingQuery);
        }
      }

      // Return all the results
      return res.status(200).json({
        imageUrl,
        analysis: parsedAnalysis,
        videoResults: videoSearchResults,
        shoppingResults: shoppingSearchResults,
      });
      
    } catch (bucketError) {
      console.error("S3 operation error:", bucketError);
      return res.status(500).json({ 
        error: "Failed to complete S3 operation",
        message: bucketError.message
      });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
});

// Function to analyze the image using Google's Generative AI
async function performImageAnalysis(imageBuffer) {
  try {
    const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

    const prompt = `
Analyze the provided image and perform the following tasks:

1. **Introduction:**  
   Generate a brief introductory description summarizing what the image is about. Include any context or details you can infer (such as the type of food or nutritional insights).

2. **Product Name:**  
   Based on the ingredients identified in the image, deduce and clearly state the product name. Use the ingredients as clues in your determination.

3. **Ingredients Extraction:**  
   - List all the ingredients present in the image.
   - For each ingredient, provide:
      a. A healthy alternative (if available).
      b. A shopping page keyword query to help find the healthy alternative.
      c. A YouTube recipe keyword query related to the healthy alternative.

Present the final output in JSON format with the following keys:
- "introduction": a description of what the image is about.
- "productName": the product name derived from the ingredients.
- "ingredients": an array of objects, each with "ingredient", "alternative", "shoppingQuery", and "recipeQuery".
`;

    const result = await model.generateContent([
      {
        inlineData: {
          data: imageBuffer.toString("base64"),
          mimeType: "image/jpeg",
        },
      },
      prompt,
    ]);

    return result.response.text();
  } catch (error) {
    console.error("Error during generative AI processing:", error);
    return null;
  }
}

// Function to extract JSON from the model response
function extractJsonFromResponse(response) {
  try {
    const jsonStart = response.indexOf('{');
    const jsonEnd = response.lastIndexOf('}');
    
    if (jsonStart === -1 || jsonEnd === -1) {
      console.error("JSON not found in the response.");
      return null;
    }
    
    const jsonStr = response.substring(jsonStart, jsonEnd + 1);
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Failed to parse analysis response as JSON:", error);
    return null;
  }
}

// Function to search for videos
async function performVideoSearch(query) {
  const requestData = {
    q: query,
    gl: "in",
    num: 20
  };

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://google.serper.dev/videos',
    headers: { 
      'X-API-KEY': process.env.SERPER_API_KEY, 
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(requestData)
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error fetching video data:", error);
    return null;
  }
}

// Function to search for shopping items
async function performShoppingSearch(query) {
  const requestData = {
    q: query,
    gl: "in",
    num: 20
  };

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://google.serper.dev/shopping',
    headers: { 
      'X-API-KEY': process.env.SERPER_API_KEY, 
      'Content-Type': 'application/json'
    },
    data: JSON.stringify(requestData)
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error fetching shopping data:", error);
    return null;
  }
}

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log('S3 authentication configured for Supabase Storage');
});