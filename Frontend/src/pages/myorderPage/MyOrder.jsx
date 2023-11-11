import React, { useEffect, useState } from "react";
import "./myOrder.css";
import { Nav } from "../../components/Nav/Nav";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import axios from "axios";

const MyOrder = () => {
  const [items, setItems] = useState([]);
  const userDataString = localStorage.getItem("userData");
  const userData = JSON.parse(userDataString);

  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/order/getAllCustomerOrder",
          {},
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );

       setItems(response.data.ordersWithProductData);
        console.log(response.data.ordersWithProductData);
      } catch (error) {
        console.error("Error fetching orders:", error.message);
        // Handle the error, e.g., set an error state or display an error message.
      }
    };

    fetchOrders();
  }, [userData.token]); // Include userData.token in the dependency array to react to changes

  return (
    <>
      <Nav category="customer" />
      <br />
      <br />
      <div className="mainHeading">
        <h2>My Orders</h2>
      </div>
      <div className="boxMiddle">
        <div className="Orderrow">
          <h1 className="item">Item</h1>
          <h1 className="qty">Qty</h1>
          <h1>Status</h1>
          <h1 className="deliver">Deliver Expected by</h1>
        </div>
      </div>
      {items.map((item, index) => (
         <Link
         key={index}
         to={{
           pathname: `/MyOrder/OrdDeatils/${item._id}`,
          
         }}
       >
          <ProductItem
            name={item.productData.name}
            image={item.productData.image}
            description={item.productData.description}
            price={item.productData.price}
            quantity={item.productData.quantity}
            status={item.Status}
            pickupDate={item.PickedUpDate}
          />
        </Link>
      ))}
      <div className="container"></div>
    </>
  );
};

export default MyOrder;
