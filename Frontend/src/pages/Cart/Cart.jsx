import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { Nav } from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import CartCard from "../../components/CartCard/CartCard";

const items = [
  {
    name: "LG Gram 17",
    description:
      "The LG Gram 17 is an ultra-lightweight laptop with a large 17-inch display. Despite its size, it remains remarkably light, making it an excellent choice for users who prioritize portability",
    unitPrice: "$1,499",
  },
];

const Home = () => {
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
          <CartCard key={index} name={item.name} description={item.description} unitPrice={item.unitPrice} />
        )
      })}
    </>
  );
};

export default Home;
