import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ExploreDropdown.css';

const ExploreDropdown = ({ mobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.explore-dropdown')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div 
      className={`explore-dropdown ${mobile ? 'mobile' : ''}`}
      onMouseEnter={!mobile ? () => setIsOpen(true) : undefined}
      onMouseLeave={!mobile ? () => setIsOpen(false) : undefined}
    >
      <button 
        className="explore-button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Explore courses dropdown"
      >
        Explore <span className="dropdown-arrow">{isOpen ? '▼' : '▶'}</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="dropdown-content"
          >
            <div className="dropdown-grid">
              <div className="dropdown-section">
                <h4>Goals</h4>
                <Link to="/goals/free-courses" onClick={() => setIsOpen(false)}>Take a free course</Link>
                <Link to="/goals/degrees" onClick={() => setIsOpen(false)}>Earn a Degree</Link>
                <Link to="/goals/certificates" onClick={() => setIsOpen(false)}>Earn a Certificate</Link>
              </div>
              <div className="dropdown-section">
                <h4>Subjects</h4>
                <Link to="/subjects/data-science" onClick={() => setIsOpen(false)}>Data Science</Link>
                <Link to="/subjects/business" onClick={() => setIsOpen(false)}>Business</Link>
                <Link to="/subjects/computer-science" onClick={() => setIsOpen(false)}>Computer Science</Link>
              </div>
              <div className="dropdown-section">
                <h4>Career Paths</h4>
                <Link to="/careers/tech" onClick={() => setIsOpen(false)}>Technology</Link>
                <Link to="/careers/business" onClick={() => setIsOpen(false)}>Business Management</Link>
                <Link to="/careers/healthcare" onClick={() => setIsOpen(false)}>Healthcare</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExploreDropdown;