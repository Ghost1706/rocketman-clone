import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Services from "./componets/services/Services";

const PageRoute = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default PageRoute;
