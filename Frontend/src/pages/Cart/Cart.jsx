import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { Nav } from "../../components/Nav/Nav";
import Button from "../../components/Button/Button";
import CartCard from "../../components/CartCard/CartCard";

const items = [
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
    unitPrice: 24,
  },
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
      unitPrice: 24,
  },
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
      unitPrice: 24,
  },
  {
    name: "Asus laptop",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad tenetur numquam corporis ducimus quibusdam architecto molestiae autem earum doloribus vero, asperiores, laborum dolorum aliquid deserunt recusandae totam. Est, eius molestiae.",
      unitPrice: 24,
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
