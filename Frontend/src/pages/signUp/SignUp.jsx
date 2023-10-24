import React from "react";
import "./SignUp.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const SignUp = () => {
  return (
    <div className="boxContainer">
      <div className="signInBox">
        <div className="centerSignIn">
          <div className="signContainer2">
            <h2>Sign Up</h2>
            <TextInput
              type={"text"}
              icon={"profile"}
              inputName={"First Name"}
              placeholder={"Enter First Name"}
            />
            <TextInput
              type={"password"}
              icon={"profile"}
              inputName={"Second Name"}
              placeholder={"Enter Second Name"}
            />
            <TextInput
              type={"email"}
              icon={"mail"}
              inputName={"email"}
              placeholder={"Enter Email"}
            />

            <TextInput
              type={"password"}
              icon={"lock"}
              inputName={"Password"}
              placeholder={"Enter Password"}
            />

            <div className="buttonsContainer">
              <Button type={"1"} text="Sign Up" />
            </div>
            <div className="newHereContainer">
              <div>
                <h2>Already have an account?</h2>
                <div className="newHereButton2">
                  <Button type={"2"} text="Sign In" />
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
              <p>Register to create your account </p>
            </div>
            <img className="signInImage" src="../../image/pic1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
