import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = ({ isOpen, onClose }) => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/#about' },
    { label: 'Menu', path: '/#menu' },
    { label: 'Reservations', path: '/booking' },
    { label: 'Order Online', path: '/#order-online' },
    { label: 'Login', path: '/#login' },
  ];

  return (
    <nav className={`nav ${isOpen ? 'open' : ''}`} role="navigation" aria-label="Main Navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.label} className="nav-item">
            {item.path.startsWith('/#') ? (
              <a
                href={item.path}
                className="nav-link"
                onClick={onClose}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
