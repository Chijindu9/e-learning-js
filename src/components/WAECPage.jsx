// ========== WAECPrepPage.jsx ==========
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;
const Hero = styled.section`
  background: linear-gradient(135deg, #004d00 0%, #00cc66 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;
const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;
const StartButton = styled(Link)`
  display: inline-block;
  background: #004d00;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-decoration: none;
  font-weight: 600;
`;
const Countdown = styled.div`
  background: #004d00;
  color: white;
  padding: 1.5rem;
  text-align: center;
  border-radius: 8px;
  margin: 2rem 0;
`;

const WAECPrepPage = () => {
  const [subjects] = useState([
    { name: 'Mathematics', topics: 32 },
    { name: 'English Language', topics: 34 },
    { name: 'Physics', topics: 30 },
    { name: 'Chemistry', topics: 28 },
    { name: 'Biology', topics: 36 },
    { name: 'Economics', topics: 29 },
    { name: 'Government', topics: 25 },
    { name: 'Geography', topics: 22 },
    { name: 'Literature', topics: 24 }
  ]);

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(new Date().getFullYear(), 4, 1); // May 1st
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Hero>
        <h1>WAEC Exam Preparation</h1>
        <p>Comprehensive resources to ace your WAEC exams</p>
      </Hero>

      <Countdown>
        <h2>Next WAEC Exam Starts In:</h2>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</div>
      </Countdown>

      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Subjects</h2>
      <Grid>
        {subjects.map((subj, idx) => (
          <Card key={idx}>
            <h3>{subj.name}</h3>
            <p>Topics: {subj.topics}</p>
            <StartButton to={`/waec/${subj.name.toLowerCase()}`}>Start Learning</StartButton>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default WAECPrepPage;

