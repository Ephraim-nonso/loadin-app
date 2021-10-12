import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import siginLogo from "../images/log-in.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="brand-logo" />
        </Link>
      </div>

      <ul>
        <li>About</li>
        <li>FAQS</li>
        <li>Contact Us</li>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="btn-sigin">
            <img src={siginLogo} alt="sign-in" /> Sign In
          </div>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
