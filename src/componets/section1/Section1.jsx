import React from "react";
import "./section1.css";
import two from "../../images/2.jpg";
import four from "../../images/4.jpg";

const Section1 = () => {
  return (
    <section>
      <p className="s-value">
        Your rocket is valuable. Let the professionals work on it.
      </p>
      <div className="card-wrapper">
        <div className="card">
          <img src={two} alt="img" />
          <div className="card-body">
            <div className="card-title">its not a toy</div>
            <div className="card-text">
              Or maybe you're Jeff Bezos... and rockets are your toy
            </div>
            <div className="card-link">VIEW SERVICES</div>
          </div>
        </div>
        <div className="card">
          <img src={four} alt="img" />
          <div className="card-body">
            <div className="card-title">Rockets are cool!</div>
            <div className="card-text">
              Especially when you see photos like this one
            </div>
            <div className="card-link">CONTACT US</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
