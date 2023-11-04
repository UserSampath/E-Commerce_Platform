import React from "react";
import "./DeliveryAccepted.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import AcceptedDeliveryProducts from "../../components/AcceptedDeliveryProducts/AcceptedDeliveryProducts";
import Button from "../../components/Button/Button";

const items = [
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
];

const DeliveryAccepted = () => {
  return (
    <>
      <Nav category="deliver" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Accepted products to delivery
        </h1>
      </div>

      {items.map((item, index) => {
        return (
          <AcceptedDeliveryProducts
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

export default DeliveryAccepted;
