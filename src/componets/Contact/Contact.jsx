import React from "react";
import "./contact.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import three from "../../images/3.jpg";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="contact">
        <div className="c-left">
          <div className="c-title">
            <h1>Contact Us</h1>
          </div>
          <div className="c-desc">
            <p>
              {" "}
              Need a cleaning crew? Hate refueling your rocket in the middle of
              summer? Have too much money to spend? <br /> <br /> Great! <br />{" "}
              <br /> Reach out to us at:
              <br />
              <br />
              <span>
                1-800-ROCKETMAN
                <br />
                gary@totallyfakeemail.com
              </span>
            </p>
          </div>
          <div className="c-image">
            <img src={three} />
          </div>
        </div>
        <div className="c-right">
          <div className="c-form">
            <label>Your Name(Required)</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="c-form">
            <label>Your Company(Required)</label>
            <input type="text" placeholder="Your Company" />
            <p>SpaceX, Blue Origin, NASA, Virgin Galactic, Galactic Empire?</p>
          </div>
          <div className="c-form">
            <label>Your Email(Required)</label>
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="c-form">
            <label>Your Message(Required)</label>
            <textarea
              name="Your Message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
