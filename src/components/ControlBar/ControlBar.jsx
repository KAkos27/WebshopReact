import { useState } from "react";

import controlBarIcon from "../../assets/ui-images/control-bar-icon.svg";
import closeButton from "../../assets/ui-images/close-button.svg";
import "./ControlBar.css";

const ControlBar = () => {
  const [isControlBarOpen, setIsControlBarOpen] = useState(false);

  const handleClickIcon = () => {
    setIsControlBarOpen((prevState) => !prevState);
  };

  return (
    <>
      {isControlBarOpen ? (
        <img className="icon" src={closeButton} onClick={handleClickIcon} />
      ) : (
        <img className="icon" src={controlBarIcon} onClick={handleClickIcon} />
      )}
    </>
  );
};

export default ControlBar;
