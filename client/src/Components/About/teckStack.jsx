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
import Docker from "../../Assets/Docker.png";

import GOLang from "../../Assets/GoLang.png";
import Python from "../../Assets/Python.webp";
import Linux from "../../Assets/Linux.png";
import Vim from "../../Assets/Vim.png";
import Express from "../../Assets/Express.png";

const TeckStack = () => {
  return (
    <div className='_stack_section'>
      <h1 className='_tech_stack'>My Tech Stacks.</h1>
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
            <img src={Docker} alt='' />
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
            <img src={GOLang} alt='' />
            <img src={Python} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeckStack;
