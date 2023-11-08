import React, { useState } from "react";
import { Nav } from "../../components/Nav/Nav";
import "./ProductView.css";
import Button from "../../components/Button/Button";
import { useNavigate, useLocation } from "react-router-dom";
const ProductView = () => {
  const navigate = useNavigate();
  const location = useLocation();
const [productData,setProductData]=useState(location.state ? location.state.data : null)

  // const productData = location.state ? location.state.data : null;
  
  useState(() => {
    console.log(productData, "productData");
  }, [productData]);

  const product = {
    name: "Brand new Asus i3 Lap Top",
    description:
      "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefaceIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    price: "Price 100000 /=",
    discount: "Discount 10% off",
    imageUrl: "../../image/lap.jpg",
  };

  // const addToCartPress = () => {
  //   window.alert("Add to Cart Successful!");
  //   // navigate("")
  // }

  const confirmCheckoutButtonPress = () => {
    window.alert("Add to Cart Successful!");
    navigate("/confirmCheckout", {
      state: { productData },
    });
   }

  return (
    <>
      <Nav category="customer" />
      <br />
      <h1 className="sanduniTesth1">Product Description</h1>
      <div className="boxMiddle">
        <div className="product-view-container">
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
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
                <p className="product-discount">{product.discount}</p>
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
                      // func={() => addToCartPress()}
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
