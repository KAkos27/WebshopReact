import { useState, useContext } from "react";

import Modal from "../Modal/Modal";
import controlBarIcon from "../../assets/ui-images/control-bar-icon.svg";
import closeButton from "../../assets/ui-images/close-button-black.svg";
import { ShopContext } from "../../store/shop-context";
import "./ControlBar.css";

const ControlBar = () => {
  const [isControlBarOpen, setIsControlBarOpen] = useState(false);
  const { chooseCaregory, chooseOrder } = useContext(ShopContext);

  const handleClickIcon = () => {
    setIsControlBarOpen((prevState) => !prevState);
  };

  return (
    <>
      <img className="icon" src={controlBarIcon} onClick={handleClickIcon} />
      <Modal className="control-bar__modal" open={isControlBarOpen}>
        <img className="icon" src={closeButton} onClick={handleClickIcon} />
        <div className="control-bar__selects">
          <select onChange={chooseCaregory}>
            <option value="empty">Válassz kategóriát!</option>
            <option value="playtoy">Fárasztó játék</option>
            <option value="feedingtoy">Etető játék</option>
          </select>
          <select onChange={chooseOrder}>
            <option value="empty">Válassz rendezési szempontot!</option>
            <option value="alphabetic">ABC sorrend</option>
            <option value="cheap">Legolcsóbb</option>
            <option value="expensive">Legdrágább</option>
          </select>
          <strong>Fejlesztés alatt...</strong>
        </div>
      </Modal>
    </>
  );
};

export default ControlBar;
