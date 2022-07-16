import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../services/services.css";
import nine from "../../images/9.jpg";
import one from "../../images/1.jpg";
import { Link } from "react-router-dom";

const Programming = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section className="services">
        <div className="extra-flex">
          <div className="s-text-wrapper e-f">
            <h1>Programming</h1>
            <p>
              For just $500,000,000 we'll add a self-landing chip to your rocket
            </p>
            <div className="border-top">
              <Link to="/Contact-Us" className="q-btn">
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="extra-images">
            <img src={nine} />
          </div>
        </div>
        <div className="s-text-wrapper">
          <p className="center">Made by the best</p>
        </div>
        <img className="center-image" src={one} />
        <div className="s-text-wrapper">
          <p className="center">
            Skynet is the best at robots and self-landing technology. We've
            partnered exclusively with them for a deal. We give them data, they
            give us chips. What could go wrong?!
          </p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Programming;
