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
      <Nav category="deliver" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Available Products
        </h1>
      </div>

      {Array.isArray(orderData)&&orderData
     .filter((item) => item.order.Status === "ORDER READY" && !item.order.deliverId )
      .map((item, index) => {
       
          // const user = await axios.get("")
          // const itemdata = await axios.get("")
          return (
          <InventoryItem
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
