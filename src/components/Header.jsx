import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import { images } from '../utils/images';
import '../styles/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header" role="banner">
      <div className="container header-container">
        <Link to="/" className="header-logo-link" onClick={closeMobileMenu} aria-label="Little Lemon Home">
          <img src={images.logo} alt="Little Lemon Restaurant Logo" className="header-logo" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <Nav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </div>
    </header>
  );
};

export default Header;
