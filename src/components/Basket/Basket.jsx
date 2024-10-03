import { useContext, useState } from "react";

import Modal from "../Modal/Modal";
import { ShopContext } from "../../store/shop-context";
import cartImage from "../../assets/ui-images/cart.svg";
import closeImage from "../../assets/ui-images/close-button-black.svg";
import noResults from "../../assets/ui-images/no-results.svg";
import "./Basket.scss";

const Basket = () => {
  const { cartItems, updateItemQuantity } = useContext(ShopContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalState = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  let total = 0;
  return (
    <>
      <div>
        <img
          className="basket-icon icon"
          src={cartImage}
          alt="basket-icon"
          onClick={handleModalState}
        />
      </div>

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
                  <button
                    className="cart-button"
                    onClick={() => {
                      updateItemQuantity(item.id, false);
                    }}
                  >
                    -
                  </button>
                  <p>{item.quantity}db</p>
                  <button
                    className="cart-button"
                    onClick={() => {
                      updateItemQuantity(item.id, true);
                    }}
                  >
                    +
                  </button>
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
            <img className="icon" src={noResults} alt="no results" />
            <h2>A kosár üres</h2>
            <button className="cart-button" onClick={handleModalState}>
              Ok
            </button>
          </>
        )}
      </Modal>
    </>
  );
};

export default Basket;
