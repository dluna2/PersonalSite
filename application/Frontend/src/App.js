import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import proPic from './assets/images/proPic.jpg';
import './App.css';

// Placeholder page components
const About = () => <div style={{ padding: '3rem' }}><h2>About</h2></div>;
const Experience = () => <div style={{ padding: '3rem' }}><h2>Experience / Skills</h2></div>;
const Photography = () => <div style={{ padding: '3rem' }}><h2>Photography</h2></div>;
const Blog = () => <div style={{ padding: '3rem' }}><h2>Blog</h2></div>;

// Home page with proPic in a circle on the right
const Home = () => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '4rem 4rem 4rem 1.5rem', minHeight: '65vh', alignItems: 'center', background: '#fff'}}>
    <img
      src={proPic}
      alt="Profile"
      style={{ height: 240, width: 240, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 17px 0 rgba(0,0,0,0.10)'}}
    />
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
