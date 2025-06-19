import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logotyp3.svg';
import swedenFlag from '../../assets/swedenFlag.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Good As You Are" className="logo" />
          </Link>
        </div>
        
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/about-me" className="nav-link" onClick={toggleMenu}>About Me</Link>
          <Link to="/act" className="nav-link" onClick={toggleMenu}>What is ACT</Link>
          <Link to="/toxism" className="nav-link" onClick={toggleMenu}>Toxism vs Narcissism</Link>
          <Link to="/services" className="nav-link" onClick={toggleMenu}>Services</Link>
          <Link to="/contact" className="nav-button" onClick={toggleMenu}>Contact</Link>
          <div className="mobile-flag-container">
            <img src={swedenFlag} alt="Swedish flag" className="flag flag-mobile" />
          </div>
        </nav>

        <div className="header-right">
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <img src={swedenFlag} alt="Swedish flag" className="flag flag-desktop" />
        </div>
      </div>
    </header>
  );
};

export default Header; 