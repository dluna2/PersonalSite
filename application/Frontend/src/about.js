import React from 'react';
import './about.css';

const VIDEO_SRC = require('./assets/images/videoSwyabu.mp4');

const About = () => (
  <div className="about-video-bg-wrapper">
    <video
      className="about-bg-video"
      src={VIDEO_SRC}
      autoPlay
      loop
      muted
      playsInline
      width="1440"
      height="2160"
      style={{ objectFit: 'cover' }}
    />
    <div className="about-bg-overlay" />
    <div className="about-content">
      {/* Replace below with actual About text/content/blocks as needed */}
      <h1>About Yuna</h1>
      <p>This is the about page.</p>
    </div>
  </div>
);

export default About;
