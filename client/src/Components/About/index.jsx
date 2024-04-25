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
import Python from "../../Assets/Python.png";

import Pr from "../../Assets/Pr.png";
import EF from "../../Assets/AfterEffect.png";
import Linux from "../../Assets/Linux.png";
import Photoshop from "../../Assets/Photoshop.png";
import Vim from "../../Assets/Vim.png";
import Express from "../../Assets/Express.png";

const Index = () => {
  return (
    <section className='aboutSection'>
      <iframe
        className='videoEl'
        src='https://www.youtube-nocookie.com/embed/YHDUbLT4nkk?si=hRpf7C730_Kyyh3W'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen></iframe>
      <p className='aboutText'>
        Hi there, I'm Sabli Junior, a <span>software engineering</span> &
        student at <span>42Paris </span> and a <span>content creator</span>.
        This video is a little bit about me if you've got a minute. It is
        literally <span>one minute</span> long 😁
      </p>
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
            <img src={Python} alt='' />
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
      {/* <SvgSec /> */}
    </section>
  );
};

export default Index;
