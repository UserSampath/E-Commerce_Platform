import React, { useState } from "react";
import { Nav } from "../../components/Nav/Nav";
import "./ProductView.css";
import Button from "../../components/Button/Button";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
const ProductView = () => {
  const navigate = useNavigate();
  const location = useLocation();
const [productData,setProductData]=useState(location.state ? location.state.data : null)

  // const productData = location.state ? location.state.data : null;
  
  useState(() => {
    console.log(productData, "productData");
  }, [productData]);

 

  // const addToCartPress = () => {
  //   window.alert("Add to Cart Successful!");
  //   // navigate("")
  // }

  const confirmCheckoutButtonPress = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Order is added to checkout process !",
      showConfirmButton: false,
      timer: 2000,
            customClass: {
                popup: 'custom-popup-class'
            }
    });
    navigate("/confirmCheckout", {
      state: { productData },
    });
   }

   const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);    


   const addCart = async () => {
  
    try {
        const response = await Axios.post("http://localhost:4000/api/cart/createCart/",{ProductId:productData.id},{
        headers: {
          Authorization: `Bearer ${userData.token}`
        }})
        setProductData(response.data.cart);
        console.log(response);
        if(response.status == 200){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Order is added to your cart!",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
                popup: 'custom-popup-class'
            }
        });
        
        }
    } catch (error) {
        console.log(error);
    }
};
  return (
    <>
      <Nav category="customer" />
      <br />
      <h1 className="sanduniTesth1">Product Description</h1>
      <div className="boxMiddle">
        <div className="product-view-container">
          <div className="product-image">
            <img src={ productData.image ? productData.image : ""} alt={productData&&productData.name} />
          </div>
          <div className="product-details">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}>
              <div style={{ textAlign: "center" }}>
                <h1 className="product-name">
                  {productData.name ? productData.name : ""}
                </h1>
                <p className="product-description">
                  {productData.description ? productData.description : ""}
                </p>
                <p className="product-price">{productData.price ? productData.price:""}</p>
                <p className="product-discount">{productData.discount}</p>
                <div className="boxEnd">
                  <div className="buttonsContainer">
                    <Button
                      type={"button-rose"}
                      text="Buy Now"
                      func={()=>confirmCheckoutButtonPress()}
                    />
                  </div>
                  <div className="buttonsContainer">
                    <Button
                      type={"button-black"}
                      text="Add to Cart"
                      func={() => addCart()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
