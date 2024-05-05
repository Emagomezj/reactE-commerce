import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([
    { title: "algun ítem", quantity: 30, price: 200 },
    { title: "otro ítem", quantity: 20, price: 300 },
  ]);

  const addToCart = (product) => {
    setItems([...items, product]);
  };

  const removeFromCart = (product) => {
    setItems(items.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
