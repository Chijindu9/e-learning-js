import React from 'react';
import '../styles/Careers.css';
import CareerRoles from './CareerRoles';
import CareerResources from './CareerResources';
import SuccessStories from './SuccessStories';

const Careers = () => {
  return (
    <div className="careers-container">
      <div className="careers-header">
        <h1>Explore Career Paths</h1>
        <p>Advance in your career with Edenites Academy credentials. Choose from our specialized roles.</p>
      </div>
      
      <div className="careers-content">
        <CareerRoles />
        <CareerResources />
        <SuccessStories />
      </div>
    </div>
  );
};

export default Careers;