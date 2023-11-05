import React from "react";
import "./DeliveryPickup.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import PickupItems from "../../components/PickupItems/PickupItems";
import Button from "../../components/Button/Button";

const items = [
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "45",
    quantity: 34,
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "45",
    quantity: 34,
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "45",
    quantity: 34,
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "45",
    quantity: 34,
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "45",
    quantity: 34,
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
];

const DeliveryPickup = () => {
  return (
    <>
      <Nav category="deliver" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Pickup Products
        </h1>
      </div>

      {items.map((item, index) => {
        return (
          <PickupItems
            key={index}
            name={item.name}
            customer={item.customer}
            address={item.address}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}

      {/* <div className="boxEnd">
        <div style={{ marginRight: "15%", marginTop: "10px" }}>
          <Button type={"button-black"} text="Accepted Orders" />
          <Button type={"button-black"} text="Pickup Orders" />
        </div>
      </div> */}
    </>
  );
};

export default DeliveryPickup;
