import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;