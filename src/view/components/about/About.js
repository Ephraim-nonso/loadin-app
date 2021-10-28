import React from 'react';
import "./styles.css";
import Logo from "../images/logo.png";
import Lady from '../images/about-img.png';
import NavSecond from '../nav/NavSecond';

const About = () => {
  return (
    <div className="wrapper">
      <NavSecond />
      <div className="about-body">
        <div className="about-texts">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius scelerisque 
            massa lobortis enim. Sit a lacus venenatis facilisis.
            Risus vitae posuere et erat facilisi leo. Suspendisse aenean interdum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius scelerisque 
            assa lobortis enim. Sit a lacus venenatis facilisis. Risus vitae posuere et 
            erat facilisi leo. Suspendisse aenea <img src={Logo} alt="logo"/>
          </p>
        </div>

        <div className="about-image">
          <img src={Lady} alt="about-page"/>
        </div>
      </div>
    </div>
  )
}

export default About;
