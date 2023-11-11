import React, { useEffect, useState } from "react";
import "./InventoryStatus.css";
import { Nav } from "../../components/Nav/Nav";
import axios from "axios";
import InventoryStatusCard from "../../components/InventoryStatusCard/InventoryStatusCard";

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



const InventoryStatus = () => {
  const [refresh,setrefresh] =useState(true);
  const[orderData,setOrderData] =useState();
  const token = JSON.parse(localStorage.getItem("userData"));
  console.log(token);
  useEffect(() =>{
        // get order data from backend
        axios.get("http://localhost:8000/api/delivery/combinedOrders",{
          headers:{
             Authorization: `Bearer ${token.token}`
          }
        })
    .then(
      (response) => {
        console.log(response)
         setOrderData(response.data)
        
      }
    ).catch((error) =>{
      console.log(error)
    })
    },[refresh])
    console.log(orderData)
  return (
    <>
      <Nav category="inventory" />
      <Nav category="" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Recieved Orders
        </h1>
      </div>

      {Array.isArray(orderData)&&orderData
     .filter((item) => item.order.Status === "ORDERED" )
      .map((item, index) => {
       
          
          return (
          <InventoryStatusCard
            key={index}
            name={item.product.name}
            customer={item.order.CustomerId}
            address={item.order.ShippingAddress}
            quantity={item.order.Quantity}
            price ={item.product.price}
            image= {item.product.image}
            id = {item.order._id}
            refresh ={refresh}
            setrefresh = {setrefresh}
          />
        ) 
        
        
      })}

      
    </>
  );
};

export default InventoryStatus;
