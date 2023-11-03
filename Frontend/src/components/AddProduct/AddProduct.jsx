import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import "./styles.css";
import Image from "react-bootstrap/Image";
import FileBase64 from "react-file-base64";
import img from "./image.png";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = axios.post("/user", {
      product,
    });

    if (product.quantity === 0 && product.price === 0) {
      alert("Quantity and price cannot be 0.");
      return;
    }

    console.log(product);

    // You can send the product data to the server here
  };

  return (
    <div className="container">
      <div className="row">
        <div className="left-side">
          <div>Appe E - Commerce</div>
          <Image
            style={{ width: "50%" }}
            src={product.image !== "" ? product.image : img}
            rounded
          />
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label>Product Image</label>
              <FileBase64
                type="file"
                multiple={false}
                onDone={(e) => {
                  setProduct({
                    ...product,
                    image: e.base64,
                  });
                }}
              />
            </FormGroup>
            <FormGroup>
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Product Name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Description</label>
              <br />
              <textarea
                className="form-control text-area"
                name="description"
                placeholder="Product Description"
                rows="5"
                value={product.description}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                placeholder="Quantity"
                value={product.quantity}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Price"
                value={product.price}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Button type="submit" className="btn btn-primary add-p-btn">
              Next
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
