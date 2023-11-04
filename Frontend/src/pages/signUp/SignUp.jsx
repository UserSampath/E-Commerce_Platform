import React, { useState } from "react";
import "./SignUp.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import Image from "react-bootstrap/Image";

const SignUp = () => {
  const navgate = useNavigate();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [companyId, setCompanyId] = useState("");
  const [selectedRole, setSelectedRole] = useState("user"); // Default role
  const [image, setImage] = useState("");
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSignUp = () => {
    // Log the field values
    console.log("First Name:", fName);
    console.log("Second Name:", lName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  const navigateToLogin = () => {
    navgate("/signin");
  };

  const cancellSignup = () => {
    navgate("/");
  };
  return (
    <div className="boxContainer">
      <div className="signInBox">
        <div className="centerSignIn">
          <div className="signContainer2">
            <h2>Sign Up</h2>
            {step == 1 && (
              <>
                <TextInput
                  type={"text"}
                  icon={"profile"}
                  inputName={"First Name"}
                  placeholder={"Enter First Name"}
                  fieldValue={fName}
                  setFieldValue={setFName}
                />
                <TextInput
                  type={"text"}
                  icon={"profile"}
                  inputName={"Second Name"}
                  placeholder={"Enter Second Name"}
                  fieldValue={lName}
                  setFieldValue={setLName}
                />
                <TextInput
                  type={"email"}
                  icon={"mail"}
                  inputName={"email"}
                  placeholder={"Enter Email"}
                  fieldValue={email}
                  setFieldValue={setEmail}
                />
                <TextInput
                  type={"password"}
                  icon={"lock"}
                  inputName={"Password"}
                  placeholder={"Enter Password"}
                  fieldValue={password}
                  setFieldValue={setPassword}
                />
                <div className="buttonsContainer">
                  <Button
                    type={"button-red"}
                    text="Cancell"
                    func={cancellSignup}
                  />
                  <Button type={"button-green"} text="Next" func={nextStep} />
                </div>
              </>
            )}

            {step == 2 && (
              <>
                <div className="user-image-container">
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={(e) => {
                      setImage(e.base64);
                    }}
                  />
                </div>
                <div className="">
                  <img
                    src={image}
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div>
                  <label>Select User Role:</label>
                  <br />
                  <select
                    style={{
                      width: "100%",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                    value={selectedRole}
                    onChange={handleRoleChange}
                  >
                    <option value="Customer">Customer</option>
                    <option value="Delivery Man">Delivery Man</option>
                    <option value="Inventory Keeper">Inventory Keeper</option>
                  </select>
                </div>
                {selectedRole === "Delivery Man" ||
                  (selectedRole === "Inventory Keeper" && (
                    <>
                      {" "}
                      <TextInput
                        type={"text"}
                        // icon={"lock"}
                        inputName={"Company ID"}
                        placeholder={"Enter Company ID"}
                        fieldValue={companyId}
                        setFieldValue={setCompanyId}
                      />
                    </>
                  ))}
                <div className="buttonsContainer">
                  <Button type={"button-blue"} text="Back" func={prevStep} />
                  <Button
                    type={"button-green"}
                    text="Sign up"
                    func={nextStep}
                  />
                </div>
              </>
            )}

            <div className="newHereContainer">
              <div>
                <h2>Already have an account?</h2>
                <div className="newHereButton2">
                  <Button
                    type={"button-black"}
                    text="Sign In"
                    func={navigateToLogin}
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
