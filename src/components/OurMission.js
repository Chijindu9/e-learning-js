import React from 'react';
import '../styles/OurMission.css';
import MissionImage from '../assets/_MG_2880.jpg';

const OurMission = () => {
  return (
    <section className="our-mission">
      <div className="container">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Edenites Academy, we're committed to democratizing education by providing 
            high-quality, affordable learning opportunities to students worldwide. 
            We bridge the gap between traditional education and the evolving needs 
            of the modern workforce.
          </p>
          <div className="mission-stats">
            <div className="stat-item">
              <span className="stat-number">1,000+</span>
              <span className="stat-label">Students Enrolled</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">400+</span>
              <span className="stat-label">Courses Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Expert Instructors</span>
            </div>
          </div>
        </div>
        <div className="mission-image">
          <img src={MissionImage} alt="Edenites Mission" className="mission-img" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;


