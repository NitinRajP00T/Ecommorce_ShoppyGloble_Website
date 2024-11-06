import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FaCartShopping } from "react-icons/fa6";

// navbar or header for home and cart 

const Header = () => {
  return (
    <header>
      <nav>
        {/* links for home and cart */}
        <Link to="/">Home</Link>
        <Link to="/cart"><FaCartShopping size="2rem"/></Link>
      </nav>
    </header>
  );
};

export default Header;
