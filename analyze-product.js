// routes/api/analyze-product.js
import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../../lib/prisma';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GENERATIVE_AI_KEY);

export async function POST(request) {
  try {
    // Extract userId and image from the request
    const formData = await request.formData();
    const imageFile = formData.get('image');
    const userId = formData.get('userId');

    if (!imageFile) {
      return new Response(JSON.stringify({ error: 'No image provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate user exists
    const user = await prisma.users.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Convert image to buffer
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    
    // Upload image to Supabase
    const fileName = `product_images/${userId}/${uuidv4()}-${imageFile.name}`;
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(fileName, buffer, {
        contentType: imageFile.type,
      });

    if (uploadError) {
      console.error('Error uploading to Supabase:', uploadError);
      return new Response(JSON.stringify({ error: 'Failed to upload image' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get the public URL of the uploaded image
    const { data: publicUrlData } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);
    
    const imageUrl = publicUrlData.publicUrl;

    // Analyze the image using Google's Generative AI
    const analysisResult = await performImageAnalysis(buffer);
    
    if (!analysisResult) {
      return new Response(JSON.stringify({ error: 'Image analysis failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
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
    return new Response(
      JSON.stringify({
        imageUrl,
        analysis: parsedAnalysis,
        videoResults: videoSearchResults,
        shoppingResults: shoppingSearchResults,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

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