import React from "react";
import "./button.css";
const Button = ({ type, text, func = () => {} }) => {
  return (
    <div className={type} onClick={func}>
      {text}
    </div>
  );
};

export default Button;
