// import React from 'react';
// import { Link } from 'react-router-dom'; 
// import SearchBar from './SearchBar';
// import ExploreDropdown from './ExploreDropdown';

// const HeroSection = () => {
//   return (
//     <div className="Hero-section">

//         {/* <div className="Hero-content">
            
            
//             <p> 
//                 Join thousands of students in transforming their careers with our top-notch courses. 
//             </p>
//             <div class="hero-button">
//                 <button id="up" className="btn1"><a href="#courses">Explore Courses</a></button>
//                 <button className="btn2"><a href="#enroll">Get Started</a></button>
//             </div>
//         </div> */}

//         <div className="hero-section">
//             <nav className="hero-nav">
//                 <ExploreDropdown />
//                 {/* Add other nav items seen in e-learning websites */}
//             </nav>
//             <div className="hero-content">
//                 <h1>What do you want to learn?</h1>
//                 <SearchBar />
//                 <div className="hero-cta">
//                 <p>Subscribe to build job-ready skills from world-class institutions.</p>
//                 <button className="cta-button">Start 7-day Free Trial</button>
//                 </div>
//             </div>
//         </div>
//         <div className="hero-section">
//             <div className="hero-content">
//                 <h1>Welcome to Edenites Academy</h1>
//                 <h2>Explore. | Learn. | Succeed.</h2>
//                 <p>Start exploring new possibilities for your future</p>
//                 <div className="hero-timer">
                
//                 </div>
//                 
//             </div>
//         </div>
//         {/* <div class="hero-image">
//             <img src="../IMAGES/gettyimages-1171809453.webp" alt=""/>
//         </div> */}
      
//     </div>
//   );
// };

// export default HeroSection;


// src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to Edenites Academy</h1>
          <h2>Explore. | Learn. | Succeed.</h2>
          <p>Subscribe to build job-ready skills from world-class institutions.</p>
          <div className="hero-cta">
            <Link to="/signup" className="cta-button">Start 7-day Free Trial</Link>
            <Link to="/courses" className="hero-button"> Explore Courses</Link>
          </div>
        </div>
        <div className="hero-image">
        <img src={heroImage} alt="Learning at Edenites" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
