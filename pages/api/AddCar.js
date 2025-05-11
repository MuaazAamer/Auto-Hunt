import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client1 = new MongoClient("mongodb+srv://Muaaz_Aamer:Password123@ap-project-db.uym6e.mongodb.net/?retryWrites=true&w=majority&appName=AP-Project-DB");
      await client1.connect();
      const db = client1.db("AutoHunt");

      // Get the length of the array without calling length() as a function
      const collection = await db.collection("Car Data").find().toArray();
      const collectionLength = collection.length;
      const Images={...req.body.Images}

      // Add the ID based on the length of the collection
      const formDataWithID = { ID: collectionLength + 1, ...req.body.formData };
      const ImageswithID = { ID: collectionLength + 1,Images};

      await db.collection("Car Data").insertOne(formDataWithID);
      await db.collection("Images").insertOne(ImageswithID);

      await client1.close();
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ error: "Database connection failed" });
    }
  }
}
