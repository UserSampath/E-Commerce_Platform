import React from "react";
import "./home.css";
import { Nav } from "../../components/Nav/Nav";
import InventoryItem from "../../components/InventoryItem/InventoryItem";

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

const Home = () => {
  return (
    <>
      <Nav category="customer" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Inventory
        </h1>
      </div>
      {items.map((item,index) => {
        return (
          <InventoryItem key={index} name={item.name} description={item.description} quantity={item.quantity} />
        )
      })}
    </>
  );
};

export default Home;
