import { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// CartProvider component
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for using cart context
export function useCart() {
  return useContext(CartContext);
}



  