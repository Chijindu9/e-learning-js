// src/pages/Courses.js
import React from 'react';
import { useFetch } from '../hooks/useFetch';
import CourseCard from '../components/CourseCard';
import { motion } from 'framer-motion';

const Courses = () => {
  // Get courses from useFetch (true = use mock data)
  const { data: courses, loading, error } = useFetch('/api/courses', true);

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="courses-container">
      <h1>All Courses</h1>
      
      {loading ? (
        <div className="loading-spinner">Loading courses...</div>
      ) : error ? (
        <div className="error-message">
          Error loading courses: {error.message}
        </div>
      ) : courses.length === 0 ? (
        <div className="empty-state">No courses available</div>
      ) : (
        <motion.div 
          className="courses-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Courses;