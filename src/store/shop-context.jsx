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
    const copiedCart = [...webShopState.itemsInCart];
    const itemInCartIndex = copiedCart.findIndex((item) => item.id === id);

    if (itemInCartIndex === -1) {
      const copiedItems = [...webShopState.items];
      const filteredItem = copiedItems.find((item) => item.id === id);
      const itemToAdd = { ...filteredItem, quantity: 1 };

      setWebshopState((prevState) => ({
        ...prevState,
        itemsInCart: [itemToAdd, ...prevState.itemsInCart],
      }));
    } else {
      copiedCart[itemInCartIndex].quantity++;

      setWebshopState((prevState) => ({
        ...prevState,
        itemInCart: copiedCart,
      }));
    }
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
