import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import {StoreContext} from "../Store/StoreProvider";

const HeaderCartButton = () => {

  const { CartItems } = useContext(StoreContext);
  const cart_quantity = () => {
    const totalQuantity = CartItems.reduce((total, dish) => total + dish.quantity, 0)
    return totalQuantity;
  }

  return (
    <button className={classes.button}>
      <CartIcon></CartIcon>
      <span>Your Cart</span>
      <span className={classes.badge}>{cart_quantity()}</span>
    </button>
  );
};

export default HeaderCartButton;
