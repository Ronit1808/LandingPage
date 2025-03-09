import React from 'react';
import '../App.css';
import img1 from '/img1.png'
import img2 from '/img2.png'
import img3 from '/img3.png'

const Works = () => {
  const projects = [
    {
      id: 1,
      title: 'Analysis Application',
      description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
      image: img1,
      tags: ['Product', 'UX'],
    },
    {
      id: 2,
      title: 'Fortknox Application',
      description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
      image: img2,
      tags: ['Mobile', 'UX'],
    },
    {
      id: 3,
      title: 'Zenocide Application',
      description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
      image: img3,
      tags: ['App', 'UX'],
    }
  ];

  return (
    <div className="works-section">
      <div className="works-container">
        <div className="section-header">
          <h2 className="section-title1">
            <span className='title-left'>
                <span className="star-icon"><img src='Star.png'/></span> Works</span>
            <a href="/works" className="view-all-link">view all</a>
          </h2>
         
        </div>
        
        <div className="projects-container">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span className="project-tag" key={index}>{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-action">
                    <a href='' className="case-study-button">
                      View Case Study
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;