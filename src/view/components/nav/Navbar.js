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
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="btn-sigin">
            <img src={siginLogo} alt="sign-in" /> Sign In
          </div>
        </Link>
      </ul>
      {/* <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
    </nav>
  );
};

export default Navbar;
