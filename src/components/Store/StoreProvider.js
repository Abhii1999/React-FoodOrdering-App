import React, { useState, createContext } from "react";

export const StoreContext = createContext();

function StoreProvider(props) {
  const [CartItems, setCartItems] = useState([]);

  const addToCart = (dish) => {
    const dishIndex = CartItems.findIndex((item) => item.id === dish.id);

    if (dishIndex !== -1) {
      const updatedCart = [...CartItems];
      updatedCart[dishIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      const updatedDish = { ...dish, quantity: 1 };
      setCartItems([...CartItems, updatedDish]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(CartItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <StoreContext.Provider
      value={{ CartItems, addToCart, removeFromCart, clearCart }}
    >
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;
