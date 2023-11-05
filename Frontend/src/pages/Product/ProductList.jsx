import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import{
    Col,
    Row,
    CardBody,
    CardTitle,
    CardImg,
    CardText,
    Button,
    Container
    
  } from "react-bootstrap";
  import {Link, useNavigate} from "react-router-dom"
  import  Axios  from 'axios';
import { Nav } from '../../components/Nav/Nav';
import { ProductCard } from '../../components/Product list/ProductCard';

const ProductList = () => {
  document.title = "Awakaza E- Commerce | Products"
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
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
      {
        productid: 124,
        image: "https://rb.gy/q1dm7",
        productname: "iphone new",
        price: 234,
      },
    ]);
    const[search,setSearch] = useState()
    const navigate = useNavigate()
    // useEffect(() =>{
    //     // get product data from backend
    //     Axios.get("http://localhost:5000/seller/products")
    // .then(
    //   (response) => {
    //      setProducts(response.data.data)
        
    //   }
    // ).catch((error) =>{
    //   console.log(error)
    // })
    // },[])

    const searchProduct = () =>{
        navigate(`/products/search/${search}`)
    }
    console.log(products)
  return (
    <>
      <React.Fragment>
        {/* <Nav category="customer" /> */}
        <Container fluid>
          <Row>
            <Nav category="customer" />
          </Row>

          <Row
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "calc(100%)",
              marginTop: "30px",
            }}>
            {products.map((data, key) => (
              <Col style={{ marginLeft: "30px", marginTop: "60px" }} key={key}>
                <Link key={key} to={`/products/productView/${data.productid}`}>
                  <ProductCard
                    image={data.image}
                    productname={data.productname}
                    price={data.price}
                  />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    </>
  );
}

export default ProductList