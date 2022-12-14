import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from '../../assets/Images/Logo.png'
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(nav);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div name="home" className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="logo">
      <a href="/">
      <img src={ logo}/>
        </a>
      </div>
      <ul className="nav-menu">

        <Link to="/about">
          <li>Our Company</li>
        </Link>

        <Link to="/product" >
          <li> Product& Services</li>
        </Link>
        <Link to="/invest" >
          <li> Investors</li>
        </Link>
        <Link to="/contact" >
          <li> Contact Us </li>
        </Link>
        {/* <Link to="/residence" > */}
          {/* <li>My Residences</li> */}
        {/* </Link> */}
      </ul>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">

        <Link to="/about">
          <li>Our Company</li>
        </Link>

          <Link to="/product" onClick={handleNav}>
          <li> Product& Services</li>
          </Link>
          <Link to="/invest"  onClick={handleNav}>
          <li> Investors</li>
          </Link>
          <Link to="/contact"  onClick={handleNav}>
          <li> Contact Us </li>
          </Link>
          {/* <Link to="/residence" onClick={handleNav} > */}
            {/* <li> My Residences</li> */}
          {/* </Link> */}
        </ul>

        <div className="mobile-menu-bottom">
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
