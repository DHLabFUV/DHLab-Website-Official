import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    // Close the menu if it's open and the click is outside of the menu
    if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener to handle clicks outside of the menu
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      // Clean up by removing the event listener on component unmount
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]); // Re-run effect whenever isMenuOpen changes

  return (
    <nav className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <div className="menu-screen" ref={menuRef}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/whoarewe" onClick={toggleMenu}>Who Are We</Link></li>
            <li><Link to="/archives" onClick={toggleMenu}>Project Archives</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
