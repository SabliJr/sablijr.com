import React from "react";
import "./hero.css";

import SVGComponent from "./svgCom";

const Index = () => {
  return (
    <section className='heroSection'>
      <h2 className='heroTitle'>
        <div className='titleDiv1'>
          Software<span> engineer</span> with
        </div>
        a love for content
        <span> creation</span>.{/* </div> */}
      </h2>
      <p className='heroText'>
        I'm not just a builder; I'm a digital architect, crafting mesmerizing
        content to elevate my brand's online presence.
      </p>
      <SVGComponent />
    </section>
  );
};

export default Index;
