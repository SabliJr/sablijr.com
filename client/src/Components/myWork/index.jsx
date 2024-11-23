import React from "react";
import "./work.css";

import Wishties from "../../Assets/_wishties.jpg";
import Sponsorwave from "../../Assets/Sponsorwave.jpg";

const Index = () => {
  return (
    <section className='workSection'>
      <h3 className='workTitle'>
        <span>What I have done so far,</span> <br />
        my work.
      </h3>
      <div className='workDiv'>
        <div className='img_div1'>
          <h3>Wishties...</h3>
          <p>
            Wishties is a platform designed to help creators receive gifts from
            their fans. By allowing fans to select and send thoughtful gifts
            directly, it fosters a deeper connection between creators and their
            supporters. Similar to Throne, Wishties provides a simple and
            engaging way for fans to show appreciation and support, enhancing
            the creator-fan relationship.
            <br />
            <br />
            However, please note that Wishties is now closed and no longer in
            operation.
          </p>
          <h6 className='_stack'>
            Stacks: NodeJs/Express, Typescript, PostgreSql, React/TS, CSS, AWS
          </h6>
          <span className='_btns_span'>
            <button className='_workBtns'>
              <a href='https://github.com/SabliJr/Wishties' target='#blank'>
                Repo
              </a>
            </button>
            <button className='_workBtns'>
              <a href='https://www.wishties.com/' target='#blank'>
                Visit Live
              </a>
            </button>
          </span>
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
          <h3>Sponsorwave...</h3>
          <p>
            Sponsorwave is a platform designed to streamline sponsorship and
            brand partnerships for content creators. It allows users to discover
            potential sponsors, track their sponsorships, and analyze engagement
            metrics. With features like tailored recommendations, a popularity
            index, and activity monitoring, Sponsorwave helps creators manage
            their sponsorships efficiently and maximize their partnership
            opportunities.
            <br />
            <br />
            Note: Sponsorwave is currently under development and the repo is
            private.
          </p>
          <h6 className='_stack'>
            Stacks: NodeJs/Express, Typescript, PostgreSql, React/TS, CSS
          </h6>
          <button className='_workBtns'>
            <a href='https://www.sponsorwave.com/' target='#blank'>
              Visit Live
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
