import React from 'react';
import './ordDetails.css';
import { Nav } from '../../components/Nav/Nav';

const OrdDetails = () => {
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
                src="../../../image/lap.jpg"
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
            <p className="brand">Brand new Asus i3 Lap Top</p>
            <div className="productdetails">
              <div className="left-column">
                <p>Price</p>
                <p>Delivery Fee</p>
                <p>Total</p>
              </div>
              <div className="right-column">
                <div>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                </div>
                <div className='right'>
                <p>100,000</p>
                <p>300</p>
                <p>100,300</p>
                </div>
                
              </div>
            </div>
            <p className='trackOrd'>Track Order</p>
            <div className="trackingDetails">
         
            <div className='leftData'>
            <p>Status </p>
            <p>Placed at </p>
            <p>Routed from the company </p>
            <p>Accepted for delivery</p>
            <p>Delivery expected </p>
            </div>
            <div className='rightData'>
            <div>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
                </div>
              <div className='rightDate'>
              <p>Delivering Process</p>
              <p>2023-03-21</p>
              <p>2023-03-21</p>
              <p>2023-03-21</p>
              <p>2023-03-21</p>
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
