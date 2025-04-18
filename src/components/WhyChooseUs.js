// src/components/sections/WhyChooseUs.js
import React from 'react';
import '../styles/WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '🎓',
      title: 'Quality Education',
      description: 'Expert-led courses designed to meet global standards.'
    },
    {
      icon: '🌍',
      title: 'Accessible Learning',
      description: 'Education for all, anywhere, anytime. We believe that learning should be accessible, affordable and enjoyable.'
    },
    {
      icon: '📈',
      title: 'Career Growth',
      description: 'Practical skills that boost professional success. We\'re dedicated to making that a reality for you.'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <h2>Why Choose Edenites Academy?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;