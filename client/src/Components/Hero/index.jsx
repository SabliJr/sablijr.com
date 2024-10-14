import React from "react";
import "./hero.css";

import SVGComponent from "./svgCom";

const Index = () => {
  return (
    <section className='heroSection'>
      <h2 className='heroTitle'>Software engineer & Tech Entrepreneur...</h2>
      {/* <p className='heroText'>
        I'm not just a builder I'm a digital architect, crafting mesmerizing
        content to elevate my brand's online presenc e.
      </p> */}
      <p className='heroText'>
        Code by day, startups by night | Solo founder building what I wish
        existed | Always learning, always shipping.
      </p>
      <SVGComponent />
    </section>
  );
};

export default Index;
