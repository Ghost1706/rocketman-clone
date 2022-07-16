import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import menuIcon from "../../images/menuIcon.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navRightRef = useRef(null);
  const n_linksRef = useRef(null);
  useEffect(() => {
    const linkHeight = n_linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      navRightRef.current.style.height = `${linkHeight}px`;
    } else {
      navRightRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <header>
      <div className="nav-left">
        <Link to="/">
          <img className="logo" src={logo} alt="DUMMY-IMG" />
        </Link>
        <button
          className="toggle-links"
          onClick={() => setShowLinks(!showLinks)}
        >
          <img className="navbar-toggler-icon" src={menuIcon} alt="menu" />
        </button>
      </div>
      <div className="nav-dropdown" ref={navRightRef}>
        <ul className="n-links" ref={n_linksRef}>
          <li className="n-link">
            <Link to="/Services">SERVICES</Link>
          </li>
          <li className="n-link">
            <Link to="/Contact-Us">CONTACT US</Link>
          </li>
          <li className="n-link">
            <a href="https://learnwagtail.com/wagtail-for-beginners/">
              WAGTAIL COURSES
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
