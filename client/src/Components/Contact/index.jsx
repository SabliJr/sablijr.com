import React from "react";
import "./contact.css";

import { BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";

const Index = () => {
  const date = new Date().getFullYear();

  return (
    <section className='contact'>
      <h3>
        Contact <span>Me</span>.
      </h3>
      <p className='contactText'>
        Interested in discussing a potential project or want to find out more.
        Shoot me an email at <span>info.sablijr@gmail.com</span>.
      </p>
      <div className='SMDiv'>
        <h6>Let's connect.</h6>
        <div className='linkIcons'>
          <a target='#blank' href='https://twitter.com/SabLiJr'>
            <FaSquareXTwitter className='SMIcons' />
          </a>
          <a target='#blank' href='https://github.com/SabliJr'>
            <BsGithub className='SMIcons' />
          </a>
          <a target='#blank' href='https://www.instagram.com/sabli.jr/'>
            <PiInstagramLogoFill className='SMIcons' />
          </a>
          <a target='#blank' href='https://www.youtube.com/@_sabli'>
            <FaYoutube className='SMIcons' />
          </a>
          <a target='#blank' href='https://www.linkedin.com/in/sablijr/'>
            <FaLinkedinIn className='SMIcons' />
          </a>
          <a target='#blank' href='https://www.tiktok.com/@sablijr'>
            <FaTiktok className='SMIcons' />
          </a>
        </div>
      </div>
      <p className='copy'>Sabli Jr. &copy;{date}</p>
    </section>
  );
};

export default Index;
