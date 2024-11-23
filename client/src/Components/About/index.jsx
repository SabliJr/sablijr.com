import React from "react";
import "./about.css";

import Me from "../../Assets/Me.jpg";

const Index = () => {
  return (
    <section className='aboutSection'>
      <div className='_me_container'>
        <img src={Me} alt='' className='_me' />
      </div>
      <p className='aboutText'>
        I'm Sabli Junior, a Software Engineer, Tech Entrepreneur, and student at
        42Paris. I love building products and solving real-world problems with
        code, creating things from the ground up.
        <br />
        <br />
        I'm not just a builder; I'm also a digital creator, making videos that
        clarify my thoughts, reinforce what I've learned, and hopefully teach
        others what I know.
      </p>
    </section>
  );
};

export default Index;
