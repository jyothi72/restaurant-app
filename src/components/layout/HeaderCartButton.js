import CartIcon from "../Cart/Carticon"
import classes from './HeaderCarbutton.module.css'
const HeaderButton=(props)=>{
return(
    <button className={classes.button} onClick={props.onClick}> 
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>YourCart</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
)
}
export default HeaderButton