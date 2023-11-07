import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

const ConfirmCheckout = () => {
  const navigate = useNavigate();
  const shipping = 8.0;
  const subTotal = 128.0;
  const total = subTotal + shipping;
  const [formDetails, setFormDetails] = useState({
    district: "",
    city: "",
    zip: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Details:", formDetails);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
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
              border: "none",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <FormGroup className="row-1" style={{ marginRight: "10%" }}>
              <input
                type="text"
                className="input-field"
                name="district"
                placeholder="District"
                required
                value={formDetails.district}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup className="row-1">
              <input
                type="text"
                className="input-field"
                name="city"
                placeholder="City"
                required
                value={formDetails.city}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Row>
          <Row
            xs={24}
            sm={24}
            lg={24}
            style={{ marginBottom: "10px", border: "none" }}>
            <FormGroup style={{ width: "100%" }}>
              <input
                type="number"
                className="input-field"
                name="zip"
                placeholder="Zip Code"
                required
                value={formDetails.zip}
                onChange={handleInputChange}
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
                style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
                name="address"
                placeholder="Address"
                required
                rows="5"
                value={formDetails.address}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Row>
          <Row
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
              onClick={() => navigate("/products/productView/f")}>
              Cancel
            </Button>

            <Button className="ckt-btn confirm" type="submit">
              Confirm
            </Button>
          </Row>
        </Form>
      </div>
      <div className="right-side">
        <Card className="mb-3">
          <CardTitle className="text-center">IN YOUR BAG</CardTitle>
          <CardBody>
            <CardText>
              Subtotal: <span className="float-end">${subTotal}</span>
            </CardText>
            <CardText>
              Estimated Shipping: <span className="float-end">${shipping}</span>
            </CardText>

            <hr />
            <CardText>
              TOTAL: <span className="float-end">${total}</span>
            </CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmCheckout;
