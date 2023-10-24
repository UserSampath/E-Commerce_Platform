import React from "react";
import "./textInput.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
const TextInput = ({ icon, inputName, placeholder, type }) => {
  return (
    <div className="inputComponent">
      <p className="inputName">{inputName}</p>
      <div className="inputLine">
        {icon === "mail" && <HiOutlineMail className="icon" />}
        {icon === "profile" && <BsPerson className="icon" />}
        {icon === "lock" && <FiLock className="icon" />}

        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default TextInput;
