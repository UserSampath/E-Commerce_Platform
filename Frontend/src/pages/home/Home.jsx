import React from "react";
import "./home.css";
import { Nav } from "../../components/Nav/Nav";

const Home = () => {
  return (
    <>
      <Nav category="customer" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "20px", marginBottom: "20px" }}>
          Inventory
        </h1>
      </div>
      <div className="boxMiddle">
        <div
          className="itemContainer"
          style={{
            width: "1000px",
            height: "90px",
            background: "rgba(171, 205, 239, 0.1)",
            border: "1px solid black",
            borderRadius: "20px",
            padding: "8px",
          }}>df
          
          </div>
      </div>
    </>
  );
};

export default Home;
