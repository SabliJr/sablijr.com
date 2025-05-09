import React from "react";
import "./work.css";

import Wishties from "../../Assets/_wishties.png";
import Sponsorwave from "../../Assets/_sponsorwave.png";
import ChatFolderz from "../../Assets/_chatfolderz.png";
import Optamora from "../../Assets/Optamora.png";

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
            Find sponsors that perfectly match your niche and appeal to your
            subscribers, enhancing your content while boosting your income.
          </p>
          <button>
            <a target='#blank' href='https://www.sponsorwave.com/'>
              <HiOutlineExternalLink /> sponsorwave.com
            </a>
          </button>
        </div>
        <div className='_project_container'>
          <img src={Optamora} alt='' className='_project_logo' />
          <p>
            Optimize your YouTube titles and thumbnails for maximum performance.
            Discover what works with data-driven A/B testing.
          </p>
          <button>
            <a target='#blank' href='https://optamora.com/'>
              <HiOutlineExternalLink /> optamora.com
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
            <LuPauseCircle />
            discontinued
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
