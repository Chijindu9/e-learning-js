import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ title, instructor, price, /*image*/ }) => {
  return (
    <motion.div 
    className="course-card"
    whileHover={{ scale: 1.05 }}
    >
    <div className="course-image">
      {/* Placeholder for course image */}
    </div>
    <div className="course-details">
      {/* <img src={image} alt={title} /> */}
      <h3>{title}</h3>
      <p>By {instructor}</p>
      <span>₦ {price}</span>
      <button>Enroll Now</button>
    </div>
  </motion.div>
  );
};

export default CourseCard;
