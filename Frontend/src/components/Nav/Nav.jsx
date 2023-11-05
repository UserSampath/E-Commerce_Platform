import React, { useState } from "react";
import "./nav.css";
export const Nav = (props) => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navItems = [
    {
      path: "/products",
      name: "products",
      category: "customer",
    },
    {
      path: "/MyOrder",
      name: "MyOrders",
      category: "customer",
    },
    {
      path: "/Cart",
      name: "Cart",
      category: "customer",
    },
    {
      path: "/About",
      name: "About",
      category: "customer",
    },

    {
      path: "/AvailableProductDelivery",
      name: "Available products",
      category: "deliver",
    },
    {
      path: "/DeliveryAccepted",
      name: "Accepted products",
      category: "deliver",
    },
    {
      path: "/DeliveryPickup",
      name: "Pickup products",
      category: "deliver",
    },
  ];
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active ")
      : setActive("nav__menu");
    //TOGGLE ICON
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Shop Fusion
      </a>
      <ul className={active}>
        {navItems
          .filter((navItem) => navItem.category === props.category)
          .map((navItem, index) => {
            return (
              <li className="nav__item" key={index}>
                <a href={navItem.path} className="nav__link">
                  {navItem.name}
                </a>
              </li>
            );
          })}
      </ul>
      <div className="a" style={{ position: "absolute", right: "3%" }}>
        <div className="boxMiddle">
          
          <div>nalaka sampath</div>
          <img src="../../../image/lap.jpg" alt="" width={"40px"}  style={{borderRadius:"50px", marginLeft:"10px"}}/>
        </div>
      </div>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
