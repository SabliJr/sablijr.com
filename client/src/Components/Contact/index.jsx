import React from "react";
import "./contact.css";

import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const Index = () => {
  const date = new Date().getFullYear();

  return (
    <section className='contact'>
      <h3>Contact Me.</h3>
      <p className='contactText'>
        Interested in discussing a potential project or want to find out more.
        Shoot me an email at <span>info.sablijr@gmail.com</span>.
      </p>
      <div className='SMDiv'>
        {/* <h6>Find me on:</h6> */}
        <div className='linkIcons'>
          <a target='#blank' href='https://twitter.com/SabLiJr'>
            <FaSquareXTwitter className='SMIcons' />
          </a>
          <a target='#blank' href='https://github.com/SabliJr'>
            <BsGithub className='SMIcons' />
          </a>
          <a target='#blank' href='https://www.youtube.com/@_sabli'>
            <FaYoutube className='SMIcons' />
          </a>
          <a target='#blank' href='https://www.linkedin.com/in/sablijr/'>
            <FaLinkedinIn className='SMIcons' />
          </a>
        </div>
      </div>
      <p className='copy'>Sabli Jr. &copy;{date}</p>
    </section>
  );
};

export default Index;
