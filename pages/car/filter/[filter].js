import Carlist from "@/components/carlist";
import List from "@/components/lists";
import getAllcars from "@/data/cars"
import { GlobalContext } from "@/globalData/globalCarData";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react"; // Importing getSession


export default function FilterPage(props)
{
    
    const r=useRouter();
    const type=r.query.filter
    const car_data=props.carData;
    const filtered = car_data[0].filter((car) => car.Type === type);
    if(filtered)
    {
        return (
          <List arr={filtered} arr1={car_data[1]}/>
        );
    }
}

export async function getServerSideProps(context) {
  
  const session = await getSession({ req: context.req });

    // Check if session exists
    if (!session) {
      // Redirect to login if no session
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  try {
    const baseUrl = 'http://localhost:3000' ;
    const response = await fetch(`${baseUrl}/api/GetCarData`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true, 
      };
    }

    return {
      props: {
        carData: data
      }
  };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        carData: []
      }
    };
  }
}

