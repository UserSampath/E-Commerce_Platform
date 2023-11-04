import React from 'react'
import "./ordDetails.css"
import { Nav } from "../../components/Nav/Nav";
const OrdDetails = () => {
  return (
    <>
         <Nav category="customer" />
         <br/>
         <br/>
         <div className='pagecontainner'>
        <div className='maincontainner'>
          <div className='imagecontainner'>
          <div
          className="itemImage"
          >
          <img
            src="../../../image/lap.jpg"
            width={"350px"}
            height={"350px"}
            style={{ borderRadius: "10px",marginTop:"7px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)", // Add the box shadow here
        }}
            alt=""
          />
          </div>
          </div>
          <div className='detailcontainner'>
            <h6>Brand new Asus i3 Lap Top </h6>
            <p>Price - 100000</p>
            <p>Delevery free - 300</p>
            <p>Total- 100300</p>
            <div className='trackingDetails'></div>
            <h6> Track Order</h6>
            <p>Status-delevering proces</p>
            <p>placed at- 2023-03-21</p>
            <p>outed from the company- 2023-03-21</p>
            <p>accepted for delevey - 2023-03-21</p>
            <p>delevery expected - 2023-03-21</p>
            </div>  
          
        </div>
   
        </div>
    </>
  )
}

export default OrdDetails;