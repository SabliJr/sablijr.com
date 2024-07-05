import React from "react";
import "./header.css";

import Logo from "../../Assets/Logo.png";
import { ImArrowUp2 } from "react-icons/im";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  return (
    <header className='Header'>
      <img src={Logo} alt='' className='logo' />
      <div className='navLinksDiv'>
        <ScrollLink
          to='Header'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <ImArrowUp2 className='upBtn' />
        </ScrollLink>
        <nav className='navLinks'>
          <ScrollLink
            to='aboutSection'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            About
          </ScrollLink>
          <ScrollLink
            to='workSection'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Work
          </ScrollLink>
        </nav>
        <ScrollLink
          className='resume'
          to='contact'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          Contact
        </ScrollLink>
      </div>
    </header>
  );
};

export default Header;
