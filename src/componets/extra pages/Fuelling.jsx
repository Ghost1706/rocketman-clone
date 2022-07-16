import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../services/services.css";
import six from "../../images/6.jpg";

const Fuelling = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section className="services">
        <div className="extra-flex">
          <div className="s-text-wrapper e-f">
            <h1>Fuelling</h1>
            <p>
              It'll cost you most to transport your rocket to us. But if it's
              here, we'll fuel it for you!
            </p>
            <div className="border-top">
              <a href="https://spacex.com/" className="q-btn ">
                SPACEX IS NEAT
              </a>
            </div>
          </div>
          <div className="extra-images">
            <img src={six} />
          </div>
        </div>
        <div className="s-text-wrapper">
          <p className="center">Things SpaceX can do vs. things I can do</p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Fuelling;
