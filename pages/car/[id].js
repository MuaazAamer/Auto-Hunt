import getAllcars from "@/data/cars";
import { useRouter } from "next/router";
import styles from "@/styles/specificCar.module.css";
import { useState } from "react";
import { GlobalContext } from "@/globalData/globalCarData";
import { getSession } from "next-auth/react"; // Importing getSession

// import Image from "next/image";
export default function SpecificCar(props) {
  const r = useRouter();
  if (r.isFallback) {
    return <div>Loading...</div>;
  }
  const data = props.carData;
  const id = r.query.id;
  const car = data[0].find((obj) => obj.ID == id);

  if (car) {
    const imageObj = data[1].find((obj) => obj.ID == id);
    const [currentIndex, setCurrentIndex] = useState("Front");
    const color=car.Colours

    const nextImage = () => {
      if (currentIndex === "Front") setCurrentIndex("Side");
      else if (currentIndex === "Side") setCurrentIndex("Back");
      else setCurrentIndex("Front");
    };

    const prevImage = () => {
      if (currentIndex === "Front") setCurrentIndex("Back");
      else if (currentIndex === "Side") setCurrentIndex("Front");
      else setCurrentIndex("Side");
    }; 
    // console.log(imageObj)

    return (
      <div className={styles.container}>
        <h1 className={styles.carName}>{car.Car_name}</h1>
        <div className={styles.imageContainer}>
          <img
            src={imageObj.Images[currentIndex]}
            alt={`Image of ${car.Car_name}`}
            className={styles.image}
          />
          {/* <Image
            src={images[currentIndex]}
            alt={`Image of ${car.Car_name}`}
            className={styles.image}
          /> */}
          <button className={`${styles.button} ${styles.prevButton}`} onClick={prevImage}>{"<"}</button>
          <button className={`${styles.button} ${styles.nextButton}`} onClick={nextImage}>{">"}</button>
        </div>

        <div className={styles.box}>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <td>Description</td>
                    <td>{car.Description}</td>
                </tr>
                <tr>
                    <td>Engine Type</td>
                    <td>{car.Engine_type}</td>
                </tr>
                <tr>
                    <td>Car Type</td>
                    <td>{car.Type}</td>
                </tr>
                <tr>
                    <td>Seats</td>
                    <td>{car.seats}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{car.Price}</td>
                </tr>
                <tr>
                    <td>Spoiler</td>
                    <td>{car.Spoiler}</td>
                </tr>
                <tr>
                    <td>Skirts</td>
                    <td>{car.Skirts}</td>
                </tr>
                <tr>
                  <td>Colors</td>
                  <td>
                    <div className={styles.colorsRow}>
                      {color.map((color, index) => (
                        <div
                          key={index}
                          className={styles.colorCircle}
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>
    );
  } else return <h1>Car Not Found</h1>;
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
// export async function getStaticPaths(){
//    const baseUrl = 'http://localhost:3000' ;
//     const response = await fetch(`${baseUrl}/api/GetCarData`);
//     const data = await response.json();
//   const ids=data[0].map(o=>o.ID)
//   const pathss=ids.map(o=>({params:{id:o.toString()}}))
//   return{
//       paths:pathss,
//       fallback:true
//   }
// }
