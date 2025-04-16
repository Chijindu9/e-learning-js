import React from 'react';
import { useFetch } from '../hooks/useFetch'; // Custom hook for API calls
import CourseCard from '../components/CourseCard';


const Courses = () => {
  const { data: courses, loading, error } = useFetch('/api/courses');
//   const courses = [
//     { id: 1, title: "React Basics", instructor: "GabbyTech", price: 29.99 },
//     { id: 2, title: "Advanced JS", instructor: "Jane Doe", price: 39.99 }
//   ];

  return (
    <div>
      <h1>All Courses</h1>
      <div className="course-section">
        {loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error loading courses.</p>
        ) : !courses || courses.length === 0 ? (
            <p>No courses available.</p>
        ) : (
            <div className="courses-list">
            {courses.map(course => (
                <CourseCard key={course.id} {...course} />
            ))}
            </div>
        )}
      </div>
      
    </div>
  );
};

export default Courses;

