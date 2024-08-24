import { useContext, useState } from "react";

import Modal from "../Modal/Modal";
import { ShopContext } from "../../store/shop-context";
import cartImage from "../../assets/ui-images/cart.svg";
import closeImage from "../../assets/ui-images/close-button-black.svg";
import "./Basket.css";

const Basket = () => {
  const { cartItems } = useContext(ShopContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalState = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  let total = 0;
  return (
    <>
      <img
        className="basket-icon icon"
        src={cartImage}
        alt="basket-icon"
        onClick={handleModalState}
      />
      <Modal className="basket-modal" open={modalIsOpen}>
        {cartItems.length ? (
          <>
            <div className="modal-header">
              <h1>Kosár tartalma</h1>
              <img
                className="icon"
                src={closeImage}
                alt="close-icon"
                onClick={handleModalState}
              />
            </div>
            {cartItems.map((item) => {
              total += item.price * item.quantity;
              return (
                <div className="cart-item" key={item.id}>
                  <strong>{item.title}</strong>
                  <button className="cart-button">-</button>
                  <div>{item.quantity}db</div>
                  <button className="cart-button">+</button>
                  <strong>{item.price * item.quantity}Ft</strong>
                </div>
              );
            })}
            <div className="cart-summary">
              <h2>Végösszeg: {total}Ft</h2>
              <button>Kasszához</button>
            </div>
          </>
        ) : (
          <>
            <h2>A kosár üres</h2>
            <button onClick={handleModalState}>Ok</button>
          </>
        )}
      </Modal>
    </>
  );
};

export default Basket;
