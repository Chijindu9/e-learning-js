import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      category: 'IT Certifications',
      instructor: 'John Doe',
      rating: 4.8,
      students: 1200,
      price: 5,
      image: '../image/AWS.png',
      isTrending: true
    },
    {
      id: 2,
      title: 'React JS Masterclass',
      category: 'Web Development',
      instructor: 'Jane Smith',
      rating: 4.9,
      students: 850,
      price: 5,
      image: '../image/React pic.webp',
      isTrending: true
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      category: 'Data Science',
      instructor: 'Mike Johnson',
      rating: 4.7,
      students: 1500,
      price: 5,
      image: '../image/Data Science.webp'
    },
    {
      id: 4,
      title: 'Leather Crafting Basics',
      category: 'Creative Arts',
      instructor: 'Adeline Kaycee',
      rating: 4.9,
      students: 450,
      price: 5,
      image: '../image/Leather Crafting.png',
      isTrending: true
    },
    {
      id: 5,
      title: 'Fashion Pattern Making',
      category: 'Fashion Design',
      instructor: 'Chiamaka Onwe',
      rating: 4.8,
      students: 380,
      price: 5,
      image: '../image/Python.webp'
    },
    {
      id: 6,
      title: 'JAMB Complete Prep',
      category: 'Exam Preparation',
      instructor: 'Edenites Academy',
      rating: 4.9,
      students: 2100,
      price: 5,
      image: '../image/Jamb prep.png',
      isTrending: true
    }
  ];

  return (
    <TopCoursesSection>
      <Container>
        <SectionTitle>Top Trending Courses</SectionTitle>
        <CoursesGrid>
          {courses.map(course => (
            <CourseCard key={course.id}>
              <CourseImage>
                <img src={course.image} alt={course.title} />
                {course.isTrending && <TrendingBadge>Trending</TrendingBadge>}
              </CourseImage>
              <CourseDetails>
                <CourseCategory>{course.category}</CourseCategory>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseInstructor>By {course.instructor}</CourseInstructor>
                <CourseMeta>
                  <Rating>⭐ {course.rating}</Rating>
                  <Students>👥 {course.students.toLocaleString()}</Students>
                </CourseMeta>
                <CoursePrice>${course.price}</CoursePrice>
                <EnrollButton>Enroll Now</EnrollButton>
              </CourseDetails>
            </CourseCard>
          ))}
        </CoursesGrid>
        <ViewAllLink to="/courses">View All Courses</ViewAllLink>
      </Container>
    </TopCoursesSection>
  );
};

export default TopCourses;

// Styled Components with your preferred sizing and my enhanced elements
const TopCoursesSection = styled.section`
  padding: 1rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  color: var(--head-color);
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--primary-green);
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const CoursesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const CourseCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px var(--box-shadow);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 260px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const CourseImage = styled.div`
  height: 150px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
  }

  ${CourseCard}:hover & img {
    transform: scale(1.05);
  }
`;

const TrendingBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: var(--primary-green);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
`;

const CourseDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CourseCategory = styled.span`
  font-size: 0.75rem;
  color: var(--primary-green);
  background: rgba(17, 156, 76, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  margin-bottom: 0.5rem;
  align-self: flex-start;
`;

const CourseTitle = styled.h3`
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  color: var(--head-color);
  line-height: 1.3;
`;

const CourseInstructor = styled.p`
  font-size: 0.85rem;
  color: var(--font-secondary);
  margin-bottom: 0.5rem;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-size: 0.8rem;
  color: var(--font-secondary);
`;

const Rating = styled.span`
  color: var(--primary-orange);
  font-weight: 600;
`;

const Students = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const CoursePrice = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--primary-blue);
  margin-bottom: 0.75rem;
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background: var(--head-color);
  color: var(--font-color);
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  font-size: 0.85rem;

  &:hover {
    background: #b6dac1;
    color: var(--head-color);
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const ViewAllLink = styled(Link)`
  display: block;
  margin: 1rem auto 0;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  background: var(--head-color);
  color: var(--font-color);
  border: none;

  &:hover {
    transform: translateY(-2px);
    color: var(--primary-green);
    box-shadow: 0.3em 0.3em 0 0 var(--head-color), inset 0.3em 0.3em 0 0 var(--head-color);
    background: var(--bg-default);
  }
`;