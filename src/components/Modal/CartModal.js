import React, { useContext } from "react";
import classes from "./CartModal.module.css";
import { StoreContext } from "../Store/StoreProvider";
import ReactDOM from "react-dom";

const CartModal = (props) => {
  const { CartItems, addToCart, removeFromCart, clearCart } =
    useContext(StoreContext);
  const update_quantity = (id) => {
    const cartItem = CartItems.find((item) => item.id === id);
    const quantity = cartItem ? cartItem.quantity : 0;
    return quantity;
  };
  const renderedData = CartItems.map((item) => (
    <>
      <div className={classes.meals} key={item.id}>
        <div>
          <h5>{item.name}</h5>
          <p>{item.description}</p>
          <h6>rs.{item.price}</h6>
        </div>
        <div>
          <div className={classes.amount}>
            <h5>Amount</h5>
            <div>{update_quantity(item.id)}</div>
          </div>
        </div>
      </div>
    </>
  ));

  return ReactDOM.createPortal(
    <>
      <div className={classes.modalwrapper}>
        <div className={classes.modalcontent}>
          {renderedData}
          <div className={classes.footer}>
            <h5>TOTAL : 2000</h5>
            <button onClick={() => props.closeModal()}>Close the cart</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("cartmodal")
  );
};

export default CartModal;
