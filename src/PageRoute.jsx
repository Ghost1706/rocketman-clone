import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Services from "./componets/services/Services";
import Contact from "./componets/Contact/Contact";
import Programming from "./componets/extra pages/Programming";
import Cleaning from "./componets/extra pages/Cleaning";
import Fuelling from "./componets/extra pages/Fuelling";

const PageRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact-Us" element={<Contact />} />
          <Route path="/Programming" element={<Programming />} />
          <Route path="/Cleaning" element={<Cleaning />} />
          <Route path="/Fuelling" element={<Fuelling />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default PageRoute;
