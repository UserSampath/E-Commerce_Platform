import React, { useEffect, useState } from "react";
import "./DeliveryAccepted.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import AcceptedDeliveryProducts from "../../components/AcceptedDeliveryProducts/AcceptedDeliveryProducts";
import Button from "../../components/Button/Button";
import axios from "axios";

const items = [
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "5",
    quantity: "23",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "5",
    quantity: "23",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "5",
    quantity: "23",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
];

const DeliveryAccepted = () => {
  const[orderData,setOrderData] =useState();
  const token = JSON.parse(localStorage.getItem("userData"));
  const [refresh,setrefresh] =useState(true);

  useEffect(() =>{
    // get order data from backend
    axios.get("http://localhost:8000/api/delivery/combinedOrders",{
      headers:{
         Authorization: `Bearer ${token.token}`
      }
    })
.then(
  (response) => {
    
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
          Accepted products
        </h1>
      </div>

      {Array.isArray(orderData)&&orderData
      .filter((item) => item.order.Status === "DELIVERY ACCEPTED" && item.order.deliverId === token.id )
      .map((item, index) => {
  
          return (
            <AcceptedDeliveryProducts
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

export default DeliveryAccepted;
