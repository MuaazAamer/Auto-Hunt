// import Carlist from "@/components/carlist";
// import getAllcars from "@/data/cars"
// import { GlobalContext } from "@/globalData/globalCarData";
// import { useContext } from "react";

// export default function AllCars()
// {
//     const cardata=useContext(GlobalContext)
//     if(cardata)
//     return(
//         <div> 
//             <Carlist arr={cardata[0]}></Carlist>
//         </div>
//     );
// }


import { useEffect, useState, useContext } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Carlist from "@/components/carlist";
import { GlobalContext } from "@/globalData/globalCarData";

export default function AllCars() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const cardata = useContext(GlobalContext);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading") return; // Wait for session status to be determined
    if (!session) {
      router.push("/"); // Redirect to login page if not authenticated
    } else {
      setIsAuthorized(true); // User is authenticated
    }
  }, [session, status, router]);

  if (status === "loading" || !isAuthorized) {
    return <div>Loading...</div>; // Show loading until authenticated
  }

  return (
    <div>
      {cardata && <Carlist arr={cardata[0]}></Carlist>}
    </div>
  );
}
