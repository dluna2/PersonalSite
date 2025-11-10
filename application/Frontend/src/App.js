import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import proPic from './assets/images/proPic.jpg';
import facebookIcon from './assets/images/facebookIcon.svg';
import instagramIcon from './assets/images/instagramIcon.svg';
import linkedInIcon from './assets/images/linkedInIcon.svg';
import gitHubIcon from './assets/images/gitHubIcon.svg';
import './App.css';

// Placeholder page components
const About = () => <div style={{ padding: '3rem' }}><h2>About</h2></div>;
const Experience = () => <div style={{ padding: '3rem' }}><h2>Experience / Skills</h2></div>;
const Photography = () => <div style={{ padding: '3rem' }}><h2>Photography</h2></div>;
const Blog = () => <div style={{ padding: '3rem' }}><h2>Blog</h2></div>;

// Home page with proPic and user info+icons
const Home = () => (
  <div className="home-container">
    <div className="home-bio">
      <h1 className="profile-title">Tenzing Yuna/Dani</h1>
      <div className="profile-desc">Software Engineer | AI Researcher | UI Designer</div>
      <div className="profile-location"><span className="profile-location-icon">⚲ </span> San Francisco, CA</div>
      <div className="home-socials">
        <a className="social-link facebook" href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a className="social-link instagram" href="https://www.instagram.com/tenzing.2002/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a className="social-link linkedin" href="https://www.linkedin.com/in/yuna-tenzing-a69bb2245/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>
        <a className="social-link github" href="https://github.com/dluna2" target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} alt="GitHub" />
        </a>
      </div>
    </div>
    <img className="home-profile-pic" src={proPic} alt="Profile" />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
