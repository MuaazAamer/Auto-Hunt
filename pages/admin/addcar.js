// import { useState } from "react";
// import styles from "@/styles/form.module.css"; // Import the CSS module
// export default function AddCar({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     Car_name: "",
//     Description: "",
//     Engine_type: "",
//     Type: "",
//     Wheels: "",
//     Seats: 0,
//     Trunk_space: "",
//     Price: 0,
//     Colours: [""],
//     Interior_colours: [""],
//     Spoiler: "",
//     Skirts: "",
//   });
//   const [Images,setImages]=useState({
//     Front:"",
//     Side:"",
//     Rear:"",
//   })
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   const handleArrayChange = (index, arrayName, value) => {
//     setFormData((prev) => {
//       const updatedArray = [...prev[arrayName]];
//       updatedArray[index] = value;
//       return { ...prev, [arrayName]: updatedArray };
//     });
//   };
//   const addRow = (arrayName) => {
//     setFormData((prev) => ({
//       ...prev,
//       [arrayName]: [...prev[arrayName], ""],
//     }));
//   };
//   const handleImageChange = (e) => {
//     const { name, value } = e.target;
//     setImages((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   function submit(e) {
//     e.preventDefault();
//     fetch('/api/AddCar', {
//         method: 'POST',
//         body:JSON.stringify({
//             formData,
//             Images
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }).then(res=>res.json()).then(data=>{
//           //console.log(data)
//           if(data)
//           {
//             console.log(data)
//           }
//       })}

//   return (
//     <form className={styles.form} onSubmit={submit}>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Car Name</label>
//         <input
//           type="text"
//           name="Car_name"
//           value={formData.Car_name}
//           onChange={handleChange}
//         />
//       </div>
//       <div  className={styles.formGroup}>
//         <label className={styles.label}>Description</label>
//         <input
//           type="text"
//           name="Description"
//           value={formData.Description}
//           onChange={handleChange}
//         />
//       </div>
//       <div  className={styles.formGroup}>
//         <label className={styles.label}>Engine Type</label>
//         <input
//           type="text"
//           name="Engine_type"
//           value={formData.Engine_type}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Type</label>
//         <input
//           type="text"
//           name="Type"
//           value={formData.Type}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Wheels</label>
//         <input
//           type="text"
//           name="Wheels"
//           value={formData.Wheels}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Seats</label>
//         <input
//           type="number"
//           name="Seats"
//           value={formData.Seats}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Trunk Space</label>
//         <input
//           type="text"
//           name="Trunk_space"
//           value={formData.Trunk_space}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}> 
//         <label className={styles.label}>Price</label>
//         <input
//           type="number"
//           name="Price"
//           value={formData.Price}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Colours</label>
//         {formData.Colours.map((color, index) => (
//           <div key={index} className={styles.formGroup}>
//             <input
//               type="text"
//               value={color}
//               onChange={(e) => handleArrayChange(index, "Colours", e.target.value)}
//             />
//             {index === formData.Colours.length - 1 && (
//               <button
//                 type="button"
//                 onClick={() => addRow("Colours")}
//                 className={styles.addButton}
//               >
//                 +
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Interior Colours</label>
//         {formData.Interior_colours.map((color, index) => (
//           <div key={index} className={styles.row}>
//             <input
//               type="text"
//               value={color}
//               onChange={(e) =>
//                 handleArrayChange(index, "Interior_colours", e.target.value)
//               }
//             />
//             {index === formData.Interior_colours.length - 1 && (
//               <button
//                 type="button"
//                 onClick={() => addRow("Interior_colours")}
//                 className={styles.addButton}
//               >
//                 +
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Spoiler</label>
//         <input
//           type="text"
//           name="Spoiler"
//           value={formData.Spoiler}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Skirts</label>
//         <input
//           type="text"
//           name="Skirts"
//           value={formData.Skirts}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Image Front</label>
//         <input
//           type="text"
//           name="Front"
//           value={Images.Front}
//           onChange={handleImageChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Image Side</label>
//         <input
//           type="text"
//           name="Side"
//           value={Images.Side}
//           onChange={handleImageChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Image Rear</label>
//         <input
//           type="text"
//           name="Rear"
//           value={Images.Rear}
//           onChange={handleImageChange}
//         />
//       </div>
//       <button type="submit">Enter In Database</button>
//     </form>
//   );
// }
///////////////////
// import { useState, useEffect } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import styles from "@/styles/form.module.css"; // Import the CSS module

// export default function AddCar() {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   const [formData, setFormData] = useState({
//     Car_name: "",
//     Description: "",
//     Engine_type: "",
//     Type: "",
//     Wheels: "",
//     Seats: 0,
//     Trunk_space: "",
//     Price: 0,
//     Colours: [""],
//     Interior_colours: [""],
//     Spoiler: "",
//     Skirts: "",
//   });

//   const [Images, setImages] = useState({
//     Front: "",
//     Side: "",
//     Rear: "",
//   });

//   useEffect(() => {
//     if (status === "loading") return; // Wait for session status
//     if (!session) {
//       router.push("/auth"); // Redirect to login if not authenticated
//     }
//   }, [session, status, router]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleArrayChange = (index, arrayName, value) => {
//     setFormData((prev) => {
//       const updatedArray = [...prev[arrayName]];
//       updatedArray[index] = value;
//       return { ...prev, [arrayName]: updatedArray };
//     });
//   };

//   const addRow = (arrayName) => {
//     setFormData((prev) => ({
//       ...prev,
//       [arrayName]: [...prev[arrayName], ""],
//     }));
//   };

//   const handleImageChange = (e) => {
//     const { name, value } = e.target;
//     setImages((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     fetch("/api/AddCar", {
//       method: "POST",
//       body: JSON.stringify({
//         formData,
//         Images,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           console.log(data);
//         }
//       });
//   };

//   if (status === "loading" || !session) {
//     return <div>Loading...</div>; // Loading or redirecting to login
//   }

//   return (
//     <form className={styles.form} onSubmit={submit}>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Car Name</label>
//         <input
//           type="text"
//           name="Car_name"
//           value={formData.Car_name}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Description</label>
//         <input
//           type="text"
//           name="Description"
//           value={formData.Description}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Engine Type</label>
//         <input
//           type="text"
//           name="Engine_type"
//           value={formData.Engine_type}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Type</label>
//         <input
//           type="text"
//           name="Type"
//           value={formData.Type}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Wheels</label>
//         <input
//           type="text"
//           name="Wheels"
//           value={formData.Wheels}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Seats</label>
//         <input
//           type="number"
//           name="Seats"
//           value={formData.Seats}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Trunk Space</label>
//         <input
//           type="text"
//           name="Trunk_space"
//           value={formData.Trunk_space}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Price</label>
//         <input
//           type="number"
//           name="Price"
//           value={formData.Price}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Colours</label>
//         {formData.Colours.map((color, index) => (
//           <div key={index} className={styles.formGroup}>
//             <input
//               type="text"
//               value={color}
//               onChange={(e) => handleArrayChange(index, "Colours", e.target.value)}
//             />
//             {index === formData.Colours.length - 1 && (
//               <button
//                 type="button"
//                 onClick={() => addRow("Colours")}
//                 className={styles.addButton}
//               >
//                 +
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Interior Colours</label>
//         {formData.Interior_colours.map((color, index) => (
//           <div key={index} className={styles.row}>
//             <input
//               type="text"
//               value={color}
//               onChange={(e) =>
//                 handleArrayChange(index, "Interior_colours", e.target.value)
//               }
//             />
//             {index === formData.Interior_colours.length - 1 && (
//               <button
//                 type="button"
//                 onClick={() => addRow("Interior_colours")}
//                 className={styles.addButton}
//               >
//                 +
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Spoiler</label>
//         <input
//           type="text"
//           name="Spoiler"
//           value={formData.Spoiler}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Skirts</label>
//         <input
//           type="text"
//           name="Skirts"
//           value={formData.Skirts}
//           onChange={handleChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Image Front</label>
//         <input
//           type="text"
//           name="Front"
//           value={Images.Front}
//           onChange={handleImageChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Image Side</label>
//         <input
//           type="text"
//           name="Side"
//           value={Images.Side}
//           onChange={handleImageChange}
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label className={styles.label}>Image Rear</label>
//         <input
//           type="text"
//           name="Rear"
//           value={Images.Rear}
//           onChange={handleImageChange}
//         />
//       </div>
//       <button type="submit">Enter In Database</button>
//     </form>
//   );
// }

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import styles from "@/styles/form.module.css"

export default function AddCar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    Car_name: "",
    Description: "",
    Engine_type: "",
    Type: "",
    Wheels: "",
    Seats: 0,
    Trunk_space: "",
    Price: 0,
    Colours: [""],
    Interior_colours: [""],
    Spoiler: "",
    Skirts: "",
  });

  const [Images, setImages] = useState({
    Front: "",
    Side: "",
    Rear: "",
  });

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/auth");
    }
  }, [session, status, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleArrayChange = (index, arrayName, value) => {
    setFormData((prev) => {
      const updatedArray = [...prev[arrayName]];
      updatedArray[index] = value;
      return { ...prev, [arrayName]: updatedArray };
    });
  };

  const addRow = (arrayName) => {
    setFormData((prev) => ({
      ...prev,
      [arrayName]: [...prev[arrayName], ""],
    }));
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setImages((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    fetch("/api/AddCar", {
      method: "POST",
      body: JSON.stringify({
        formData,
        Images,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      });
  };

  if (status === "loading" || !session) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <form onSubmit={submit} className="max-w-4xl mx-auto p-6 space-y-8 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Add New Car</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="Car_name">Car Name</Label>
          <Input
            id="Car_name"
            name="Car_name"
            value={formData.Car_name}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Description">Description</Label>
          <Textarea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Engine_type">Engine Type</Label>
          <Input
            id="Engine_type"
            name="Engine_type"
            value={formData.Engine_type}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Type">Type</Label>
          <Input
            id="Type"
            name="Type"
            value={formData.Type}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Wheels">Wheels</Label>
          <Input
            id="Wheels"
            name="Wheels"
            value={formData.Wheels}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Seats">Seats</Label>
          <Input
            id="Seats"
            name="Seats"
            type="number"
            value={formData.Seats}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Trunk_space">Trunk Space</Label>
          <Input
            id="Trunk_space"
            name="Trunk_space"
            value={formData.Trunk_space}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Price">Price</Label>
          <Input
            id="Price"
            name="Price"
            type="number"
            value={formData.Price}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Colours</Label>
        {formData.Colours.map((color, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              value={color}
              onChange={(e) => handleArrayChange(index, "Colours", e.target.value)}
            />
            {index === formData.Colours.length - 1 && (
              <Button
                type="button"
                onClick={() => addRow("Colours")}
                variant="outline"
                size="icon"
              >
                +
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <Label>Interior Colours</Label>
        {formData.Interior_colours.map((color, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input
              value={color}
              onChange={(e) => handleArrayChange(index, "Interior_colours", e.target.value)}
            />
            {index === formData.Interior_colours.length - 1 && (
              <Button
                type="button"
                onClick={() => addRow("Interior_colours")}
                variant="outline"
                size="icon"
              >
                +
              </Button>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="Spoiler">Spoiler</Label>
          <Input
            id="Spoiler"
            name="Spoiler"
            value={formData.Spoiler}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="Skirts">Skirts</Label>
          <Input
            id="Skirts"
            name="Skirts"
            value={formData.Skirts}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-4">
        <Label>Images</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="Front">Front</Label>
            <Input
              id="Front"
              name="Front"
              value={Images.Front}
              onChange={handleImageChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="Side">Side</Label>
            <Input
              id="Side"
              name="Side"
              value={Images.Side}
              onChange={handleImageChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="Rear">Rear</Label>
            <Input
              id="Rear"
              name="Rear"
              value={Images.Rear}
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">Enter In Database</Button>
    </form>
  );
}

