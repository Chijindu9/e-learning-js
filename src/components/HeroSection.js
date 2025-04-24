import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Hero-image copy.png';
import '../styles/HeroSection.css';



const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Edenites Academy</h1>
          <h2>Explore. | Learn. | Succeed.</h2>
          <p>Explore our courses and start learning today!</p>
          <div className="hero-cta">
            
            <Link to="/login?form=signup" className="cta-button primary">Start 7-day Free Trial</Link>
            <Link to="/courses" className="cta-button secondary">Explore Courses</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Learning at Edenites" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;