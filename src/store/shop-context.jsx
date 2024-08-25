import { createContext, useState } from "react";

import { TOYS } from "../data.js";

export const ShopContext = createContext({
  baseItems: [],
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

const ShopContextProvider = ({ children }) => {
  const [webshopState, setWebshopState] = useState({
    items: TOYS,
    itemsInCart: [],
  });

  const handleAddItem = (id) => {
    const copiedCart = [...webshopState.itemsInCart];
    const itemInCartIndex = copiedCart.findIndex((item) => item.id === id);

    if (itemInCartIndex === -1) {
      const copiedItems = [...webshopState.items];
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
        itemsInCart: copiedCart,
      }));
    }
  };

  const handleUpdateItem = (id, add) => {
    let copiedCart = [...webshopState.itemsInCart];
    const itemInCartIndex = copiedCart.findIndex((item) => item.id === id);

    if (add) {
      copiedCart[itemInCartIndex].quantity++;
    } else {
      copiedCart[itemInCartIndex].quantity--;

      if (copiedCart[itemInCartIndex].quantity === 0) {
        copiedCart = copiedCart.filter((item) => item.id !== id);
      }
    }

    setWebshopState((prevState) => ({
      ...prevState,
      itemsInCart: copiedCart,
    }));
  };

  const contextValue = {
    baseItems: webshopState.items,
    cartItems: webshopState.itemsInCart,
    addItemToCart: handleAddItem,
    updateItemQuantity: handleUpdateItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
