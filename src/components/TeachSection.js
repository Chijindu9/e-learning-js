import React from 'react';
import '../styles/TeachSection.css'; 

const TeachSection = () => {
  return (
    <section className="teach-section">
      <div className="teach-container">
        <h2>Teach on Edenites</h2>
        <p className="teach-description">
          Share your knowledge with millions of learners worldwide. Join our instructor 
          community and create high-quality courses on topics you're passionate about.
        </p>
        
        <div className="teach-benefits">
          <h3>Why teach with us?</h3>
          <ul className="benefits-list">
            <li>Reach a global audience of eager learners</li>
            <li>Earn money from your expertise</li>
            <li>Flexible schedule - teach when you want</li>
            <li>Our team helps with course creation</li>
            <li>Comprehensive teaching resources</li>
            <li>Performance analytics dashboard</li>
          </ul>
        </div>
        
        <div className="teach-cta">
          <button className="cta-button teach-button">Start Teaching Today</button>
          <p className="cta-note">No prior teaching experience required</p>
        </div>
      </div>
    </section>
  );
};

export default TeachSection;