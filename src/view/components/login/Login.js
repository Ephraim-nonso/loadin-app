import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../nav/Navbar";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <section className="login">
        <h3>Login to your account</h3>

        <form>
          <div className="email detail">
            <label>EMAIL</label>
            <input
              type="text"
              name="email"
              placeholder="eniolafigma@mock.com"
            />
          </div>
          <div className="password detail">
            <label>PASSWORD</label>
            <input type="password" name="password" placeholder="********" />
          </div>
          <button type="submit">LOGIN</button>
        </form>

        <Link to="/register" style={{ textDecoration: "none" }}>
          <p>Create account</p>
        </Link>
      </section>
    </div>
  );
};
