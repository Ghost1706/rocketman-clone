import React from "react";
import "./intro.css";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="intro">
      <div className="bg-overlay"></div>
      <div className="i-words">
        <h1 className="i-title">Supreme Rocket Maintenance</h1>
        <p className="i-desc">
          Your rocket is your $1,000,000 baby. We get that
        </p>
        <Link to="/Contact-Us" className="btn">
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default Intro;
