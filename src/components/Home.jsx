import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './HeroSection';
import OurMission from './OurMission';
import Testimonials from './Testimonials';
import TrendingCourses from './TrendingCourses';
import WhyChooseUs from './WhyChooseUs';
import CertificationPrograms from './CertificationPrograms';
import FAQs from './FAQs';






const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <OurMission />
      <TrendingCourses />
      <Testimonials />
      <CertificationPrograms />
      <FAQs/>
    </div>
  );
};

export default Home;
