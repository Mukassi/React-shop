import { createContext, useState } from "react";

export const CartContext = createContext({
  products: 0,
  price: 0,
});

export const CartProvider = ({ children }) => {
  const [productsCount, setProductsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateCart = (productsCount, price) => {
    setProductsCount((prevState) => prevState + productsCount);
    setTotalPrice((prevState) => prevState + price);
  };

  return (
    <CartContext.Provider value={{ productsCount, totalPrice, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
