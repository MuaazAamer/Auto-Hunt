import Carlist from "@/components/carlist";
import List from "@/components/lists";
import getAllcars from "@/data/cars";
import Link from "next/link";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react"; 

function convertPrices(Price) {
    const price = Price.replace(/[^0-9.-]+/g, ''); // Remove non-numeric characters
    return parseInt(price); // Convert to integer
}
function checkColors(arr,color){
    const car=[]
    arr.forEach(obj=>{
        if(obj.Colours.find(c=>{
            if(c===color) 
                return true
            else
                return false
            }))
            car.push(obj.ID)  
        }
    )
    console.log(car)
    return car
}


export default function filtering(props){
    
    const r=useRouter();
    const options=r.query.slug
    if (!options) {
        return <div>Loading...</div>;
    }
    //const car_data=props.carData;
    const car_d=props.carData;
    const car_data = getAllcars()
    const car_color=checkColors(car_data,options[0])
    const filtered=car_data.filter(obj=>obj.seats==options[3] && convertPrices(obj.Price)<=options[2] && car_color.includes(obj.ID))
    if(filtered)
        return <List arr={filtered} arr1={car_d[1]}/>
    else
        return <div>Loading..</div>
}

// export async function getStaticProps() {
        // const session = await getSession({ req: context.req });

        // // Check if session exists
        // if (!session) {
        //   // Redirect to login if no session
        //   return {
        //     redirect: {
        //       destination: '/',
        //       permanent: false,
        //     },
        //   };
        // }
//     try {
//       const baseUrl = 'http://localhost:3000' ;
//       const response = await fetch(`${baseUrl}/api/GetCarData`);
//       const data = await response.json();
  
//       if (!data) {
//         return {
//           notFound: true, 
//         };
//       }
  
//       return {
//         props: {
//           carData: data
//         }
//     };
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return {
//         props: {
//           carData: []
//         }
//       };
//     }
//   }
//   export async function getStaticPaths(){
//     const baseUrl = 'http://localhost:3000' ;
//      const response = await fetch(`${baseUrl}/api/GetCarData`);
//      const data = await response.json();
//    const ids=data[0].map(o=>o.ID)
//    const pathss=ids.map(o=>({params:{id:o.toString()}}))
//    return{
//        paths:pathss,
//        fallback:true
//    }
//  }
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
  
  

 