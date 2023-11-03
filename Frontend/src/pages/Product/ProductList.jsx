import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
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

const ProductList = () => {
  document.title = "Awakaza E- Commerce | Products"
    const [products,setProducts] = useState([{
        productid:123,
        images:"https://rb.gy/q1dm7",
        productname:"iphone",
        price:234


    }]);
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
    <React.Fragment>
        
        <div>
            
        <Container fluid>
        {/* <Nav/> */}
            {// search functionality kept it here if needed
            /* <Row style={{alignSelf:"center"}}>
            <Col sm={4} >
            <form className="app-search d-none d-lg-block"onSubmit={searchProduct}>
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(e) =>{setSearch(e.target.value)}}
                />
                <span className="bx bx-search-alt" />
              </div>
            </form>
             </Col>
             <Col  >
             <Button color="primary" className="btn-rounded" style={{marginTop:"17px"}} onClick={searchProduct} >
                            Search
            </Button>
             </Col>
            </Row> */}

            <Row>
                {
                  products.map((data,key)=>{
                    return(
                        <Col mg={6} xl={3} key={key} >
              
              <Link to={`/products/view/${data.productid}`}>
                
                </Link>
             
            </Col>
                    )
                  })
                }
            </Row>
            </Container>
        </div>
       
    </React.Fragment>
  )
}

export default ProductList