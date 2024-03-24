import React from "react";
import "./index.css";

import NewArrow from "./svgComp";

import LinksImg1 from "../../Assets/Screen-Shot-2021-04-14-at-8.38.21-AM.webp";
import LinksImg2 from "../../Assets/link-in-bio-page-features.png";
import JobBoard from "../../Assets/original-a5e75dff25e6c01125adac83132f3940.jpg";
import JobBoard2 from "../../Assets/original-93a5daf3a20ec37bb8f6759eb3a67801.png";
import cryptoApp1 from "../../Assets/Screenshot 2023-10-24 at 11.42.54.png";
import cryptoApp2 from "../../Assets/original-439cf0ea6ac2b9311f51da7138b4ec39.png";
import VideoSharing1 from "../../Assets/2a88c234837e7334857687a3983512c7.png";
import VideoSharing2 from "../../Assets/3367fad11f08c28ed6c75184665cd570.jpg";

const Index = () => {
  return (
    <section className='workSection'>
      <NewArrow />
      <h3 className='workTitle'>
        <span>What I have done so far</span>, <br />
        my work.
      </h3>
      <article className='workShow'>
        {/* <div className='workDiv'>
          <h4>Link in bio & wish list app.</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <span>Read More</span> <span>View Live</span>
          </p>
          <div>
            <img src={LinksImg1} alt='' className='linkImg1' />
            <img src={LinksImg2} alt='' className='linkImg2' />
          </div>
        </div> */}
        {/* <div className='workDiv'>
          <h4>Content Creators platform.</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <span>Read More</span> <span>View Live</span>
          </p>
          <div>
            <img src={VideoSharing1} alt='' className='linkImg1' />
            <img src={VideoSharing2} alt='' className='linkImg3' />
          </div>
        </div> */}
        {/* <div className='workDiv'>
          <h4>Crypto prices app.</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <span>Read More</span> <span>View Live</span>
          </p>
          <div>
            <img src={cryptoApp1} alt='' className='linkImg1' />
            <img src={cryptoApp2} alt='' className='linkImg3' />
          </div>
        </div> */}
        {/* <div className='workDiv'>
          <h4>Job board software.</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. <span>Read More</span> <span>View Live</span>
          </p>
          <div>
            <img src={JobBoard} alt='' className='linkImg1' />
            <img src={JobBoard2} alt='' className='linkImg3' />
          </div>
        </div> */}
      </article>
    </section>
  );
};

export default Index;
