import React from "react";
import Button from "../Button/Button";
import "./InventoryItem.css"
const InventoryItem = ({name,description,quantity}) => {
  return (
    <div style={{marginBottom:"5px"}} className="boxMiddle">
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
        <div
          style={{ marginLeft: "20px", marginTop: "7px" }}>
          <img
            src="../../../image/lap.jpg"
            width={"75px"}
            style={{ borderRadius: "10px" }}
            alt=""
          />
        </div>
        <div className="nameAndDescriptionContainer">
                  <h3>{name}</h3>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "10",
              fontFamily: "-moz-initial",
            }}>
            {description}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}>
          <h3>Quantity</h3>
                  <h2>{quantity}</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "24px" }}>
            <Button type={"button-red"} text="Delete" />
          </div>

          <div style={{ marginTop: "24px", marginLeft: "20px" }}>
            <Button type={"button-blue"} text="Update" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
