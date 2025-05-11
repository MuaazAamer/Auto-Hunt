import Car from "./car";
import styles from './car.module.css';
export default function Carlist(props)
{
    return(
        <div className={styles.cardContainer}>
        {props.arr[0].map(item=><Car id={item.ID} name={item.Car_name} images={props.arr[1].find(obj=>obj.ID===item.ID).Images} price={item.Price} admin={props.admin}/>)}
        </div>
    );
}
