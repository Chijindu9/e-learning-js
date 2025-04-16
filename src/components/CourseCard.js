import React from 'react';

const CourseCard = ({ title, instructor, price, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>By {instructor}</p>
      <span>${price}</span>
      <button id="enroll-course">Enroll Now</button>
    </div>
  );
};

export default CourseCard;
