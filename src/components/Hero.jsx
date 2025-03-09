import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          I AM A <span className="title-image title-image-1"> <img src='Hero1.png'/></span> FREELANCE<br />
          DESIGNER<span className="title-image title-image-2"> <img src='Hero2.png'/></span> FROM<br />
          SAN FRANCISCO
        </h1>
        
        <div className='hero-info'>
            <div className="client-logos">
            <div className="logo logo-1">• doradesign</div>
            <div className="logo logo-2">wave</div>
            <div className="logo logo-3">SILIⅯILA</div>
            </div>
            
            <div className="hero-description">
            <p>Welcome to my portfolio. Here, artistry meets functionality.Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;