import React from "react";
import "./textInput.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
const TextInput = ({
  icon,
  inputName,
  placeholder,
  type,
  setFieldValue,
  fieldValue,
}) => {
  const handleChange = (e) => {
    // Call the setValue function with the new value
    setFieldValue(e.target.value);
  };
  return (
    <div className="inputComponent">
      <p className="inputName">{inputName}</p>
      <div className="inputLine">
        {icon === "mail" && <HiOutlineMail className="icon" />}
        {icon === "profile" && <BsPerson className="icon" />}
        {icon === "lock" && <FiLock className="icon" />}

        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          value={fieldValue}
        />
      </div>
    </div>
  );
};

export default TextInput;
