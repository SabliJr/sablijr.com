import React from "react";
import "./header.css";

import Logo from "../../Assets/Logo.png";

const Header = () => {
  return (
    <header className='Header'>
      <img src={Logo} alt='' className='logo' />
    </header>
  );
};

export default Header;
