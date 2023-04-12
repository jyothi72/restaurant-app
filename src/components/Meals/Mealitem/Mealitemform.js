import classes from './Mealitemform.module.css'
import Input from '../../UI/input'
const Mealitem=(props)=>{
 return(
    <form className={classes.form}>
        <Input label="Amount" input={{id:'amount' ,type:'number',min:'1',max:'5' ,defaultValue:'1'}}/>
        <button>+ Add</button>
    </form>
 )
}
export default Mealitem