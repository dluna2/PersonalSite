import React from 'react';
import './about.css';
const proPic = require('./assets/images/proPic.jpg');
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
      {/* Profile and main overlay grouping */}
      <div className="about-profile-floating">
        <img src={proPic} alt="profile" className="about-profile-pic" />
        <div className="about-greeting-text">
          <span>Hello.<br/>My name is Yuna.</span>
        </div>
      </div>
      <div className="about-bio-box">
        <p className="about-bio-main">
          I am a software engineer.<br />
          Recently, I have been delving into more AI research and and UI/UX wireframing.
        </p>
      </div>
      <div className="about-featured-quote">
        “When I am away from the computer, I like to take photos, play video games, and listen to music”
      </div>
      <div className="about-recently-played-panel">
        <div className="about-recently-played-heading">Recently Played</div>
        {/* You can list songs/media here in the future */}
      </div>
    </div>
  </div>
);

export default About;
