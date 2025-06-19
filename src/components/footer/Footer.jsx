import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo1.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      <img src={Logo} alt="Good As You Are" className="footer-logo-image" />
    </div>
    <div className="footer-links">
      <a href="#privacy" className="footer-link">Privacy Policy – Disclaimer</a>
    </div>
  </footer>
);

export default Footer; 