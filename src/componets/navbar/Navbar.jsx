import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="DUMMY-IMG" />
      </Link>

      <div className="n-links">
        <div className="n-link">
          <Link to="/Services">SERVICES</Link>
        </div>
        <div className="n-link">
          <Link to="/Contact-Us">CONTACT US</Link>
        </div>
        <div className="n-link">
          <a href="#">WAGTAIL COURSES</a>
        </div>
      </div>
    </header>
  );
};

export default navbar;
