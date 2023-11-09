import React, { useState, useEffect } from "react";
import "./SignIn.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const navigateToReg = () => {
    navigate("/register");
  };

  // State variables to store email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle sign-in
  const handleSignIn = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("userData", JSON.stringify(res.data));
      if (res.data.role === "Customer") {
        navigate("/products");
      } else if (res.data.role === "Delivery Man") {
        navigate("/AvailableProductDelivery");
      } else {
        navigate("/inventory");
      }

      window.alert("Login success");
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <div className="boxContainer">
      <div className="signInBox">
        <div className="centerSignIn">
          <div className="signInContainer">
            <h2>Sign In</h2>

            <TextInput
              type={"text"}
              icon={"mail"}
              inputName={"Email"}
              placeholder={"Enter Email"}
              fieldValue={email}
              setFieldValue={setEmail}
            />
            <TextInput
              type={"password"}
              icon={"lock"}
              inputName={"Password"}
              placeholder={"Enter Password"}
              setFieldValue={setPassword}
              fieldValue={password}
            />

            <div className="buttonsContainer">
              <div className="forgotPassword">Forgot Password</div>
              <Button type={"button-blue"} text="Sign In" func={handleSignIn} />
            </div>
            <div className="newHereContainer">
              <div>
                <h2>New Here?</h2>
                <div className="newHereButton">
                  <Button
                    type={"button-black"}
                    func={navigateToReg}
                    text="Sign Up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="imageContainer">
        <div className="imageBox">
          <div>
            <div className="imgContainerText">
              <h2>Welcome to</h2>
              <h1> SHOP FUSION</h1>
              <p>Log in to access your account. </p>
            </div>
            <img className="signInImage" src="../../image/pic1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
