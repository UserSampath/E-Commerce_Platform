import React from 'react'
import Card from 'react-bootstrap/Card';


export const ProductCard = (props) => {
  return (
    <div>
        <Card style={{ width: "280px", backgroundColor:"white" }}>
      <Card.Img variant="top" src={props.image} style={{height:"200px", width:"280px"}} />
      <Card.Body>
        <Card.Title style={{alignSelf:"center", color:"black"}}>{props.productname}</Card.Title>
        <Card.Text style={{alignItems:"center", color:"black"}}>
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  )
}
