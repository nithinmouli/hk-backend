import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

dotenv.config(); // Load environment variables

const app = express();
const prismaClient = new PrismaClient();

app.use(bodyParser.json()); // To parse JSON request bodies
app.use(cors());

const port = 3000;

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
    const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Token expires in 1 hour
    });

    return res.json({ success: true, token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'An error occurred during login' });
  }
});

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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});