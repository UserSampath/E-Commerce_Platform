import React from 'react'
import "./button.css"
const Button = ({ type, text}) => {
    return <div className={type == "1" ? "button-1" : "button-2"}>{text}</div>;
};

export default Button