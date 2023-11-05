import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";

export const ProductCard = (props) => {

  return (
    <div>
      <Card
        style={{
          borderRadius: "10px",
          width: "280px",
          backgroundColor: "white",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        }}>
        <Card.Img
          variant="top"
          src="https://rb.gy/q1dm7"
          style={{
            height: "200px",
            width: "280px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
          }}
        />
        <Card.Body>
          <Card.Title
            className="text-center"
            style={{ color: "black", marginLeft: "30px" }}>
            <b>{props.productname}</b>
          </Card.Title>
          <Card.Text
            style={{
              alignItems: "center",
              color: "black",
              marginLeft: "30px",
            }}>
            Rs. {props.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
