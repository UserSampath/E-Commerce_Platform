import React from "react";
import Button from "../Button/Button";
import "./ProductItem.css";

const ProductItem = ({ item }) => {
  console.log(item);
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
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        }}>
        <div
          className="itemImage"
          style={{
            marginLeft: "20px",
            marginTop: "7px",
            display: " flex",
            flexDirection: "row",
          }}>
          <img
            src={item.productData.image}
            width={"60px"}
            height={"60px"}
            style={{ borderRadius: "10px", marginTop: "7px" }}
            alt=""
          />
          <div className="otherd">
            <div className="named">
              <h3>{item.productData.name}</h3>
              <p className="description">{item.productData.description}</p>
              <p className="price">{item.productData.price}</p>
            </div>
            <h2 className="quty">{item.productData.quantity}</h2>
            <h2 className="status">{item.status}</h2>
            <h2 className="deliver-expected">
              {new Date(item.orderedDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
