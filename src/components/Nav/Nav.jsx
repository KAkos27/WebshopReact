import Basket from "../Basket/Basket";
import ControlBar from "../ControlBar/ControlBar";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ControlBar />
      <Basket />
    </div>
  );
};

export default Nav;
