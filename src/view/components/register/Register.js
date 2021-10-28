import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Navbar from "../nav/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar />
      <section className="register">
        <h3>Create an account</h3>

        <form>
          <div className="detail">
            <label for="name">NAME</label>
            <input type="text" name="name" placeholder="Eniola Figma" />
          </div>
          <div className="detail">
            <label for="email">EMAIL</label>
            <input
              type="text"
              name="email"
              placeholder="eniolafigma@mock.com"
            />
          </div>
          <div className="detail">
            <label for="phone">PHONE NUMBER</label>
            <input type="tel" name="phone" placeholder="0816000001" />
          </div>
          <div className="password detail">
            <label>PASSWORD</label>
            <input type="password" name="password" placeholder="********" />
          </div>
          <button type="submit">REGISTER</button>
        </form>

        <p>
          Have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Register;
