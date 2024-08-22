import Items from "./components/Items/Items";
import ControlBar from "./components/ControlBar/ControlBar";
import ShopContextProvider from "./store/shop-context";

import "./App.css";

const App = () => {
  return (
    <ShopContextProvider>
      <ControlBar />
      <Items />
    </ShopContextProvider>
  );
};

export default App;
