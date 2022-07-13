import React from "react";
import "./quote.css";
import { Link } from "react-router-dom";

const Quote = () => {
  return (
    <section className="quote">
      <div className="q-top">
        <p>We've also partnered with Skynet to maintain humanoid robotics.</p>
        <Link to="/Contact-Us" className="q-btn">
          CONTACT US
        </Link>
      </div>
      <div className="q-bot">
        <h2>
          Our rockets were so clean they blinded over 1,000 people when they
          watched our launch. Thanks Rocketman!
        </h2>
        <p>— TOTALLY NOT SPACEX 😉</p>
      </div>
    </section>
  );
};

export default Quote;
