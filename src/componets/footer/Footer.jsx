import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-top-wrapper">
          <div className="f-left">
            <div className="f-title">We’ll take good care of your rocket.</div>
            <div className="f-text">
              We’ll treat your rocket as if it’s our own. Our standards are
              higher than the ISS's altitude. We also enjoy test driving your
              rocket before giving it back 😱
            </div>
          </div>
          <Link to="/Contact-Us" className="f-btn">
            CONTACT US
          </Link>
        </div>
      </div>
      <div className="foot-bot">
        <div className="f-links">
          <div className="f-link-title">LINKS</div>
          <div className="f-link-content">
            <Link to="/Services" className="f-link">
              Services
            </Link>
            <Link to="/Contact-Us" className="f-link">
              Contact
            </Link>
            <div className="f-link">Wagtail Course</div>
          </div>
        </div>
        <div className="f-links">
          <div className="f-link-title">CONTACT US</div>
          <div className="f-link-content">
            <p>Contact us anytime at gary@totallyfakeemail.com</p>
            <p>* All images from unsplash.com</p>
          </div>
        </div>
        <div className="f-links">
          <div className="f-link-title">HOURS</div>
          <div className="f-link-content">
            <p>
              Monday - Friday
              <br />
              9am - 5pm
            </p>
          </div>
        </div>
        <div className="f-links">
          <div className="f-link-title">
            {" "}
            &copy; <span>{new Date().getFullYear()}</span> Rocketman
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
