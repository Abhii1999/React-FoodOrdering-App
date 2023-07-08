import React, { useState, createContext } from "react";

export const StoreContext = createContext();

function StoreProvider(props) {
  const [orderAmount, setorderAmount] = useState([]);

  //   const addToCart = (item) => {
  //     setCartItems([...cartItems, item]);
  //   };

  //   const removeFromCart = (itemId) => {
  //     setCartItems(cartItems.filter(item => item.id !== itemId));
  //   };

  //   const clearCart = () => {
  //     setCartItems([]);
  //   };

  const orderIncriment = (id) => {
    setorderAmount((prevValue) => prevValue + 1);
  };

  return (
    <StoreContext.Provider value={{ orderAmount, orderIncriment }}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
