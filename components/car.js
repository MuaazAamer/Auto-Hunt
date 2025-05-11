import React from 'react';
import styles from './car.module.css'; // Importing the CSS module
import Link from 'next/link';
export default function Car(props)
{
  
        return(
            <Link href={"/car/"+props.id} className={styles.card}>
                <div className={styles.cardContent}>
                    {console.log(props.images)}
                    <img src={props.images.Front} alt={props.name} className={styles.cardImage} />
                    <h1 className={styles.cardTitle}>{props.name}</h1>
                    <p className={styles.cardPrice}>{props.price}</p>
                </div>
            </Link>
        );
  

}