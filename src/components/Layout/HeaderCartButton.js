import React, { useContext, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { StoreContext } from "../Store/StoreProvider";
import CartModal from "../Modal/CartModal";

const HeaderCartButton = () => {
  const [showModal, setShowModal] = useState(false);

  const { CartItems } = useContext(StoreContext);
  const cart_quantity = () => {
    const totalQuantity = CartItems.reduce(
      (total, dish) => total + dish.quantity,
      0
    );
    return totalQuantity;
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <button className={classes.button} onClick={() => setShowModal(true)}>
        <CartIcon></CartIcon>
        <span>Your Cart</span>
        <span className={classes.badge}>{cart_quantity()}</span>
      </button>
      {showModal && <CartModal closeModal={closeModal}></CartModal>}
    </>
  );
};

export default HeaderCartButton;
