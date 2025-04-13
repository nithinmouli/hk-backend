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

// Analyze product endpoint with AWS S3 upload - UPDATED TO SAVE RESPONSE TO DATABASE
app.post('/api/analyze-product', authenticateJWT, upload.single('image'), async (req, res) => {
  try {
    const imageFile = req.file;
    const userId = req.user.id;

    if (!imageFile) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // Validate user exists and fetch user with health information
    const user = await prismaClient.users.findUnique({
      where: { id: userId },
      include: {
        diseases: true,
        allergies: true,
        health_goals: true
      }
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

      // Analyze the image using Google's Generative AI with user's health information
      const analysisResult = await performImageAnalysis(buffer, user);
      
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

      // Save the analysis results to the database
      const savedAnalysis = await prismaClient.product_analysis.create({
        data: {
          userId: userId,
          imageUrl: imageUrl,
          analysisJson: JSON.stringify(parsedAnalysis),
          videoResultsJson: videoSearchResults ? JSON.stringify(videoSearchResults) : null,
          shoppingResultsJson: shoppingSearchResults ? JSON.stringify(shoppingSearchResults) : null,
        }
      });

      // Return all the results with the generated analysis ID
      return res.status(200).json({
        id: savedAnalysis.id,
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

// New endpoint to retrieve analysis by ID
app.get('/api/analysis/:id', async (req, res) => {
  try {
    const analysisId = parseInt(req.params.id);

    if (isNaN(analysisId)) {
      return res.status(400).json({ error: 'Invalid analysis ID' });
    }

    // Get the analysis record
    const analysis = await prismaClient.product_analysis.findUnique({
      where: { id: analysisId }
    });

    if (!analysis) {
      return res.status(404).json({ error: 'Analysis not found' });
    }

    // Check if the analysis belongs to the authenticated user


    // Parse the JSON strings back to objects
    const parsedAnalysis = analysis.analysisJson ? JSON.parse(analysis.analysisJson) : null;
    const videoResults = analysis.videoResultsJson ? JSON.parse(analysis.videoResultsJson) : null;
    const shoppingResults = analysis.shoppingResultsJson ? JSON.parse(analysis.shoppingResultsJson) : null;

    // Return the analysis data
    return res.status(200).json({
      id: analysis.id,
      imageUrl: analysis.imageUrl,
      analysis: parsedAnalysis,
      videoResults: videoResults,
      shoppingResults: shoppingResults,
      createdAt: analysis.createdAt
    });
  } catch (error) {
    console.error('Error retrieving analysis:', error);
    return res.status(500).json({ error: 'Internal server error', message: error.message });
  }
});

// Enhanced function to analyze the image using Google's Generative AI with user health profile
async function performImageAnalysis(imageBuffer, user) {
  try {
    const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

    // Extract user health information
    const userDiseases = user.diseases.map(d => d.name);
    const userAllergies = user.allergies.map(a => a.name);
    const userHealthGoals = user.health_goals.map(g => g.name);
    const dietaryPreference = user.dietaryPreference;
    
    // Build health profile string
    const healthProfileString = [];
    if (userDiseases.length > 0) {
      healthProfileString.push(`Health Conditions: ${userDiseases.join(", ")}`);
    }
    if (userAllergies.length > 0) {
      healthProfileString.push(`Allergies: ${userAllergies.join(", ")}`);
    }
    if (userHealthGoals.length > 0) {
      healthProfileString.push(`Health Goals: ${userHealthGoals.join(", ")}`);
    }
    if (dietaryPreference) {
      healthProfileString.push(`Dietary Preference: ${dietaryPreference}`);
    }

    const healthProfileText = healthProfileString.length > 0 
      ? `USER HEALTH PROFILE:\n${healthProfileString.join("\n")}` 
      : "No specific health conditions or preferences provided";

    const prompt = `
Analyze this food-related image and provide a comprehensive nutritional assessment specifically tailored to the user's health profile below:

${healthProfileText}

1. **Context Detection:**
   First, identify what type of image this is:
   - Individual ingredient(s)
   - Packaged food product with visible labeling
   - Refrigerator/pantry contents
   - Prepared meal/dish
   - Other food-related context

2. **Introduction:**  
   Write a concise yet detailed summary (2-3 sentences) describing what's in the image, its nutritional profile, and any notable health implications SPECIFICALLY RELATED to the user's health conditions, allergies, or goals.

3. **Product/Food Name:**  
   Identify the main food item(s) or product name. If multiple items exist, focus on the most prominent or nutritionally significant items.

4. **Ingredient Analysis:**
   - For packaged foods: Extract visible ingredients from packaging
   - For fresh foods/ingredients: Identify the main components
   - For refrigerator/pantry: List the most prominent food items visible
   - For prepared meals: Identify the likely major ingredients
   - FLAG any ingredients that may negatively impact the user's health conditions

5. **Health-Tailored Recommendations:**
   For each identified ingredient/food item:
   - Provide a healthier alternative specifically suitable for the user's health profile
   - Note compatibility or concerns with the user's health conditions/allergies
   - Suggest a shopping query for finding alternatives that align with the user's health goals
   - Recommend a recipe query that uses healthier ingredients suitable for the user's specific health needs

Return ONLY a valid JSON object with this exact structure:
{
  "introduction": "Description of the food items with nutritional context specifically addressing user's health profile",
  "productName": "Name of the main food product or collection of items",
  "ingredients": [
    {
      "ingredient": "Identified ingredient/food item",
      "alternative": "Healthier alternative suggestion tailored to user's health profile",
      "shoppingQuery": "Query to find healthy alternatives online that suit user's health needs",
      "recipeQuery": "Query for finding recipes with this healthy alternative suitable for user's health profile"
    },
    // Additional ingredients...
  ]
}

Ensure your analysis is accurate, helpful, and SPECIFICALLY TAILORED to the user's health conditions, allergies, and goals. Make sure the JSON is properly formatted with no additional text outside the JSON structure.
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