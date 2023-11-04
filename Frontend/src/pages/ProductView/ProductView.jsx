import React from "react";
import { Nav } from "../../components/Nav/Nav";
import "./ProductView.css"
import Button from "../../components/Button/Button";
const ProductView = () => {

  const product = {
    name: "Brand new Asus i3 Lap Top",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typefaceIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used to",
    price: "Price 100000 /=",
    discount: "Discount 10% off",
    imageUrl: "../../image/lap.jpg", 
  };
  return (
    <>
      <Nav category="customer" />
      <br/>
      <h1 className="sanduniTesth1">Product Description</h1>
      <div className="boxMiddle">
        <div className="product-view-container">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-details">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
          <p className="product-discount">{product.discount}</p>
          <div className="buttonsContainer">
              <Button type={"button-rose"} text="Buy Now" />
            </div>
        </div>
          
        
      </div>
      </div>
    </>
  );

  
};

export default ProductView;
