import React from "react";
import Navbar from "./componets/navbar/Navbar";
import Intro from "./componets/intro/Intro";
import Section1 from "./componets/section1/Section1";
import Img_section from "./componets/img-section/Img_section";
import Quote from "./componets/quote/Quote";
import Footer from "./componets/footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Intro></Intro>
      <Section1></Section1>
      <Img_section></Img_section>
      <Quote></Quote>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default App;
