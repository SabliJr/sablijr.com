import React from "react";
import "./work.css";

import Wishties from "../../Assets/_wishties.png";
import Sponsorwave from "../../Assets/_sponsorwave.png";
import ChatFolderz from "../../Assets/_chatfolderz.png";

import { HiOutlineExternalLink } from "react-icons/hi";
import { LuPauseCircle } from "react-icons/lu";

const Index = () => {
  return (
    <section className='_work_section'>
      <h3 className='_work_title'>My Startup Projects.</h3>
      <div className='_work_container'>
        <div className='_project_container'>
          <img src={Sponsorwave} alt='' className='_project_logo _extrac' />
          <p>
            Helping Creators Make a Living Doing what they love while enabling
            companies to reach their users!
          </p>
          <button>
            <a target='#blank' href='https://www.sponsorwave.com/'>
              <HiOutlineExternalLink /> sponsorwave.com
            </a>
          </button>
        </div>
        <div className='_project_container'>
          <img src={ChatFolderz} alt='' className='_project_logo' />
          <p>
            Organize your AI conversations with folders, search, bookmark, and
            manage prompts, prompt library and more... All in one extension.
          </p>
          <button>
            <a target='#blank' href='https://chatfolderz.com/'>
              <HiOutlineExternalLink /> chatfolderz.com
            </a>
          </button>
        </div>
        <div className='_project_container'>
          <img src={Wishties} alt='' className='_project_logo' />
          <p>
            Your fan’s wish links and your wish list links all in one place.
            Stop confusing your fans, make it easier for them to support you!
          </p>
          <button id='_discontinued'>
            <a target='#blank' href='https://www.wishties.com/'>
              <LuPauseCircle />
              discontinued
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;


//  <div className='workDiv'>
//    <div className='img_div1'>
//      <h3>Wishties...</h3>
//      <p>
//        Wishties is a platform designed to help creators receive gifts from their
//        fans. By allowing fans to select and send thoughtful gifts directly, it
//        fosters a deeper connection between creators and their supporters.
//        Similar to Throne, Wishties provides a simple and engaging way for fans
//        to show appreciation and support, enhancing the creator-fan relationship.
//        <br />
//        <br />
//        However, please note that Wishties is now closed and no longer in
//        operation.
//      </p>
//      <h6 className='_stack'>
//        Stacks: NodeJs/Express, Typescript, PostgreSql, React/TS, CSS, AWS
//      </h6>
//      <span className='_btns_span'>
//        <button className='_workBtns'>
//          <a href='https://github.com/SabliJr/Wishties' target='#blank'>
//            Repo
//          </a>
//        </button>
//        <button className='_workBtns'>
//          <a href='https://www.wishties.com/' target='#blank'>
//            Visit Live
//          </a>
//        </button>
//      </span>
//    </div>
//    <div className='img_div2'>
//      <img src={Wishties} alt='' className='_wishties' />
//    </div>
//    <div className='img_div3'>
//      <img
//        src={Sponsorwave}
//        alt='Second_Project_image'
//        className='sponsor_wave_img'
//      />
//    </div>
//    <div className='img_div4'>
//      <h3>Sponsorwave...</h3>
//      <p>
//        Sponsorwave is a platform designed to streamline sponsorship and brand
//        partnerships for content creators. It allows users to discover potential
//        sponsors, track their sponsorships, and analyze engagement metrics. With
//        features like tailored recommendations, a popularity index, and activity
//        monitoring, Sponsorwave helps creators manage their sponsorships
//        efficiently and maximize their partnership opportunities.
//        <br />
//        <br />
//        Note: Sponsorwave is currently under development and the repo is private.
//      </p>
//      <h6 className='_stack'>
//        Stacks: NodeJs/Express, Typescript, PostgreSql, React/TS, CSS
//      </h6>
//      <button className='_workBtns'>
//        <a href='https://www.sponsorwave.com/' target='#blank'>
//          Visit Live
//        </a>
//      </button>
//    </div>
//  </div>;