import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import YunaM3LogoAnimated from './assets/images/由奈m3LogoAnimated';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(open => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <YunaM3LogoAnimated className="navbar-logo-img" />
      </Link>
      <button className="navbar-hamburger" aria-label="Open navigation" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>  {/* new class 'open' when menuOpen */}
        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about" onClick={closeMenu}>about</Link></li>
        <li className={location.pathname.includes('/experience') ? 'active' : ''}><Link to="/experience" onClick={closeMenu}>experience/skills</Link></li>
        <li className={location.pathname === '/photography' ? 'active' : ''}><Link to="/photography" onClick={closeMenu}>photography</Link></li>
        <li className={location.pathname === '/blog' ? 'active' : ''}><Link to="/blog" onClick={closeMenu}>blog</Link></li>
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
