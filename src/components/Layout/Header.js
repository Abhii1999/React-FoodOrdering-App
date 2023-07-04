import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import meals from '../../assets/meals.jpg'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.mainimage}>
        <img src={meals} alt="the food" />
      </div>
    </Fragment>
  );
};

export default Header;
