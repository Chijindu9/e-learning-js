import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ title, instructor, price, image }) => {
  return (
    <motion.div 
    className="course-card"
    whileHover={{ scale: 1.05 }}
    >
    <div className="course-image">
      <img src={image} alt={title} />
    </div>
    <div className="course-details">
      
      <h3>{title}</h3>
      <p>By {instructor}</p>
      <span className="course-price">$ {price}</span>
      <button className='enroll-btn'>Enroll Now</button>
    </div>
  </motion.div>
  );
};

export default CourseCard;
