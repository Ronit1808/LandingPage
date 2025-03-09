import React, { useState } from 'react';
import '../App.css';

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };
  
  const faqs = [
    {
      question: "What is your design process?",
      answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "I use a variety of tools including Figma for design and prototyping, Sketch for UI design, Adobe XD for interactive prototypes, InVision for collaboration, Miro for user journey mapping, and UserTesting for gathering feedback. I also use Notion for project management and documentation."
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "I measure success through quantitative metrics like user engagement, conversion rates, and task completion rates, as well as qualitative feedback from user testing sessions. I also track metrics specific to project goals, such as reduced support tickets or increased user retention."
    }
  ];
  
  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="star-icon"><img src='Star.png'/></span> Frequently asked questions
          </h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
            >
              <h2
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
                <span className="faq-toggle-icon">
                  {activeQuestion === index ? '−' : '+'}
                </span>
              </h2>
              <div 
                className={`faq-answer ${activeQuestion === index ? 'show' : 'hide'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;