import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from './components/Navbar';
import OurMission from './components/OurMission';
import Testimonials from './components/Testimonials';
import TrendingCourses from './components/TrendingCourses';
import WhyChooseUs from './components/WhyChooseUs';
import CertificationPrograms from './components/CertificationPrograms';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <AppRoutes />
          <OurMission />
          <Testimonials />
          <TrendingCourses />
          <WhyChooseUs />
          <CertificationPrograms />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;