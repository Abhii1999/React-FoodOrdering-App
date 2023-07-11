import React, { useContext } from "react";
import classes from "./Card.module.css";
import {StoreContext} from "../Store/StoreProvider";

const Card = (props) => {
  const { CartItems, addToCart, removeFromCart, clearCart } = useContext(StoreContext);
  const update_quantity = (id) => {
    const cartItem = CartItems.find((item) => item.id === id);
    const quantity = cartItem ? cartItem.quantity : 0;
    return quantity;
  }
  const renderedData = props.dish.map((item) => (
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
        <div>
          <button onClick={() => addToCart(item)}>+Add</button>
        </div>
      </div>
    </div>
    <hr className={classes.separatorStyle} />
    </>
    
  ));

  return <>{renderedData}</>;
};

export default Card;
