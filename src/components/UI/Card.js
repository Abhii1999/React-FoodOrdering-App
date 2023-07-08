import React, { useContext } from "react";
import classes from "./Card.module.css";
import {StoreContext} from "../Store/StoreProvider";

const Card = (props) => {
  const { orderAmount, orderIncriment } = useContext(StoreContext);

  const renderedData = props.dish.map((item) => (
    <div className={classes.meals} key={item.id}>
      <div>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <h6>rs.{item.price}</h6>
      </div>
      <div>
        <div className={classes.amount}>
          <h5>Amount</h5>
          <div>{orderAmount}</div>
        </div>
        <div>
          <button onClick={() => orderIncriment(item.id)}>+Add</button>
        </div>
      </div>
    </div>
  ));

  return <>{renderedData}</>;
};

export default Card;
