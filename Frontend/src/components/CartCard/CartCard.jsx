import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./CartCard.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CartCard = ({ ProductId, cartId }) => {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({});
  useEffect(() => {
    const getProductData = async () => {
      try {
        const response = await axios(
          `http://localhost:8080/api/item/${ProductId}`
        );
        // console.log(response.data)
        setItemData(response.data);
      } catch (e) {}
    };
    getProductData();
  }, [itemData]);
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);
  const deleteButtonPress = async () => {
    try {
      console.log(userData);
      const response = await axios.delete(
        `http://localhost:4000/api/cart/deleteCart/${cartId}`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Deleted successfully");
        window.location.reload();
      } else {
        console.error(`Failed to delete. Status code: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div style={{ marginBottom: "5px" }} className="boxMiddle">
      <div
        className="itemContainer"
        style={{
          width: "1000px",
          height: "90px",
          background: "rgba(171, 205, 239, 0.1)",
          border: "1px solid black",
          borderRadius: "7px",
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "10px",
        }}>
        <div
          // className="itemImage"
          style={{ marginLeft: "20px", marginTop: "7px" }}>
          <img
            src={itemData.image}
            width={"75px"}
            style={{ borderRadius: "10px" }}
            alt=""
          />
        </div>
        <div className="nameAndDescriptionContainer">
          <h3>{itemData.name}</h3>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "10",
              fontFamily: "-moz-initial",
            }}>
            {itemData.description}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}>
          <h3>Unit Price</h3>
          <h2>{`${itemData.price}$`}</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "24px" }}>
            <Button
              type={"button-red"}
              text="Delete"
              func={deleteButtonPress}
            />
          </div>

          <div style={{ marginTop: "24px", marginLeft: "20px" }}>
            <Button
              type={"button-blue"}
              text="Buy"
              // func={() => navigate("/confirmCheckout")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
