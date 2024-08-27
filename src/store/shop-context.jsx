import { createContext, useState } from "react";

import { TOYS } from "../data.js";

export const ShopContext = createContext({
  baseItems: [],
  cartItems: [],
  searchItem: () => {},
  chooseCaregory: () => {},
  chooseOrder: () => {},
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

const ShopContextProvider = ({ children }) => {
  const [webshopState, setWebshopState] = useState({
    items: TOYS,
    itemsInCart: [],
  });

  const handelItemSearch = (searchValue) => {
    let filteredItems = [...TOYS];
    if (searchValue.trim()) {
      const copiedItems = [...TOYS];
      filteredItems = copiedItems.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setWebshopState((prevState) => ({
      ...prevState,
      items: filteredItems,
    }));
  };

  const handelCategoryChoice = (event) => {
    const category = event.target.value;
    let filteredItems = [...TOYS];
    if (category !== "empty") {
      filteredItems = filteredItems.filter((item) =>
        item.categories.includes(category)
      );
    }

    setWebshopState((prevState) => ({
      ...prevState,
      items: filteredItems,
    }));
  };

  const handleOrderChoice = (event) => {
    const order = event.target.value;
    let filteredItems = [...TOYS];

    if (order === "alphabetic") {
      filteredItems.sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      );
    }

    if (order === "cheap") {
      filteredItems.sort((a, b) => a.price - b.price);
    }

    if (order === "expensive") {
      filteredItems.sort((a, b) => b.price - a.price);
    }

    setWebshopState((prevState) => ({
      ...prevState,
      items: filteredItems,
    }));
  };

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
    searchItem: handelItemSearch,
    chooseCaregory: handelCategoryChoice,
    chooseOrder: handleOrderChoice,
    addItemToCart: handleAddItem,
    updateItemQuantity: handleUpdateItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
