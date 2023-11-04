import React from "react";
import "./SignIn.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const SignIn = () => {
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
            />
            <TextInput
              type={"password"}
              icon={"lock"}
              inputName={"Password"}
              placeholder={"Enter Password"}
            />

            <div className="buttonsContainer">
              <div className="forgotPassword">Forgot Password</div>
              <Button type={"button-blue"} text="Sign In" />
            </div>
            <div className="newHereContainer">
              <div>
                <h2>New Here?</h2>
                <div className="newHereButton">
                  <Button type={"button-black"} text="Sign Up" />
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
              <h1>APPE System</h1>
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
