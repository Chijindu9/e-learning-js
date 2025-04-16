import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ExploreDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="explore-dropdown" 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="explore-button">Explore</button>
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="dropdown-content"
      >
        <div className="dropdown-content">
          <div className="dropdown-section">
            <h4>Goals</h4>
            <Link to="/goals/free-courses">Take a free course</Link>
            <Link to="/goals/degrees">Earn a Degree</Link>
            <Link to="/goals/certificates">Earn a Certificate</Link>
          </div>
          <div className="dropdown-section">
            <h4>Subjects</h4>
            <Link to="/subjects/data-science">Data Science</Link>
            <Link to="/subjects/business">Business</Link>
            <Link to="/subjects/computer-science">Computer Science</Link>
          </div>
        </div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreDropdown;
