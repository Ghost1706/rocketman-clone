import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "../services/services.css";
import four from "../../images/4.jpg";
import ten from "../../images/10.jpg";

const Cleaning = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section className="services">
        <div className="extra-flex">
          <div className="s-text-wrapper e-f">
            <h1>Cleaning</h1>
            <p>
              Rockets leaving and entering the atmosphere get dirty. We'll apply
              the industries best Windex.
            </p>
            <div className="border-top">
              <a
                href="https://www.nasa.gov/"
                style={{ wordBreak: "break-word" }}
                className="q-btn"
              >
                VISIT NASA. BECAUSE REASONS
              </a>
            </div>
          </div>
          <div className="extra-images">
            <img src={four} />
          </div>
        </div>
        <div className="s-text-wrapper">
          <p className="center">So shiny you can't even look at it</p>
        </div>
        <img className="center-image" src={ten} />
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Cleaning;
