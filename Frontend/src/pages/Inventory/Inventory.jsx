import React from "react";
import "./Inventory.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import Button from "../../components/Button/Button";

const items = [
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
    quantity: 24,
  },
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
    quantity: 24,
  },
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
    quantity: 24,
  },
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
    quantity: 24,
  },

];

const Inventory = () => {
  return (
    <>
      <Nav category="customer" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Inventory
        </h1>
        <div style={{ marginTop: "55px", marginLeft: "100px" }}>
          <Button type={"button-blue"} text="Add new item" />
        </div>
      </div>
      {items.map((item, index) => {
        return (
          <InventoryItem
            key={index}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
          />
        );
      })}
    </>
  );
};

export default Inventory;
