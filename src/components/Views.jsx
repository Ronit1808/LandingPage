import React, { useState } from 'react';
import '../App.css';
import ProfilePic from '/ProfilePic.png';

const Views = () => {
  const testimonials = [
    {
      id: 1,
      name: "Floyd Miles",
      company: "eBay",
      image: ProfilePic,
      quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
    },
    {
      id: 2,
      name: "Jane Cooper",
      company: "Google",
      image: ProfilePic,
      quote: "The tools provided are intuitive and powerful. I was able to showcase my skills effectively and landed multiple interviews thanks to my new resume."
    },
    {
      id: 3,
      name: "Robert Johnson",
      company: "Microsoft",
      image: ProfilePic,
      quote: "As someone who struggled with resume formatting, this platform made the entire process simple and stress-free. Highly recommended for job seekers."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="section-header">
        <h2 className="section-title">
                <span className="star-icon"><img src='Star.png'/></span> What They Say
          </h2>
        </div>

        <div className="testimonial-layout">
          <div className="testimonial-profile">
            <div className="profile-image">
              <img src={currentTestimonial.image} alt={currentTestimonial.name} />
            </div>
            <div className="profile-info">
              <h3 className="profile-name">{currentTestimonial.name}</h3>
              <p className="profile-company">{currentTestimonial.company}</p>
            </div>
          </div>

          <div className="testimonial-quote">
            <div className="quote-mark">"</div>
            <p className="quote-text">{currentTestimonial.quote}</p>
          </div>
        </div>


        <div className="testimonial-navigation">
          <button className="nav-button prev" onClick={goToPrevious}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="nav-button next" onClick={goToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Views;