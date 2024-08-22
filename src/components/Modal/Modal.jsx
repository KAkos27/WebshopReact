import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const Modal = ({ onCloseModal, open, children }) => {
  const modal = useRef();

  useEffect(() => {
    open && modal.current.showModal();
  }, [open]);

  return createPortal(
    <dialog ref={modal} className="modal">
      {children}
      <form method="dialog">
        <button onClick={onCloseModal}>Ok</button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
