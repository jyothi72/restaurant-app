import Mealitemform from './Mealitemform'
import classes from './mealitem.module.css'
const Mealitem=(props)=>{
    const price=`$${props.price.toFixed(2)}`
return(
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
             <Mealitemform/>
        </div>
    </li>
)
}
export default Mealitem