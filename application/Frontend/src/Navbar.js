import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import the logo SVG
import logo from './assets/images/由奈m3Logo.svg';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-logo-img" />
      </Link>
      <ul className="navbar-links">
        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about">about</Link></li>
        <li className={location.pathname.includes('/experience') ? 'active' : ''}><Link to="/experience">experience/skills</Link></li>
        <li className={location.pathname === '/photography' ? 'active' : ''}><Link to="/photography">photography</Link></li>
        <li className={location.pathname === '/blog' ? 'active' : ''}><Link to="/blog">blog</Link></li>
        <li className="navbar-lang-dropdown">
          <span tabIndex={0}>ENG ▾</span>
          <div className="navbar-lang-list">
            <Link to="#">ENG</Link>
            <Link to="#">日本語</Link>
            {/* Add more languages here if needed */}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
