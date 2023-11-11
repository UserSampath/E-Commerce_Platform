import React from "react";
import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ name, description, quantity, image, status, pickupDate, price }) => {
  // Check if pickupDate is a valid date
  const originalDate = new Date(pickupDate);
  
  if (isNaN(originalDate.getTime())) {
    console.error("Invalid pickupDate:", pickupDate);
    // Handle the error, e.g., display a placeholder or skip rendering this item
    return null;
  }

  // Create a new Date object with 72 hours added
  const newDate = new Date(originalDate.getTime() + 72 * 60 * 60 * 1000);

  console.log(originalDate.toISOString()); // Original timestamp
  console.log(newDate.toISOString()); // New timestamp with 72 hours added
  const PickupDate = newDate.toLocaleDateString();

  return (
    <div style={{ marginBottom: "5px" }} className="boxMiddle">
      <div
        className="itemContainer"
        style={{
          width: "1050px",
          height: "90px",
          background: "rgba(171, 205, 239, 0.1)",
          border: "1px solid black",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
          marginRight: "40px",
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div
          className="itemImage"
          style={{ marginLeft: "20px", marginTop: "7px", display: " flex", flexDirection: "row" }}
        >
          <img
            src={image}
            width={"60px"}
            height={"60px"}
            style={{ borderRadius: "10px", marginTop: "7px" }}
            alt=""
          />
          <div className="otherd">
            <div className="named">
              <h3>{name}</h3>
              <p className="description">{description}</p>
              <p className="price">{price}</p>
            </div>
            <h2 className="quty">{quantity}</h2>
            <h2 className="status">{status}</h2>
            <h2 className="deliver-expected">{PickupDate}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
