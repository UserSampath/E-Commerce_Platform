import React, { useEffect, useState, } from "react";
import './ordDetails.css';
import { Nav } from '../../components/Nav/Nav';
import { useLocation } from "react-router-dom";
const OrdDetails = () => {
 
const location = useLocation();

const [orderdData,setOrderdData]=useState(location.state ? location.state.item : null)

useEffect(() => {
  console.log(orderdData, "orderData");
}, [orderdData]);
const deliDay = (orderdData.deliveryAcceptedDate);
const originalDate = new Date(deliDay);
const PickupDate = (originalDate.toLocaleDateString());

const newDate = new Date(originalDate.getTime() + 72 * 60 * 60 * 1000);
const deliveryexpected =(newDate.toLocaleDateString());

  return (
    <>
      <Nav category="customer" />
      <br />
      <br />
      <div className="pagecontainner">
        <div className="maincontainner">
          <div className="imagecontainner">
            <div className="itemImage">
              <img
                src={orderdData.productData.image}
                width={'350px'}
                height={'350px'}
                style={{
                  borderRadius: '10px',
                  marginTop: '7px',
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
                }}
                alt=""
              />
            </div>
          </div>
          <div className="detailcontainner">
            <p className="brand">{orderdData.productData.name}</p>
            <div className="productdetails">
              <div className="left-column">
                <p>Price</p>
                <p>Delivery Fee</p>
                <p>Total</p>
              </div>
              <div className="right-column">
                <div>
                <p>: {orderdData.productData.price}</p>
                <p>: 300</p>
                <p>: {orderdData.productData.price + 300}</p>
                </div>
                <div className='right'>
                
                </div>
                
              </div>
            </div>
            <p className='trackOrd'>Track Order</p>
            <div className="trackingDetails">
         
            <div className='leftData'>
            <p>Status </p>
            <p>Placed at </p>
            <p>Accepted for delivery</p>
            <p>Delivery expected </p>
            </div>
            <div className='rightData'>
            <div>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                
                </div>
              <div className='rightDate'>
              <p>{orderdData.Status}</p>
              <p>{orderdData.ShippingAddress}</p>
              <p>{PickupDate}</p>
              <p>{deliveryexpected}</p>
              
              </div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdDetails;
