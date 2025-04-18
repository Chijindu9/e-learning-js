// src/components/sections/Testimonials.js
import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      role: 'Software Developer',
      avatar: 'avatar1.jpg',
      quote: 'Edenites Academy transformed my career. The AWS certification course helped me land my dream job at Amazon!',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'Fashion Designer',
      avatar: 'avatar2.jpg',
      quote: 'The leather crafting courses are exceptional. I started my own business after completing just two courses!',
      rating: 5
    },
    {
      id: 3,
      name: 'David Brown',
      role: 'Data Analyst',
      avatar: 'avatar3.jpg',
      quote: 'The data science curriculum is comprehensive and practical. I applied what I learned immediately at work.',
      rating: 4
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={`/images/avatars/${testimonial.avatar}`} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;