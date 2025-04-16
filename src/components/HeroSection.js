import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section">

        <div className="hero-text">
            <h1>Welcome to Edenites Academy</h1>
            <h4>Explore. | Learn. | Succeed.</h4>
            <p> 
                Join thousands of students in transforming their careers with our top-notch courses. 
            </p>
            <div class="hero-button">
                <button id="up" className="btn1"><a href="#courses">Explore Courses</a></button>
                <button className="btn2"><a href="#enroll">Get Started</a></button>
            </div>
        </div>
        <div class="hero-image">
            <img src="../IMAGES/gettyimages-1171809453.webp" alt=""/>
        </div>
      
    </div>
  );
};

export default HeroSection;