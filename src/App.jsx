import Items from "./components/Items/Items";
import ShopContextProvider from "./store/shop-context";
import Nav from "./components/Nav/Nav";
import "./App.css";

const App = () => {
  return (
    <ShopContextProvider>
      <Nav />
      <Items />
    </ShopContextProvider>
  );
};

export default App;
