import React from 'react';
import './Footer.css';
import linkedInIcon from './assets/images/linkedInIcon.svg';
import gitHubIcon from './assets/images/gitHubIcon.svg';
import facebookIcon from './assets/images/facebookIcon.svg';
import instagramIcon from './assets/images/instagramIcon.svg';

export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-connect-title">Let's Connect!</div>
      <div className="footer-social-vertical">
        <a href="https://www.linkedin.com/in/yuna-tenzing-a69bb2245/" target="_blank" rel="noopener noreferrer" className="footer-icon-link linkedin">
          <img src={linkedInIcon} alt="LinkedIn" className="footer-icon jiggle" />
        </a>
        <a href="https://github.com/dluna2" target="_blank" rel="noopener noreferrer" className="footer-icon-link github">
          <img src={gitHubIcon} alt="GitHub" className="footer-icon jiggle" />
        </a>
        <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer" className="footer-icon-link facebook">
          <img src={facebookIcon} alt="Facebook" className="footer-icon jiggle" />
        </a>
        <a href="https://www.instagram.com/tenzing.2002/" target="_blank" rel="noopener noreferrer" className="footer-icon-link instagram">
          <img src={instagramIcon} alt="Instagram" className="footer-icon jiggle" />
        </a>
      </div>
      <div className="footer-copyright">©Tenzing</div>
    </footer>
  );
}
