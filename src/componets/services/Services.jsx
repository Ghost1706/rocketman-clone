import React from "react";
import "../section1/section1.css";
import "./services.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import four from "../../images/4.jpg";
import six from "../../images/6.jpg";
import nine from "../../images/9.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <main>
      <Navbar />
      <section className="services">
        <div className="s-text-wrapper">
          <h1>Services</h1>
          <p>Services we can provide for you</p>
        </div>
        <div className="wrapper">
          <div className="card width">
            <img src={four} alt="img" />
            <div className="card-body">
              <div className="card-title">Cleaning</div>
              <div className="card-text">
                Rockets leaving and entering the atmosphere get dirty. We'll
                apply the industries best Windex
              </div>
              <Link to="/Cleaning" className="card-link">
                MORE DETAILS
              </Link>
            </div>
          </div>
          <div className="card width">
            <img src={six} alt="img" />
            <div className="card-body">
              <div className="card-title">Fuelling</div>
              <div className="card-text">
                it'll cost you most to transport your rocket to us. But if it's
                here, we'll fuel it for you!
              </div>
              <Link to="/Fuelling" className="card-link">
                MORE DETAILS
              </Link>
            </div>
          </div>
          <div className="card width">
            <img src={nine} alt="img" />
            <div className="card-body">
              <div className="card-title">Programming</div>
              <div className="card-text">
                For just $2,000,000,000 we'll add a self-landing chip to your
                rocket
              </div>
              <Link to="/Programming" className="card-link">
                MORE DETAILS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
