// src/components/sections/CertificationPrograms.js
import React from 'react';
import '../styles/CertificationPrograms.css';

const CertificationPrograms = () => {
  const categories = [
    {
      title: 'Certifications by Issuer',
      items: [
        'Amazon Web Services (AWS)',
        'Six Sigma Certifications',
        'Microsoft Certifications',
        'Cisco Certifications',
        'Tableau Certifications'
      ]
    },
    {
      title: 'Web Development',
      items: [
        'JavaScript',
        'React JS',
        'Angular',
        'Java',
        'Node.js'
      ]
    },
    {
      title: 'IT Certifications',
      items: [
        'AWS Certified Cloud Practitioner',
        'AZ-900: Microsoft Azure Fundamentals',
        'AWS Certified Solutions Architect',
        'Kubernetes',
        'CompTIA Security+'
      ]
    },
    {
      title: 'Data Science',
      items: [
        'Python',
        'Machine Learning',
        'ChatGPT',
        'Deep Learning',
        'Data Visualization'
      ]
    }
  ];

  return (
    <section className="certification-programs">
      <div className="container">
        <h2>Explore Top Skills and Certifications</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="see-all-btn">See all {category.title.split(' ')[0]}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationPrograms;