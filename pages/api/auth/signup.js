

///////////
import { MongoClient } from 'mongodb';

const MONGO_URI = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Connect to the MongoDB database
      const client = new MongoClient("mongodb+srv://Muaaz_Aamer:Password123@ap-project-db.uym6e.mongodb.net/?retryWrites=true&w=majority&appName=AP-Project-DB");
      await client.connect();
      const db = client.db();
      const usersCollection = db.collection("users");

      // Check if user already exists
      const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        client.close();
        return res.status(400).json({ message: 'User already exists' });
      }

      // Insert new user into the database
      const result = await usersCollection.insertOne({
        email,
        password: password, // Store the hashed password
        createdAt: new Date(),
      });

      client.close();

      // Respond with success
      res.status(201).json({
        message: 'User created successfully',
        user: {
          _id: result.insertedId,
          email,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
