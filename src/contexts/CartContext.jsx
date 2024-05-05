import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (item, quantity) => {
    const exist = items.some((i) => i.id === item.id);
    if (exist) {
      const updateItems = items.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + quantity };
        } else {
          return i;
        }
      });
      setItems(updateItems);
    } else {
      setItems([...items, { ...item, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    setItems(items.filter((item) => item.id !== id));
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
