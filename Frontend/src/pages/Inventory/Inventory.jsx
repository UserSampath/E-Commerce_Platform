import React, { useEffect, useState } from "react";
import "./Inventory.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import Button from "../../components/Button/Button";
import axios from "axios"
import { Link } from "react-router-dom";


const Inventory = () => {

const[products,setProducts] = useState([]);

  useEffect(() =>{
    // get order data from backend
     axios.get("http://localhost:8080/api/Item/get"
      )
.then(
  (response) => {
    console.log(response)
     setProducts(response.data)
    
  }
).catch((error) =>{
  console.log(error)
})
},[])

  return (
    <>
      <Nav category="inventory" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Inventory
        </h1>
        <div style={{ marginTop: "55px", marginLeft: "100px" }}>
          <Link to={}><Button type={"button-blue"} text="Add new item" /></Link>
        </div>
      </div>
      {products.map((item, index) => {
        return (
          <InventoryItem
            key={index}
            name={item.name}
            description={item.price}
            quantity={item.quantity}
          />
        );
      })}
    </>
  );
};

export default Inventory;
