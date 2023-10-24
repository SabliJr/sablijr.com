import React from "react";
import "./hero.css";

import SVGComponent from "./svgCom";

const Index = () => {
  return (
    <section className='heroSection'>
      <h2 className='heroTitle'>
        <div className='titleDiv1'>
          Software<span> engineer</span>
        </div>
        with a love for content <br />
        <div id='create'>
          {" "}
          <span>creation</span>.
        </div>
      </h2>
      <p className='heroText'>
        I'm not just a builder; I'm a digital architect, crafting mesmerizing
        content to elevate your brand's online presence.
      </p>
      <SVGComponent />
    </section>
  );
};

export default Index;
