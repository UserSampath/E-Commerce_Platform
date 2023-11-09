import React, {  useState } from "react";
import Button from "../Button/Button";
import "./InventoryItem.css";
import Axios from "axios";
import Swal from 'sweetalert2';

const InventoryItem = ({name,description,quantity,image,id,refresh,setRefresh}) => {
 const [products, setProducts] = useState([
    {
      productid: 123,
      image: "https://rb.gy/q1dm7",
      productname: "iphone",
      price: 23,
    },
    {
      productid: 124,
      image: "https://rb.gy/q1dm7",
      productname: "iphone new",
      price: 234,
    },
  ]);
 
    const deleteProducts = async () => {
      Axios.delete(`http://localhost:8080/api/item/${id}`)
        .then((response) => {
          setProducts(response.data);
          console.log(response);
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const deleteAlert = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProducts();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        }).then(()=>{
          setRefresh(!refresh);
        })
        
      }
    });
  }
   
  

  return (
    <div style={{marginBottom:"5px"}} className="boxMiddle">
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
          style={{ marginLeft: "20px", marginTop: "7px" }}>
          <img
            src={image}
            width={"75px"}
            style={{ borderRadius: "10px" }}
            alt=""
          />
        </div>
        <div className="nameAndDescriptionContainer">
                  <h3>{name}</h3>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "10",
              fontFamily: "-moz-initial",
            }}>
            {description}
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}>
          <h3>Quantity</h3>
                  <h2>{quantity}</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "24px" }}>
            <Button type={"button-red"} text="Delete" func={deleteAlert}/>
          </div>

          <div style={{ marginTop: "24px", marginLeft: "20px" }}>
            <Button type={"button-blue"} text="Update" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
