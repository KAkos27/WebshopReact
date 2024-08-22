import { createContext } from "react";

import { TOYS } from "../data.js";

export const ShopContext = createContext({
  baseItems: [],
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

const ShopContextProvider = ({ children }) => {
  const contextValue = { baseItems: TOYS };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
