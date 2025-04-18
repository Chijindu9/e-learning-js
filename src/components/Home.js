import React from 'react';
// import CourseCard from '../components/CourseCard';
import HeroSection from './HeroSection';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="course-grid">
        {/* <CourseCard 
          title="React for Beginners" 
          instructor="GabbyTech" 
          price="29.99" 
          image="/assets/react-course.jpg" 
        /> */}
        {/* Add more courses */}
      </div>
    </div>
  );
};

export default Home;
