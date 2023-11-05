import React from "react";
import Button from "../Button/Button";
import "./CustomerOrdersComponent.css";
const CustomerOrdersComponent = ({ name, customer, address,quantity }) => {
  return (
    <div style={{ marginBottom: "5px" }} className="boxMiddle">
      <div
        className="itemContainer"
        style={{
          width: "1000px",
          height: "90px",
          background: "rgba(171, 205, 239, 0.1)",
          border: "1px solid black",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
        }}>
        <div style={{ marginLeft: "20px", marginTop: "7px" }}>
          <img
            src="../../../image/lap.jpg"
            width={"75px"}
            style={{ borderRadius: "10px" }}
            alt=""
          />
        </div>
        <div className="nameAndDescriptionContainer">
          <div style={{ marginTop: "12px" }}>
            <h2>{name}</h2>
            <div style={{ display: "flex", marginRight: "0px" }}>
              <h3>Customer:</h3>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "10",
                  marginTop: "5px",
                  marginLeft: "10px",
                  fontFamily: "-moz-initial",
                }}>
                {customer}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}>
          <h3>Address</h3>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "10",
              marginTop: "5px",
              fontFamily: "-moz-initial",
            }}>
            {address}
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            
          }}>
          <h3>Quantity</h3>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "10",
              marginTop: "5px",
              fontFamily: "-moz-initial",
            }}>
            {quantity}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "24px", marginLeft: "20px" }}>
            <Button type={"button-blue"} text="Order Redy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrdersComponent;