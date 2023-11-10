import React, { useEffect, useState } from "react";
import "./AvailableProductDelivery.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import InventoryItem from "../../components/AvailableProduct/AvailableProduct";
import Button from "../../components/Button/Button";
import axios from "axios";

const items = [
  {
    name: "Asus laptop",
    price: "23",
    quantity:23,
    customer:
      "Nalaka Sampath ",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  
];

const AvailableProductDelivery = () => {

  const[orderData,setOrderData] =useState();
  const token = JSON.parse(localStorage.getItem("userData"));
  console.log(token);
  useEffect(() =>{
        // get order data from backend
        axios.get("http://localhost:4000/api/order/getAllOrders",{
          headers:{
             Authorization: `Bearer ${token.token}`
          }
        })
    .then(
      (response) => {
        
         setOrderData(response.data.orders)
        
      }
    ).catch((error) =>{
      console.log(error)
    })
    },[])
    console.log(orderData)
  return (
    <>
      <Nav category="deliver" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Available Products
        </h1>
      </div>

      {Array.isArray(orderData)&&orderData
     .filter((item) => item.Status === "ORDER READY" && !item.deliverId )
      .map((item, index) => {
        console.log(item.Status)
          // const user = await axios.get("")
          // const itemdata = await axios.get("")
          return (
          <InventoryItem
            key={index}
            name={item.ProductId}
            customer={item.CustomerId}
            address={item.ShippingAddress}
            price={item.price}
            quantity={item.Quantity}
          />
        ) 
        
        
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

export default AvailableProductDelivery;
