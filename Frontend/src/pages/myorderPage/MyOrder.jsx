import React from "react";
import "./myOrder.css";
import { Nav } from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
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

const MyOrder = () => {
    return (
      <>
        <Nav category="customer" />
        <div className="boxMiddle">
            <div className="mainHeading">
          <h1>
            My Orders
          </h1>
          </div>
          <div className="Orderrow" >
            <h1 className="item">Item</h1>
            <h1>Qty</h1>
            <h1>Address</h1>
            <h1>Status</h1>
            <h1>Deliver Expected by</h1>
          </div>
        </div>
        {items.map((item,index) => {
          return (
            <InventoryItem key={index} name={item.name} description={item.description} quantity={item.quantity} />
          )
        })}
      </>
    );
  };
  
  export default MyOrder;

