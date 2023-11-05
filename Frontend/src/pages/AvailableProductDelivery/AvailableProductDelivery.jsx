import React from "react";
import "./AvailableProductDelivery.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import InventoryItem from "../../components/AvailableProduct/AvailableProduct";
import Button from "../../components/Button/Button";

const items = [
  {
    name: "Asus laptop",
    customer:
      "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  
];

const AvailableProductDelivery = () => {
  return (
    <>
      <Nav category="deliver" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Available Products to Delivery
        </h1>
      </div>

      {items.map((item, index) => {
        return (
          <InventoryItem
            key={index}
            name={item.name}
            customer={item.customer}
            address={item.address}
          />
        );
      })}

      <div className="boxEnd">
        <div style={{ marginRight: "15%", marginTop: "10px" }}>
          <Button type={"button-black"} text="Accepted Orders" />
          <Button type={"button-black"} text="Pickup Orders" />
        </div>
      </div>
    </>
  );
};

export default AvailableProductDelivery;
