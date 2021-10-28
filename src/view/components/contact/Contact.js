import React from 'react';
import "../about/styles.css";
import NavSecond from '../nav/NavSecond';
import contact from "../images/contact.png";
import location from "../images/location.png";
import call from "../images/call.png";
import message from "../images/message.png";

const Contact = () => {
  return (
    <div className="wrapper">
      <NavSecond />
      <div className="contact-body">

        <div className="contact-left">
          <h3>send a message</h3>
          <form>
            <input placeholder="Name" />
            <input placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button>submit</button>
          </form>
        </div>

        <div className="contact-right">
          <img src={contact} alt="contact"/>

          <div className="contact-info">
            <div>
              <img src={location} alt="location"/>
              <p>30, Ajose Street, VI Lagos, Nigeria</p>
            </div>
            <div>
            <img src={message} alt="message"/>
              <p>contact@loadinweb.com</p>
            </div>
            <div>
              <img src={call} alt="call"/>  
              <p>080-0000-0002-1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
