import React from "react";
import "./myOrder.css";
import { Nav } from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import ProductItem from "../../components/ProductItem/ProductItem";
import {BsArrowLeftSquareFill} from "react-icons/bs"
import {BsArrowRightSquareFill} from "react-icons/bs"
import {Link, useNavigate} from "react-router-dom"

const items = [
  {
    OrderId:123,
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
    OrderId:124,
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
    OrderId:125,
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
    OrderId:126,
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
          <h2>
            My Orders
          </h2>
          </div>
        <div className="boxMiddle">
          
          <div className="Orderrow" >
            <h1 className="item">Item</h1>
            <h1 className="qty">Qty</h1>
           
            <h1 >Status</h1>
            <h1 className="deliver">Deliver Expected by</h1>
          </div>
        </div>
        {items.map((item,index) => {
          return (

            <Link key={index} to={`/MyOrder/OrdDeatils/${item.OrderId}`}>

            <ProductItem  name={item.name} description={item.description} price={item.price}quantity={item.quantity}  status={item.status} deliverExpectedby={item.deliverExpectedby}/>
          
          </Link>
          )
        })}
        <div className="container">
    
    </div>
      </>
    );
  };
  
  export default MyOrder;

