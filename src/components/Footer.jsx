import React from 'react';
import '../App.css';
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <div className="footer">
      <div className="marquee-top">
        <Marquee>
        <span className="marquee-word">FLOW</span>
        <span className="Footer-star-icon"> <img src='Star.png'/></span>
        <span className="marquee-word">FIGMA</span>
        <span className="Footer-star-icon"><img src='Star.png'/></span>
        <span className="marquee-word">DESIGNER</span>
        <span className="Footer-star-icon"><img src='Star.png'/></span>
        <span className="marquee-word">DEVELOPER</span>
        </Marquee>
      </div>
      
      <div className="lets-talk-container">
        <div className="lets-talk">
          LET'S TALK!
        </div>
      </div>
      
      <div className="email-container">
        <a href="mailto:ronit1808@gmail.com" className="email-link">
          ronit1808@gmail.com
          <span className="arrow-icon">↗</span>
        </a>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">© Ronit Gupta - 2025</div>
        <div className="social-links">
          <a href="#" className="social-link">Dribbble</a>
          <a href="#" className="social-link">Behance</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;