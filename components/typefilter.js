
import styles from "./typefilter.module.css"
export default function TypeFilter(props)
{
    const image=()=>{
        if (props.typename==="Sedan")
            return "cars_images/sedan.jpg"
        else if (props.typename==="Sport")
            return "cars_images/sport.jpg"
        else if (props.typename==="Super")
            return "cars_images/super.jpg"
        else if (props.typename==="Hyper")
            return "cars_images/hyper.jpg"    
    }
    return(
        <div className={styles.typeFilterContainer}>
          <img  className={styles.typeFilterImage} src={image()} alt={`Image of ${props.typename}`}/>
          <div className={styles.typeFilterText}>{props.typename}</div>
        </div>
    )
}