import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../utils/images';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo" aria-label="Little Lemon Footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col footer-brand">
          <img src={images.logo} alt="Little Lemon" className="footer-logo" />
          <p className="footer-tagline">
            Bringing the authentic taste of the Mediterranean to the heart of Chicago since 1995.
          </p>
        </div>

        {/* Doormat Navigation */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><a href="/#order-online">Order Online</a></li>
            <li><a href="/#login">Login</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <address className="footer-address">
            <p>123 Mediterranean Way</p>
            <p>Chicago, IL 60601</p>
            <p className="footer-contact-item">
              <a href="tel:+13125550199">(312) 555-0199</a>
            </p>
            <p className="footer-contact-item">
              <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
            </p>
          </address>
        </div>

        {/* Social Media Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Connect</h4>
          <ul className="footer-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Little Lemon on Twitter">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
