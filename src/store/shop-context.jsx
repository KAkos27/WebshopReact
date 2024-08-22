import { createContext, useState } from "react";

import { TOYS } from "../data.js";

export const ShopContext = createContext({
  baseItems: [],
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

const ShopContextProvider = ({ children }) => {
  const [webShopState, setWebshopState] = useState({
    items: TOYS,
    itemsInCart: [],
  });

  const handleAddItem = (id) => {
    const updatedItems = [...webShopState.items];
    const filteredItem = updatedItems.filter((item) => item.id === id);
    const itemToAdd = { ...filteredItem[0], quantity: 1 };

    setWebshopState((prevState) => ({
      ...prevState,
      itemsInCart: [itemToAdd, ...prevState.itemsInCart],
    }));
  };

  const contextValue = {
    baseItems: webShopState.items,
    cartItems: webShopState.itemsInCart,
    addItemToCart: handleAddItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
