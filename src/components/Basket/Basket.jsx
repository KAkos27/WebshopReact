import { useContext, useState } from "react";

import cartImage from "../../assets/ui-images/cart.svg";
import Modal from "../Modal/Modal";
import { ShopContext } from "../../store/shop-context";
import "./Basket.css";

const Basket = () => {
  const { cartItems } = useContext(ShopContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalState = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <img
        src={cartImage}
        className="basket-icon icon"
        onClick={handleModalState}
      />
      <Modal onCloseModal={handleModalState} open={modalIsOpen}>
        <h2>Kutya</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={Math.random()}>
              {item.title} {item.quantity}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
};

export default Basket;
