import React from "react";
import "./navbar.css";
import logo from "../../images/logo.png";

const navbar = () => {
  return (
    <header>
      <img src={logo} alt="DUMMY-IMG" />
      <div className="n-links">
        <div className="n-link">
          <a href="#">SERVICES</a>
        </div>
        <div className="n-link">
          <a href="#">CONTACT US</a>
        </div>
        <div className="n-link">
          <a href="#">WAGTAIL COURSES</a>
        </div>
      </div>
    </header>
  );
};

export default navbar;
