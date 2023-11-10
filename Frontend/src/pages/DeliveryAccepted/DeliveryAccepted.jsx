import React from "react";
import "./DeliveryAccepted.css";
import { Nav } from "../../components/Nav/Nav";
// import "./home.css";
// import Button from "../../components/Button/Button";
import AcceptedDeliveryProducts from "../../components/AcceptedDeliveryProducts/AcceptedDeliveryProducts";
import Button from "../../components/Button/Button";
import axios from "axios";

const items = [
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "5",
    quantity: "23",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "5",
    quantity: "23",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
  {
    name: "Asus laptop",
    customer: "Nalaka Sampath ",
    price: "5",
    quantity: "23",
    address: "ipsum dolor sit amet consectetur, adipisicing elit",
  },
];

const DeliveryAccepted = () => {
  const[orderData,setOrderData] =useState();
  const token = JSON.parse(localStorage.getItem("userData"));

  useEffect(() =>{
    // get order data from backend
    axios.get("http://localhost:8000/api/delivery/orderByDID",{
      headers:{
         Authorization: `Bearer ${token.token}`
      }
    })
.then(
  (response) => {
    
     setOrderData(response.data.orders)
    
  }
).catch((error) =>{
  console.log(error)
})
},[])
console.log(orderData)

  return (
    <>
      <Nav category="deliver" />
      <div className="boxMiddle">
        <h1
          className="mainHeading"
          style={{ marginTop: "70px", marginBottom: "20px" }}>
          Accepted products
        </h1>
      </div>

      {Array.isArray(orderData).orderData.map(async (item, index) => {
        if(item.status === "ORDER READY"){
          const user = await axios.get("")
          const itemdata = await axios.get("")
          return (
            <AcceptedDeliveryProducts
              key={index}
              name={item.name}
              customer={item.customer}
              price={item.price}
              quantity={item.quantity}
              address={item.address}
            />
          );
        }
        
      })}

      {/* <div className="boxEnd">
        <div style={{ marginRight: "15%", marginTop: "10px" }}>
          <Button type={"button-black"} text="Accepted Orders" />
          <Button type={"button-black"} text="Pickup Orders" />
        </div>
      </div> */}
    </>
  );
};

export default DeliveryAccepted;
