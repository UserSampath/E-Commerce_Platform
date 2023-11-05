import React from "react";
import "./button.css";
const Button = ({ type, text, func = () => {} }, buttonType = "") => {
  return (
    <div className={type} onClick={func} type={buttonType}>
      {text}
    </div>
  );
};

export default Button;
