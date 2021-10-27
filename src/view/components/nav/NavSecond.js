import React from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const NavSecond = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="brand-logo" />
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <p>FAQS</p>
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <p>Contact Us</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavSecond
