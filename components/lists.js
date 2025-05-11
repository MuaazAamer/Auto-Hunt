import Car from "./car";
import styles from './car.module.css';
export default function List(props)
{
    return(
        <div className={styles.cardContainer}>
        {props.arr.map(item=><Car id={item.ID} name={item.Car_name} images={props.arr1.find(obj=>obj.ID === item.ID).Images} price={item.Price}/>)}
        </div>
    );
}
