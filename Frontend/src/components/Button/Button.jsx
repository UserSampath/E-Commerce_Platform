import React from 'react'
import "./button.css"
const Button = ({ type, text}) => {
    return <div  className={type}>{text}</div>;
};

export default Button