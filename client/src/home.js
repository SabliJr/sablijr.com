import React from "react";
import "./sketchy.css";
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { RiAppleFill, RiGithubFill } from "react-icons/ri";

// Assets
import Me from "./Assets/me.png";
import Wishties from "./Assets/_wishties.png";
import Facia from "./Assets/Facia.png";

const Home = () => {
  return (
    <div className="sketchy-container">
      {/* Header Area */}
      <header className="sketchy-header">
        <div className="profile-pic-container">
          <img src={Me} alt="Sabli Junior" className="profile-pic" />
        </div>
        <div className="header-text">
          <h1 className="main-name">Sabli Junior</h1>
          <h2 className="main-title">Software & Product Engineer</h2>
        </div>
      </header>

      <div className="left-column">

        {/* About Me */}
        <div className="content-block">
          <h3 className="section-title">About Me</h3>
          <p className="block-text">
            I’m a software engineer and product builder who enjoys creating things from the ground up. I like turning real-world problems into practical, user-friendly software, from idea to launch. Over the past few years, I’ve been building SaaS tools and mobile apps, experimenting with ideas, learning through shipping, and improving products based on real user feedback.
          </p>
        </div>

        {/* Education */}
        <div className="content-block">
          <h3 className="section-title">Education</h3>
          <div style={{ marginBottom: '15px' }}>
            <p className="school-name">42 Paris</p>
            <p className="block-text">Computer Science</p>
          </div>
        </div>

        {/* Contact */}
        <div className="content-block">
          <h3 className="section-title">Contact</h3>
          <p className="block-text">info.sablijr@gmail.com</p>
          <div className="social-links" style={{ marginTop: '15px' }}>
            <a target='_blank' rel="noreferrer" href='https://twitter.com/SabLiJr'>
              <FaSquareXTwitter />
            </a>
            <a target='_blank' rel="noreferrer" href='https://github.com/SabliJr'>
              <BsGithub />
            </a>
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sablijr/'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Right Column: Work Experience / Projects */}
      <div className="right-column">
        <h3 className="section-title">products:</h3>

        <div className="jobs-container">

          {/* Facia */}
          <div className="job-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <img src={Facia} alt="logo" style={{ width: '130px', objectFit: 'contain' }} />
            <p className="job-title">FACIA | Founder</p>

            <p className="block-text" style={{ marginBottom: '10px' }}>
              Facia is an AI-powered skincare app that scans your face and builds a simple, personalized routine based on your skin needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a target='_blank' rel="noreferrer" href='https://apps.apple.com/us/app/facia-personalized-skincare/id6753816755' className="project-link">
                <RiAppleFill style={{ marginRight: '5px' }} /> App Store
              </a>
              <a target='_blank' rel="noreferrer" href='https://facia.app/' className="project-link">
                <HiOutlineExternalLink style={{ marginRight: '5px' }} /> facia.app
              </a>
            </div>
          </div>

          {/* Wishties (Discontinued) */}
          <div className="job-item" style={{ opacity: 0.7, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <img src={Wishties} alt="logo" style={{ width: '130px', objectFit: 'contain', marginBottom: '6px' }} />
            <p className="job-title">WISHTIES | Discontinued</p>

            <p className="block-text" style={{ marginBottom: '10px' }}>
              Your fan’s wish links and your wish list links all in one place.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span className="block-text" style={{ fontStyle: 'italic' }}>Discontinued</span>

              <a target='_blank' rel="noreferrer" href='https://github.com/SabliJr/Wishties' className="project-link">
                <RiGithubFill style={{ marginRight: '2px' }} /> Github
              </a>
            </div>

          </div>

        </div>
      </div>

    </div >
  );
};

export default Home;
