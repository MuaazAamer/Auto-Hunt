import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import { MongoClient } from 'mongodb';
//const MONGO_URI = process.env.MONGODB_URI;
export default NextAuth({
    session: { jwt: true },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            async authorize(cred) {
                const client1 = new MongoClient("mongodb+srv://Muaaz_Aamer:Password123@ap-project-db.uym6e.mongodb.net/?retryWrites=true&w=majority&appName=AP-Project-DB");
                await client1.connect();
                const db = client1.db();
                const user = await db.collection("users").findOne({ email: cred.email });
                
                if (!user) {
                    throw new Error('No user found');
                } else {
                    if (cred.password === user.password) {
                        return { email: user.email };
                    } else {
                        throw new Error('Wrong password');
                    }
                }
            },
        }),
    ],
});



// import { MongoClient } from "mongodb";
// import Signup from "../../../models/signup"; // Use your Signup model here

// // Database connection string (you can store this in .env.local for security)
// const MONGO_URI = process.env.MONGODB_URI;

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       // Connect to the database
//       const client = await MongoClient.connect(MONGO_URI);
//       const db = client.db(); // Access the database
//       const collection = db.collection("users"); // Access the 'users' collection

//       const { email, password, name } = req.body;

//       // Check if the user already exists
//       const existingUser = await collection.findOne({ email });
//       if (existingUser) {
//         client.close(); // Close the connection
//         return res.status(400).json({ message: "User already exists" });
//       }

//       // Create a new user instance
//       const newUser = new Signup({
//         name,
//         email,
//         password, // You should hash the password before saving it
//       });

//       // Validate using Mongoose model
//       const validationError = newUser.validateSync();
//       if (validationError) {
//         client.close(); // Close the connection
//         return res.status(400).json({ error: validationError.message });
//       }

//       // Insert the new user into the database
//       const result = await collection.insertOne({
//         name,
//         email,
//         password, // Ensure password is hashed before storing
//         created_at: new Date(),
//       });

//       if (!result.insertedId) {
//         client.close(); // Close the connection
//         throw new Error("Failed to insert document");
//       }

//       // Close the connection
//       client.close();

//       // Respond with the created user details
//       return res.status(201).json({
//         message: "User created successfully",
//         user: {
//           _id: result.insertedId,
//           name,
//           email,
//         },
//       });
//     } catch (error) {
//         console.error("Error during sign up:", error);
//         return res.status(500).json({ error: "Internal Server Error", details: error.message });
//       }
//     } else {
//       return res.status(405).json({ error: "Method Not Allowed" });
//     }
// }