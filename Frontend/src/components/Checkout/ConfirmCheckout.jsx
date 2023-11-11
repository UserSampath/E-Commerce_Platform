import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Form,
  Button,
  FormGroup,
} from "react-bootstrap";
import "./styles.css"; // Import your custom CSS for styling
import { useNavigate, useLocation } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import axios from "axios";
import Swal from "sweetalert2";

const ConfirmCheckout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [ProductData, setProductData] = useState(
    location.state ? location.state.productData : null
  );
  useEffect(() => {
    console.log(location.state.productData);
  }, [ProductData]);
  const shipping = 4.0;
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Details:", address, quantity);
    const data = {
      ProductId: ProductData.id,
      Status: "ORDERED",
      // Quantity: quantity,
      ShippingAddress: address,
      orderedDate: Date.now(),
      productQuantity: ProductData.quantity,
      orderQuantity:quantity,
      name: ProductData.name,
      price: ProductData.price,
      description: ProductData.description,
      image: ProductData.image,
    };

    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);
    // console.log("s", data, " console", userData.token);

    axios
      .post("http://localhost:4000/api/order/createOrder", data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        console.log("response", response.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Placed!",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              popup: "custom-popup-class",
            },
          });
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <div className="checkout-container">
        <div className="left-side">
          <h2 className="c-title">Shipping Details</h2>
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Row
              xs={24}
              lg={24}
              md={24}
              style={{ marginBottom: "10px", border: "none" }}>
              <h3>Cash on delivery only</h3>
            </Row>
            <Row
              xs={24}
              sm={24}
              lg={24}
              style={{
                marginBottom: "10px",
                // marginLeft:"120px",
                border: "none",
                display: "flex",
                // justifyContent: "space-between",
              }}>
              <div style={{ marginTop: "10px" }}> Quantity</div>

              <FormGroup className="row-1">
                <input
                  type="text"
                  className="input-field"
                  name="quantity"
                  placeholder="Quantity"
                  required
                  value={quantity}
                  onChange={(e) => handleQuantityChange(e)}
                />
              </FormGroup>
            </Row>
            <Row
              xs={24}
              sm={24}
              lg={24}
              style={{ marginBottom: "10px", border: "none" }}>
              <FormGroup style={{ width: "100%" }}>
                <textarea
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                  name="address"
                  placeholder="Address"
                  required
                  rows="5"
                  value={address}
                  onChange={(e) => handleAddressChange(e)}
                />
              </FormGroup>
            </Row>
            <div
              xs={24}
              md={24}
              lg={24}
              style={{
                marginBottom: "10px",
                border: "none",
                display: "flex",
                justifyContent: "space-between",
              }}>
              <Button
                className="ckt-btn cancell"
                onClick={() => navigate("/products")}>
                Cancel
              </Button>

              <Button className="ckt-btn confirm" type="submit" func={handleSubmit}>
                Confirm
              </Button>
            </div>
          </Form>
        </div>
        <div className="right-side">
          <Card className="mb-3">
            <CardTitle className="text-center">In Your Bag</CardTitle>
            <CardBody className="productCheckout">
              <CardText>
                Subtotal:{" "}
                <span className="float-end">
                  ${ProductData.price ? ProductData.price : ""}
                </span>
              </CardText>
              <CardText>
                Estimated Shipping:{" "}
                <span className="float-end">${shipping}</span>
              </CardText>

              <hr />
              <CardText>
                TOTAL:{" "}
                <span className="float-end">
                  ${ProductData.price ? ProductData.price * quantity + 4.0 : 0}
                </span>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCheckout;
