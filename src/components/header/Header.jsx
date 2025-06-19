import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import swedenFlag from '../../assets/swedenFlag.png';
import Logo from '../../assets/Logotyp3.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="Good As You Are" className="logo-image" />
          </Link>
        </div>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active">Home</a></li>
            <li><a href="#about" className="nav-link">About Me</a></li>
            <li><a href="#act" className="nav-link">What is ACT</a></li>
            <li><a href="#toxism" className="nav-link">Toxism vs Narcissism</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        <img src={swedenFlag} alt="Swedish flag" className="flag" />
      </div>
    </header>
  );
};

export default Header; 