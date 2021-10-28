import React from "react";
import "./Homepage.css";
import Logo from "../images/logo.png";
import avatar from "../images/avatar.png";
import play from "../images/play.png";
import bulb from "../images/bulb.png";
import phone from "../images/phone.png";
import cable from "../images/cable.png";
import Navbar from "../nav/Navbar";

export const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <section className="body-content">
        <div className="app-info">
          <img src={avatar} alt="avatar" />
          <div className="info">
            <h1>
              Pay For Airtime Data, Cable and Electricity with{" "}
              <img src={Logo} alt="brand-logo" />
            </h1>
            <div className="btn">
              Tutorial <img src={play} alt="play" />{" "}
            </div>
          </div>
        </div>

        <div className="service-info">
          <div className="grid">
            <div className="service airtime">
              <img src={phone} alt="airtime" />
              <h4>Airtime</h4>
            </div>
            <div className="service data">
              <img src={phone} alt="data" />
              <h4>Data</h4>
            </div>
            <div className="service cable">
              <img src={cable} alt="cable" />
              <h4>Cable TV</h4>
            </div>
            <div className="service power">
              <img src={bulb} alt="power" />
              <h4>Electricity</h4>
            </div>

            <div className="help">
              <h1>?</h1>
              <p>Help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
