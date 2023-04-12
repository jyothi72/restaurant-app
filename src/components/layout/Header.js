import { Fragment } from "react";
import classes from "./header.module.css";
import HeaderButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>React Meal</h2>
        <HeaderButton onClick={props.onClick}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};
export default Header;
