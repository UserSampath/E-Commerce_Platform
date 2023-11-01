import React from 'react'
import "./About.css"
import { Nav } from "../../components/Nav/Nav";
const About = () => {
  return (
    <>
         <Nav category="customer" />
         <br/>
         <h1 className='textAbout'>About Us</h1>
    </>
  )
}

export default About