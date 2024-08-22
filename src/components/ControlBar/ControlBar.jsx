import { useState } from "react";

import controlBarIcon from "../../assets/ui-images/control-bar-icon.svg";
import closeButton from "../../assets/ui-images/close-button.svg";
import "./ControlBar.css";

const ControlBar = () => {
  const [isControlBarVisible, setIsControlBarVisible] = useState(false);

  const handleClickIcon = () => {
    setIsControlBarVisible((prevState) => !prevState);
  };

  return (
    <>
      {isControlBarVisible ? (
        <img className="icon" src={closeButton} onClick={handleClickIcon} />
      ) : (
        <img className="icon" src={controlBarIcon} onClick={handleClickIcon} />
      )}
    </>
  );
};

export default ControlBar;
