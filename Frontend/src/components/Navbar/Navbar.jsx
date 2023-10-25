import React from 'react';
import "./Navbar.css";
import {FcShop} from "react-icons/fc"
import Button from '../Button/Button';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            
            <div className="firstcard">
            <FcShop style={{fontSize:"35px"}}/>
          <a className="nav-item nav-link active custom-text-color " href="#">Products </a>
          <a className="nav-item nav-link active custom-text-color" href="#">Download</a>
          <a className="nav-item nav-link active custom-text-color" href="#">About</a>
          <a className="nav-item nav-link active custom-text-color" href="#">Resources</a>
          </div>
          <div className="secondcard">
          <div className="buttonsContainer">
              <Button type={"2"} text="Sign In" />
          </div>
          <div className="buttonsContainer">
              <Button type={"1"} text="GetStart" />
         </div>
         </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
