import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Services from "./componets/services/Services";
import Contact from "./componets/Contact/Contact";

const PageRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact-Us" element={<Contact />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default PageRoute;
