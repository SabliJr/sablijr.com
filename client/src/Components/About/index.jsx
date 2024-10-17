import React from "react";
import "./about.css";

import ReactImg from "../../Assets/ReactImg.png";
import NodeImg from "../../Assets/NodeImg.png";
import PostgreSql from "../../Assets/PostgresSQL.png";
import GitImg from "../../Assets/Git.png";
import CssImg from "../../Assets/CssImg.png";
import cLang from "../../Assets/C_Logo.png";
import TsImg from "../../Assets/Typescrip.png";
import HTMLImg from "../../Assets/Html.png";
import JsImg from "../../Assets/JS.png";
import AWSImg from "../../Assets/AWS.png";

import Pr from "../../Assets/Pr.png";
import EF from "../../Assets/AfterEffect.png";
import Linux from "../../Assets/Linux.png";
import Photoshop from "../../Assets/Photoshop.png";
import Vim from "../../Assets/Vim.png";
import Express from "../../Assets/Express.png";

import Me from "../../Assets/Me.jpg";

const Index = () => {
  return (
    <section className='aboutSection'>
      {/* <div className='videoWrapper'>
        <iframe
          className='videoEl'
          src='https://www.youtube-nocookie.com/embed/YHDUbLT4nkk?si=hRpf7C730_Kyyh3W'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen></iframe>
      </div> */}
      <div className='_me_container'>
        <img src={Me} alt='' className='_me' />
      </div>
      <p className='aboutText'>
        I'm Sabli Junior! a Software Engineer, an Indie Hacker, and a student at
        42Paris. I’m passionate about turning ideas into products, solving
        real-world problems with code, and building stuff from the ground up.
        <br />
        <br />
        With a strong foundation in software development and a drive for
        innovation, I'm always exploring new challenges—whether it's creating
        solutions, learning new skills, or sharing my journey. Solo founder
        building what I wish existed—always learning, always shipping.
      </p>
      {/* <p className='aboutText'>
        Hi there, I'm Sabli Junior, a <span>software engineering</span>, student
        at <span>42Paris </span> and a <span>content creator</span>. This video
        is a little bit about me if you've got a minute. It is literally{" "}
        <span>one minute</span> long! 😁
      </p> */}
      <div className='skillsWrapper'>
        <div className='skillsDiv'>
          <h3 className='skillsTitle'>What I'm good at:</h3>
          <div className='skillsLogos'>
            <img src={HTMLImg} alt='' />
            <img src={CssImg} alt='' />
            <img src={JsImg} alt='' />
            <img src={ReactImg} alt='' />
            <img src={PostgreSql} alt='' />
            <img src={Express} alt='' />
            <img src={NodeImg} alt='' />
            <img src={GitImg} alt='' />
            <img src={TsImg} alt='' />
            <img src={AWSImg} alt='' />
          </div>
        </div>
        <div className='skillsDiv'>
          <h3 className='skillsTitle'>
            Things I <span>play</span> around with:
          </h3>
          <div className='skillsLogos'>
            <img src={Vim} alt='' />
            <img src={cLang} alt='' />
            <img src={Linux} alt='' />
            <img src={Photoshop} alt='' />
            <img src={Pr} alt='' />
            <img src={EF} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
