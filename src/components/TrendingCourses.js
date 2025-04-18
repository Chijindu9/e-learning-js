
import React from 'react';
import '../styles/TrendingCourses.css';

const TopCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      category: 'IT Certifications',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1200,
      price: 99.99,
      image: 'aws-course.jpg'
    },
    {
      id: 2,
      title: 'React JS Masterclass',
      category: 'Web Development',
      instructor: 'Jane Smith',
      rating: 4.9,
      students: 850,
      price: 79.99,
      image: 'react-course.jpg'
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      category: 'Data Science',
      instructor: 'Mike Johnson',
      rating: 4.7,
      students: 1500,
      price: 89.99,
      image: 'data-science-course.jpg'
    },
    {
      id: 4,
      title: 'Leather Crafting Basics',
      category: 'Creative Arts',
      instructor: 'Sarah Williams',
      rating: 4.9,
      students: 450,
      price: 59.99,
      image: 'leather-course.jpg'
    }
  ];

  return (
    <section className="top-courses">
      <div className="container">
        <h2>Top Trending Courses</h2>
        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={`/images/${course.image}`} alt={course.title} />
              </div>
              <div className="course-details">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>
                <p>By {course.instructor}</p>
                <div className="course-meta">
                  <span className="rating">⭐ {course.rating}</span>
                  <span className="students">👥 {course.students.toLocaleString()}</span>
                </div>
                <div className="course-price">${course.price}</div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
        <button className="view-all-btn">View All Courses</button>
      </div>
    </section>
  );
};

export default TopCourses;