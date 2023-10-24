import React from "react";
import "./services.css";

import SVGComponent from "./svgComp";

const Index = () => {
  return (
    <section className='servicesSec'>
      <SVGComponent />
      <h3>What I offer, my services.</h3>
      <p className='textServices'>
        At the moment I'm a full time student, I provide these services In
        conjunction with my studies as a freelance gigs.
      </p>
      <div className='servicesDiv'>
        <div>
          <h5>Social Media Management</h5>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. <span>Read More</span>
          </p>
        </div>
        <div>
          <h5>User Generated Content</h5>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. <span>Read More</span>
          </p>
        </div>
        <div>
          <h5>Web Development</h5>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. <span>Read More</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Index;
