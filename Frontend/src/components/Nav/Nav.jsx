import React, { useState } from "react";
import "./nav.css";
export const Nav = (props) => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navItems = [
    {
      path: "/",
      name: "name1",
      category: "customer",
    },
    {
      path: "/",
      name: "name2",
      category: "customer",
    },
    {
      path: "/",
      name: "name3",
      category: "customer",
    },
    {
      path: "/",
      name: "name4",
      category: "2",
    },
    {
      path: "/",
      name: "name5",
      category: "2",
    },
    {
      path: "/",
      name: "name6",
      category: "3",
    },
    {
      path: "/",
      name: "name7",
      category: "3",
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
        Track 9
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
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
