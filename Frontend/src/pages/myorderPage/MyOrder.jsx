import React from "react";
import "./myOrder.css";
import { Nav } from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import ProductItem from "../../components/ProductItem/ProductItem";

const items = [
  {
    name: "Asus laptop",
    description:
      "8GB RAM, 1TB ROMr",
      quantity: 24,
    address:"Colombo",
    price:"$60.70",
    status:"pickup",
    deliverExpectedby:"24th December 2023"
  },
  {
    name: "Asus laptop",
    description:
      "8GB RAM, 1TB ROM,  .",
    quantity: 24,
    address:"Colombo",
    price:"$60.70",
    status:"pickup",
    deliverExpectedby:"24th December 2023"
  },
  {
    name: "Asus laptop",
    description:
      "8GB RAM, 1TB ROM. .",
    quantity: 24,
    address:"Colombo",
    price:"$60.70",
    status:"pickup",
    deliverExpectedby:"24th December 2023"
  },
  {
    name: "Asus laptop",
    description:
      "8GB RAM, 1TB ROM, .",
    quantity: 24,
    address:"Colombo",
    price:"$60.70",
    status:"pickup",
    deliverExpectedby:"24th December 2023"
  },

];

const MyOrder = () => {
    return (
      <>
        <Nav category="customer" />
        <br/>
        <br/>
        <div className="mainHeading">
          <h1>
            My Orders
          </h1>
          </div>
        <div className="boxMiddle">
          
          <div className="Orderrow" >
            <h1 className="item">Item</h1>
            <h1 className="qty">Qty</h1>
           
            <h1>Status</h1>
            <h1>Deliver Expected by</h1>
          </div>
        </div>
        {items.map((item,index) => {
          return (
            <ProductItem key={index} name={item.name} description={item.description} price={item.price}quantity={item.quantity}  status={item.status} deliverExpectedby={item.deliverExpectedby}/>
          )
        })}
      </>
    );
  };
  
  export default MyOrder;

