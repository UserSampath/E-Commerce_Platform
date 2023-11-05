import React, { useState } from "react";
import "./SignUp.css";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import axios from "axios";

const SignUp = () => {
  const navgate = useNavigate();

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [companyId, setCompanyId] = useState("");
  const [vNumber, setVnumber] = useState("");
  const [selectedRole, setSelectedRole] = useState("Customer"); // Default role
  const [image, setImage] = useState("");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleSignUp = async () => {
    // Log the field values
    console.log(selectedRole);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        firstName: fName,
        lastName: lName,
        password: password,
        email: email,
        mobileNumber: phone,
        role: selectedRole,
        profilePic: image,
        vehicleNo: vNumber,
        address: address,
      });

      if (res.status == 200) {
        localStorage.setItem("userData", JSON.stringify(res.data));
        if (res.data.role === "Customer") {
          navgate("/Inventory");
        } else if (res.data.role === "Delivery Man") {
          // navigate("/ordersToAccept");
        } else {
          // navigate("/inventory");
        }

        window.alert("Successfully registered");
        return;
      }
    } catch (err) {
      if (err.response.statusText == "Conflict")
        return window.alert("User already registered");
      window.alert(err.response.statusText);
    }
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
                {/* <div className="">
                  <img
                    src={image}
                    style={{ width: "200px", height: "200px" }}
                  />
                </div> */}
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
                <div>
                  <label style={{ marginTop: "10px" }}>Phone Number</label>
                  <input
                    type="text"
                    inputName={"Phone Number"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      height: "40px",
                      padding: "5px",
                    }}
                  />
                </div>
                {selectedRole === "Delivery Man" && (
                  <>
                    {" "}
                    <label style={{ marginTop: "10px" }}>Vehicle Number</label>
                    <input
                      required
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        height: "40px",
                        padding: "5px",
                      }}
                      value={vNumber}
                      onChange={(e) => setVnumber(e.target.value)}
                    />
                    <br />
                  </>
                )}

                {(selectedRole === "Inventory Keeper" ||
                  selectedRole === "Delivery Man") && (
                  <>
                    {" "}
                    <label style={{ marginTop: "10px" }}>Company ID</label>
                    <input
                      type={"text"}
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                        height: "40px",
                        padding: "5px",
                      }}
                      value={companyId}
                      onChange={(e) => setCompanyId(e.target.value)}
                    />
                  </>
                )}
                {selectedRole === "Customer" && (
                  <>
                    {" "}
                    <label style={{ marginTop: "10px" }}>Address</label>
                    <textarea
                      required
                      style={{
                        width: "100%",
                        borderRadius: "5px",
                      }}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </>
                )}
                <div className="buttonsContainer">
                  <Button type={"button-blue"} text="Back" func={prevStep} />
                  <button type={"submit"} onClick={handleSignUp}>
                    Signup
                  </button>
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
