import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import {
  Col,
  Row,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
  Container,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Nav } from "../../components/Nav/Nav";
import { ProductCard } from "../../components/Product list/ProductCard";

const ProductList = () => {
  document.title = "Awakaza E- Commerce | Products";
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      Axios.get("http://localhost:8080/api/item")
        .then((response) => {
          setProducts(response.data);
          console.log(response.data, "product");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getProducts();
  }, []);

  const clickedProductCard = (data) => {
    console.log(data);
    navigate(`/products/productView/${data.id}`, {
      state: { data },
    });
 }

  // const searchProduct = () =>{
  //     navigate(`/products/search/${search}`)
  // }
  // console.log(products)
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
                {/* <Link key={key} to={`/products/productView/${data.id}`}> */}
                  <div onClick={() => clickedProductCard(data)}>
                    <ProductCard
                      image={data.image}
                      productname={data.name}
                      price={data.price}
                  
                    />
                  </div>
                {/* </Link> */}
              </Col>
            ))}
          </Row>
        </Container>
      </React.Fragment>
    </>
  );
};

export default ProductList;
