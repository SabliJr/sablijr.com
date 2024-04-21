import React from "react";
import "./index.css";

import NewArrow from "./svgComp";
import Wishties from "../../Assets/_wishties.jpg";

const Index = () => {
  return (
    <section className='workSection'>
      <NewArrow />
      <h3 className='workTitle'>
        <span>What I have done so far</span>, <br />
        my work.
      </h3>
      <article className='workShow'>
        <div className='workDiv'>
          <div className='img_div1'>
            <img src={Wishties} alt='' className='_wishties' />
          </div>
          <div className='img_div2'>
            <div className='img_div2_inner'></div>
          </div>
          <div className='img_div3'>
            <div className='img_div3_inner'></div>
          </div>
          <div className='img_div4'>
            <div className='img_div4_inner'></div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Index;
