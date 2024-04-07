// Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <div className="menu-screen">
          {/* Content for the expanded navigation menu */}
          <ul className="menu-list">
            <li>Home</li>
            <li>About</li>dểd
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
