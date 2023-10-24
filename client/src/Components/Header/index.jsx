import React from "react";
import "./header.css";

import Logo from "../../Assets/Logo.png";
import { ImArrowUp2 } from "react-icons/im";

const Header = () => {
  return (
    <header className='Header'>
      <img src={Logo} alt='' className='logo' />
      <div className='navLinksDiv'>
        <ImArrowUp2 className='upBtn' />
        <nav className='navLinks'>
          <li>About</li>
          <li>Work</li>
          <li>Services</li>
          <li>Contact</li>
        </nav>
        <button className='resume'>Résume</button>
      </div>
    </header>
  );
};

export default Header;
