import React from 'react'
import Card from 'react-bootstrap/Card';


export const ProductCard = (props) => {
  return (
    <div>
        <Card style={{ borderRadius:"10px", width: "280px", backgroundColor:"white",boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)', cursor:"pointer" }}>
      <Card.Img variant="top" src={props.image} style={{ height:"200px", width:"280px",boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',}} />
      <Card.Body>
        <Card.Title className="text-center" style={{color:"black" ,fontSize:"20px"}}>{props.productname}</Card.Title>
        <Card.Text style={{alignItems:"center", color:"black", marginLeft:"30px"}}>
          $. {props.price}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}
