import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="bg-overlay"></div>
      <div className="i-words">
        <h1 className="i-title">Supreme Rocket Maintenance</h1>
        <p className="i-desc">
          Your rocket is your $1,000,000 baby. We get that
        </p>
        <div className="btn">CONTACT US</div>
      </div>
    </section>
  );
};

export default Intro;
