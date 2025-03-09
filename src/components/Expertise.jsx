import React from 'react';
import '../App.css';

const Expertise = () => {
  return (
    <div className="expertise-section">
      <div className="expertise-container">
        <h2 className="section-title">
          <span className="star-icon"><img src='Star.png'/></span> Expertise
        </h2>
        
        <div className="expertise-grid">
          <div className="expertise-card">
            <h3 className="expertise-title">• Branding</h3>
            <p className="expertise-description">
              I create efficient, adaptable, and engaging websites. No predefined 
              patterns. No sluggish, complex code. Webflow forms the foundation of my 
              web development approach. I employ it to provide safe, top-notch 
              bespoke websites.
            </p>
          </div>
          
          <div className="expertise-card">
            <h3 className="expertise-title">• UI Design</h3>
            <p className="expertise-description">
              I create efficient, adaptable, and engaging websites. No predefined 
              patterns. No sluggish, complex code. Webflow forms the foundation of my 
              web development approach. I employ it to provide safe, top-notch 
              bespoke websites.
            </p>
          </div>
          
          <div className="expertise-card">
            <h3 className="expertise-title">• UX Design</h3>
            <p className="expertise-description">
              I comprehend and resolve digital product issues using a user-focused 
              methodology. Investigation, compassion, and visual conveyance are a 
              few techniques I apply to captivate and involve your users while fulfilling 
              your business requirements
            </p>
          </div>
          
          <div className="expertise-card">
            <h3 className="expertise-title">• Development</h3>
            <p className="expertise-description">
              I create user-friendly, adaptive, engaging websites. No cookie-cutters. No 
              cumbersome, complex coding. Webflow forms the foundation of my web 
              development approach. I employ it to produce safe, top-notch 
              personalized websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;