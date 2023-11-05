import React from 'react'
import Card from 'react-bootstrap/Card';


export const ProductCard = (props) => {
  return (
    <div>
        <Card style={{ width: "280px", backgroundColor:"aqua" }}>
      <Card.Img variant="top" src={props.image} style={{height:"200px", width:"280px"}} />
      <Card.Body>
        <Card.Title className="text-center" style={{color:"black", marginLeft:"30px"}}><b>{props.productname}</b></Card.Title>
        <Card.Text style={{alignItems:"center", color:"black", marginLeft:"30px"}}>
          Rs. {props.price}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}
