import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const LogOutButton = () => {
  const navigate = useNavigate();
    const clickedLogOut = () => {
        localStorage.removeItem("userData");
         navigate("/");
    }
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          width: "170px",
          height: "60px",
          position: "absolute",
          right: "60px",
          top: "50px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Button type={"button-black"} text="Log Out" func={clickedLogOut} />
      </div>
    </div>
  );
};

export default LogOutButton;
