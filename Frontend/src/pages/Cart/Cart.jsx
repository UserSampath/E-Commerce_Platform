import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { Nav } from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import CartCard from "../../components/CartCard/CartCard";
import Axios from "axios";

const Home = () => {

  const [items,setItems]=useState([])

    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);

  useEffect(() => {
    const getCartData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:4000/api/cart/getAllCustomerCart",
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );

        console.log(response.data);
        setItems(response.data)


      } catch (error) {
        // Handle errors here
        console.error("Error fetching cart data:", error);
      }
    };

    // Call the function
    getCartData();
  }, []);

    const navigate = useNavigate();
  return (
    <>
      <Nav category="customer" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Cart
        </h1>
      </div>
      {items.map((item,index) => {
        return (
          <CartCard
            key={index}
            ProductId={item.ProductId}
          />
        );
      })}
    </>
  );
};

export default Home;
