import React from 'react';
import '../App.css';

const Experience = () => {
  const experiences = [
    {
      position: "Lead Product Designer",
      company: "Fortknox",
      period: "Mar 2022 - Oct 2023"
    },
    {
      position: "Intern Designer",
      company: "OmniSafe",
      period: "Mar 2022 - Oct 2023"
    },
    {
      position: "UI Designer",
      company: "Doradesign",
      period: "Mar 2022 - Oct 2023"
    },
    {
      position: "Frontend Developer",
      company: "OpacityAuthor",
      period: "Mar 2022 - Oct 2023"
    }
  ];

  return (
    <div className="experience-container">
      <div className="experience-content">
        <div className="section-header">
        <h2 className="section-title">
                <span className="star-icon"><img src='Star.png'/></span> Experience
          </h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-details">
                <h3 className="position">{exp.position}</h3>
                <p className="company">{exp.company}</p>
              </div>
              <p className="period">{exp.period}</p>
            </div>
          ))}
        </div>
      </div>
      
     
    </div>
  );
};

export default Experience;