import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client1 = new MongoClient("mongodb+srv://Muaaz_Aamer:Password123@ap-project-db.uym6e.mongodb.net/?retryWrites=true&w=majority&appName=AP-Project-DB");
      await client1.connect();
      const db = client1.db("AutoHunt");
      console.log(db.databaseName)

      const data=[]
      const collection=await db.collection("Car Data").find().toArray()
      data.push(collection)
      const images=await db.collection("Images").find().toArray()
      data.push(images)
      

      await client1.close();
      res.status(200).json(data);
    } catch (error) {
      console.error("Database connection error:", error);
      res.status(500).json({ error: "Database connection failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}


// export default async function inserthandler(req, res) {
// const car=[
//     {ID:11,
//     Car_name: "Audi RS7",
//     Description: "A high-performance sedan with a 591-hp 4.0-liter twin-turbo V8 engine.",
//     Engine_type: "591-hp 4.0-liter twin-turbo V8",
//     Type:"Sedan",
//     Wheels: "20-inch alloy",
//     seats: 5,
//     Trunk_space: "20.1 cu.ft.",
//     Price: "$118,500",
//     Colours: ["Blue", "Grey", "Black", "White"],
//     Interior_colours: ["Black", "Magma Red", "Silver stitching"],
//     Spoiler: "Fixed rear spoiler",
//     Skirts: "Optional carbon-fiber skirts"},
//   ]

// const Images=[
//     { ID: 6, Images: { Front: "/cars_images/monza_front.jpg", Side: "/cars_images/monza_side.jpg", Back: "/cars_images/monza_rear.jpg" } },
//     { ID: 7, Images: { Front: "/cars_images/gtc_front.jpg", Side: "/cars_images/gtc_side.jpg", Back: "/cars_images/gtc_rear.jpg" } },
//     { ID: 8, Images: { Front: "/cars_images/m5_front.jpg", Side: "/cars_images/m5_side.jpg", Back: "/cars_images/m5_rear.jpg" } },
//     { ID: 9, Images: { Front: "/cars_images/911_front.jpg", Side: "/cars_images/911_side.jpg", Back: "/cars_images/911_rear.jpg" } },
//     { ID: 10, Images: { Front: "/cars_images/720_front.jpg", Side: "/cars_images/720_side.jpg", Back: "/cars_images/720_rear.jpg" } },
//     { ID: 11, Images: { Front: "/cars_images/Audi_RS7_front.jpg", Side: "/cars_images/Audi_RS7_side.jpg", Back: "/cars_images/Audi_RS7_back.jpg" } },
//     { ID: 12, Images: { Front: "/cars_images/M4_front.jpg", Side: "/cars_images/M4_side.jpg", Back: "/cars_images/M4_back.jpg" } },
//     { ID: 13, Images: { Front: "/cars_images/Z06_front.jpg", Side: "/cars_images/Z06_side.jpg", Back: "/cars_images/Z06_rear.jpg" } },
//     { ID: 14, Images: { Front: "/cars_images/hellcat_front1.jpg", Side: "/cars_images/hellcat_side.jpg", Back: "/cars_images/hellcat_back.jpg" } },
//     { ID: 15, Images: { Front: "/cars_images/mustang_front.jpg", Side: "/cars_images/mustang_side.jpg", Back: "/cars_images/mustang_back.jpg" } },
//     { ID: 16, Images: { Front: "/cars_images/EVO_front.jpg", Side: "/cars_images/EVO_side.jpg", Back: "/cars_images/EVO_back.jpg" } },
//     { ID: 17, Images: { Front: "link_to_front_image.jpg", Left: "link_to_left_image.jpg", Right: "link_to_right_image.jpg", Back: "link_to_back_image.jpg" } },
//     { ID: 18, Images: { Front: "/cars_images/shelby_front.jpg", Side: "/cars_images/shelby_side.jpg", Back: "/cars_images/shelby_back.jpg" } },
//     { ID: 19, Images: { Front: "link_to_front_image.jpg", Left: "link_to_left_image.jpg", Right: "link_to_right_image.jpg", Back: "link_to_back_image.jpg" } },
//     { ID: 20, Images: { Front: "/cars_images/tesla_front.jpg", Side: "/cars_images/tesla_side.jpg", Back: "/cars_images/tesla_back.jpg" } },
// ];

//   if (req.method === 'GET') {
//         const client1 = new MongoClient("mongodb+srv://Muaaz_Aamer:Password123@ap-project-db.uym6e.mongodb.net/?retryWrites=true&w=majority&appName=AP-Project-DB");
//         await client1.connect();
//         const db = client1.db("AutoHunt");
//         console.log(db.databaseName)
//         await db.collection("Images").insertMany(Images);
//         await client1.close()
//         res.status(200).json({message:"inserted"});     
//   }
// }