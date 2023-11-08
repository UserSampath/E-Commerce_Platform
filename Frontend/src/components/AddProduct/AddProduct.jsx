import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import "./styles.css";
import Image from "react-bootstrap/Image";
import FileBase64 from "react-file-base64";
import img from "./image.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
const AddProduct = () => {
  const [product, setProduct] = useState({
    image: "",
    name: "",
    description: "",
    quantity: 0,
    price: 0,
  });
  const navigate = useNavigate();
 

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/item",  product)
       .then((response) => {
         
         console.log(response.data, "product");
         if(response.status=201){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your product is added",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              title: 'blue-alert-title', // Define a custom CSS class for the title
              popup: 'blue-alert-popup', // Define a custom CSS class for the popup
            }
          });
          
          console.log("sucees");
          navigate("/Inventory")
         }
       })
       .catch((error) => {
         console.log(error);
       });

  };

  return (
    <div className="container">
      <div className="row">
        <div className="left-side">
          <div>ShopFusion</div>
          <div style={{ width: "400px",  height: "100%", marginLeft: "40px", marginRight: "25px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
  <Image
    style={{ width: "70%" }}
    src={product.image}
    rounded
 ></Image>
 
</div>
        </div>
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            {/* <FormGroup>
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
            </FormGroup> */}

<FormGroup>
              <label>ÚRL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                placeholder="Product image"
                value={product.image}
                onChange={handleChange}
                
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
