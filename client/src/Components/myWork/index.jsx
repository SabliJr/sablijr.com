import React from "react";
import "./index.css";

import NewArrow from "./svgComp";
import Wishties from "../../Assets/_wishties.jpg";
import Sponsorwave from "../../Assets/sponsorwave.png";

const Index = () => {
  return (
    <section className='workSection'>
      <NewArrow />
      <h3 className='workTitle'>
        <span>What I have done so far</span>, <br />
        my work.
      </h3>
      <div className='workDiv'>
        <div className='img_div1'>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className='img_div2'>
          <img src={Wishties} alt='' className='_wishties' />
        </div>
        <div className='img_div3'>
          <img
            src={Sponsorwave}
            alt='Second_Project_image'
            className='sponsor_wave_img'
          />
        </div>
        <div className='img_div4'>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
