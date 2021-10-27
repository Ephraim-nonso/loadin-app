import React from 'react';
import "../about/styles.css";
import NavSecond from '../nav/NavSecond';

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
          <img />

          <div className="contact-info">
            <div>
              {/* icon */}
              <p>30, Ajose Street, VI Lagos, Nigeria</p>
            </div>
            <div>
              {/* icon */}
              <p>contact@loadinweb.com</p>
            </div>
            <div>
              {/* icon */}
              <p>080-0000-0002-1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
