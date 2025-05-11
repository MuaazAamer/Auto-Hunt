import Carlist from "@/components/carlist";
import TypeFilter from "@/components/typefilter";
import getAllcars, { getAlltypes } from "@/data/cars"
import { GlobalContext } from "@/globalData/globalCarData";
import styles from "@/styles/featuredpage.module.css"
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { getSession } from "next-auth/react"; // Importing getSession

export default function FeaturePage(props)
{
    //const [car_data,setcarData]=useState([]);
    const [carData,setcarData]=useContext(GlobalContext);
    const r=useRouter();
    function click(name){
        
        r.push('/car/filter/'+name)
    }

    //checking mongo db:
    useEffect(()=>{
        console.log(props.carData)
        setcarData(props.carData)
    },[])

    if(carData[0].length!==0) 
    { 
        console.log(carData)
        //return <Carlist arr={car_data}/>
        const car_types=getAlltypes();
        const featured=[[],[]]
        for (let i=0;i<6;i++)
        {
            const randomNumber = Math.floor(Math.random() * (19 - 1 + 1)) + 1;
            if(!featured[0].find(obj=>obj.ID===randomNumber))
            {
                featured[0].push(carData[0][randomNumber])
                featured[1].push(carData[1][randomNumber])
            }
        }

        return(
            <div>
                <h1 class={styles.pageheader}>Featured Cars</h1>
                <div className={styles.typeFilterRow}>
                    {car_types.map(obj=><button className={styles.filterbutton} onClick={()=>click(obj)}><TypeFilter typename={obj}/></button>)}
                </div>
                <div >
                    <Carlist arr={featured}/>
                </div>
            </div>
        );
    }
}

export async function getServerSideProps(context) {
  // Get the session from the request context
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
