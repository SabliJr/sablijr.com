import React from "react";

import Header from "../Components/Header";
import Hero from "../Components/Hero/index";
import About from "../Components/About/index";
import LaWork from "../Components/myWork/index";
import TeckStack from "../Components/About/teckStack";
import Contact from "../Components/Contact/index";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <LaWork />
      <TeckStack />
      <Contact />
    </>
  );
};

export default Home;
