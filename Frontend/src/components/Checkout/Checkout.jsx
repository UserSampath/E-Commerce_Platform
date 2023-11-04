import React, { useState } from "react";
import img from "./checkout.png";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [quantity, setQuantity] = useState(1);
  const productName = "Test Product";
  const price = 456;
  const deliveryFee = 100;
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (quantity <= 0) {
      window.alert("Quantity cannot be 0 or less.");
    } else {
      navigate("/confirmCheckout");
    }
  };

  return (
    <div className="checkout-container-component">
      <div className="left-checkout">
        <h2
          style={{ textAlign: "center", marginBottom: "10px", color: "white" }}
        >
          BUY YOUR PRODUCTS
        </h2>
        <div className="left-div-1">
          <div className="product">{productName}</div>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="qty"
            style={{ padding: "5px" }}
          />
          <div className="price">${price}</div>
        </div>
        <div className="delivary-fee-container">
          <div className="delivery-fee">Delivery Fee</div>
          <div className="delivery-fee-2"></div>
          <div
            className="delivery-fee delivery-fee-2"
            style={{ textAlign: "left" }}
          >
            ${deliveryFee}
          </div>
        </div>
        <div className="delivary-fee-container">
          <div className="delivery-fee">Total Fee</div>
          <div className="delivery-fee-2"></div>
          <div
            className="delivery-fee delivery-fee-2"
            style={{ textAlign: "left" }}
          >
            ${price * quantity + deliveryFee}
          </div>
        </div>
        <div className="ckout-btn-container">
          <Button className="continue-shopping">Continue Shopping</Button>
          <Button className="checkout-btn" onClick={handleSubmit}>
            Check out
          </Button>
        </div>
      </div>
      <div className="right-checkout">
        <img src={img} style={{ width: "70%", height: "70%" }} alt="Logo" />
      </div>
    </div>
  );
};

export default Checkout;
