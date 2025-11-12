import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import YunaM3LogoAnimated from './assets/images/由奈m3LogoAnimated';
import './Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation('navbar');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
    setMenuOpen(false);
  };
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
        <li className={location.pathname === '/about' ? 'active' : ''}><Link to="/about" onClick={closeMenu}>{t('about')}</Link></li>
        <li className={location.pathname.includes('/experience') ? 'active' : ''}><Link to="/experience" onClick={closeMenu}>{t('experience')}</Link></li>
        <li className={location.pathname === '/photography' ? 'active' : ''}><Link to="/photography" onClick={closeMenu}>{t('photography')}</Link></li>
        <li className={location.pathname === '/blog' ? 'active' : ''}><Link to="/blog" onClick={closeMenu}>{t('blog')}</Link></li>
        <li className="navbar-lang-dropdown">
          <span tabIndex={0} onClick={()=>setLangDropdownOpen(open=>!open)} style={{color: '#000'}}>{t('Language Select')}</span>
          <div className="navbar-lang-list" style={{display: langDropdownOpen ? 'block' : undefined}}>
            <a href="#" style={{color: i18n.language === 'en' ? '#ffb116' : '#000'}} onClick={()=>changeLang('en')}>English</a>
            <a href="#" style={{color: i18n.language === 'es-MX' ? '#ffb116' : '#000'}} onClick={()=>changeLang('es-MX')}>Español MEX</a>
            <a href="#" style={{color: i18n.language === 'ja' ? '#ffb116' : '#000'}} onClick={()=>changeLang('ja')}>日本語</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
