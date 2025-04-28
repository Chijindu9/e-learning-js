import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CourseCardContainer = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 260px;
  display: flex;
  flex-direction: column;
`;

const CourseImage = styled.div`
  height: 150px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const CourseDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CourseTitle = styled.h3`
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
  color: var(--head-color);
  line-height: 1.3;
`;

const CourseInstructor = styled.p`
  font-size: 0.85rem;
  color: var(--font-secondary);
  margin-bottom: 0.5rem;
`;

const CoursePrice = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin: 0.5rem 0;
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background: var(--primary-green);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  font-size: 0.85rem;

  &:hover {
    background: var(--hover-green);
    transform: translateY(-2px);
  }
`;

const CourseCard = ({ title, instructor, price, image, category, rating, students }) => {
  return (
    <CourseCardContainer
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CourseImage>
        <img src={image} alt={title} />
      </CourseImage>
      <CourseDetails>
        {category && <span className="course-category">{category}</span>}
        <CourseTitle>{title}</CourseTitle>
        <CourseInstructor>By {instructor}</CourseInstructor>
        {rating && <span className="course-rating">⭐ {rating}</span>}
        {students && <span className="course-students">👥 {students.toLocaleString()}</span>}
        <CoursePrice>$ {price}</CoursePrice>
        <EnrollButton>Enroll Now</EnrollButton>
      </CourseDetails>
    </CourseCardContainer>
  );
};

export default CourseCard;