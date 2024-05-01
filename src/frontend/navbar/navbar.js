import React, { useState, useRef, useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../pic/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  const handleOutsideClick = (event) => {
    // Check if the clicked element is outside the menu
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Attach event listener to handle clicks outside of the menu
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      // Remove event listener when menu is closed
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup function to remove event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMenuOpen]); // Re-run effect whenever isMenuOpen changes

  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <a href="/home" className="logo">
          <img src ={Logo} alt='Logo' />
        </a>
      </div>
      <div className='navbar-right'>
       <button className="menu-button" onClick={toggleMenu}>
       <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
      </div>
      {isMenuOpen && (
        <div className="menu-screen" ref={menuRef}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/whoarewe" onClick={toggleMenu}>
                Who Are We
              </Link>
            </li>
            <li>
              <Link to="/archives" onClick={toggleMenu}>
                Project Archives
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
