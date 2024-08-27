import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ className, open, children }) => {
  const modal = useRef();

  useEffect(() => {
    open ? modal.current.showModal() : modal.current.close();
  }, [open]);

  return createPortal(
    <dialog ref={modal} className={className}>
      {children}
    </dialog>,
    document.querySelector("#modal-root")
  );
};

export default Modal;
