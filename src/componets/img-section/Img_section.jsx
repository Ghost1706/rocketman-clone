import React from "react";
import "./img_section.css";
import nine from "../../images/9.jpg";
import six from "../../images/6.jpg";
import ten from "../../images/10.jpg";
import { Link } from "react-router-dom";
const Img_section = () => {
  return (
    <section className="img-section">
      <div className="img-wrapper">
        <img src={nine} alt="" />
        <div className="grey">
          <div className="g-title">Self Landing Rockets</div>
          <div className="g-text">
            Probably the coolest thing evar!!1 We can program this for you.
          </div>
          <Link to="/Programming" className="g-btn">
            MORE DETAILS
          </Link>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={six} alt="" />
        <div className="grey left">
          <div className="g-title">We'll clean your rocket</div>
          <div className="g-text">
            This image has nothing to do with cleaning. But it's kind of neat
            still.
          </div>
          <Link to="/Cleaning" className="g-btn">
            MORE DETAILS
          </Link>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={ten} alt="" />
        <div className="grey">
          <div className="g-title">Rockets are gas guzzlers</div>
          <div className="g-text">
            If you think gas is expensive now.. think about rocket prices!
            Luckily, we water our gas down to give you more bang for your buck.
          </div>
          <Link to="/Fuelling" className="g-btn">
            MORE DETAILS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Img_section;
