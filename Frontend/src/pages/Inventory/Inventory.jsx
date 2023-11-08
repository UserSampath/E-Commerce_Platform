import React, { useEffect, useState } from "react";
import "./Inventory.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Axios from "axios";




const Inventory = () => {
  const [items, setItems] = useState([]);

  const navigate = useNavigate();
  const navigateToInv = () => {
    navigate("/addproduct");
  };

  useEffect(() => {
    const getProducts = async () => {
      Axios.get("http://localhost:8080/api/item")
        .then((response) => {
          setItems(response.data);
          console.log(response.data, "product");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    getProducts();
  }, []);
  
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
          <Button type={"button-blue"} text="Add new item"  func={navigateToInv}/>
        </div>
      </div>
      {items.map((item, index) => {
        return (
          <InventoryItem
            key={index}
            image={item.image}
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
