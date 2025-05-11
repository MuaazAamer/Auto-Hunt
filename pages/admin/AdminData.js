// import Carlist from "@/components/carlist";
// import { GlobalContext } from "@/globalData/globalCarData"
// import { useContext, useEffect } from "react"


// export default function AdminData(props){
//      const [carData,setcarData]=useContext(GlobalContext);
//      useEffect(()=>{
//         const response =fetch('/api/GetCarData', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }).then(res=>res.json()).then(data=>{
//             if(data)
//             {
//               console.log(data)
//               setcarData(data)
//             }
//         })
//       },[])
//       if(carData[0].length!==0)
//        return <Carlist arr={carData} admin={false}/>
//       else {
//         return <h1>loading</h1>
//       }

// }


import Carlist from "@/components/carlist";
import { GlobalContext } from "@/globalData/globalCarData";
import { useContext, useEffect } from "react";
import { useSession, signIn } from "next-auth/react"; // Import NextAuth hooks
import { useRouter } from "next/router";

export default function AdminData(props) {
  const [carData, setCarData] = useContext(GlobalContext);
  const { data: session, status } = useSession(); // Get session data
  const router = useRouter(); // Router for navigation

  useEffect(() => {
    // Redirect to login if user is not authenticated
    if (status === "unauthenticated") {
      router.push("/"); // Redirect to login page
    } else {
      // Fetch car data if the user is authenticated
      const fetchData = async () => {
        const response = await fetch("/api/GetCarData", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (data) {
          console.log(data);
          setCarData(data);
        }
      };

      if (status === "authenticated") {
        fetchData();
      }
    }
  }, [status, setCarData, router]);

  if (status === "loading") {
    // Display a loading message while the session is being loaded
    return <h1>Loading...</h1>;
  }

  if (carData && carData[0] && carData[0].length !== 0) {
    return <Carlist arr={carData} admin={true} />;
  } else {
    return <h1>Loading car data...</h1>;
  }
}
s