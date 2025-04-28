import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const JAMBContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #001f3f 0%, #2ECC40 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const TabButton = styled.button`
  padding: 0.8rem 1.5rem;
  margin: 0 0.5rem;
  border: none;
  border-radius: 50px;
  background: ${props => props.active ? '#001f3f' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#001f3f'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#001f3f' : '#d0d0d0'};
  }
`;

const TabContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SubjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const SubjectCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StartButton = styled(Link)`
  display: inline-block;
  background: #001f3f;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #2ECC40;
  }
`;

const StrategyCard = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #2ECC40;
`;

const CountdownTimer = styled.div`
  background: #001f3f;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  margin: 2rem 0;
  font-size: 1.2rem;
`;

const PracticeQuestionContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin: 2rem 0;
`;

const JAMBPage = () => {
  // Tabs state
  const [activeTab, setActiveTab] = useState('subjects');
  
  // All JAMB subjects
  const subjects = [
    { name: 'Mathematics', topics: 25, duration: '40 hours' },
    { name: 'English Language', topics: 30, duration: '45 hours' },
    { name: 'Physics', topics: 28, duration: '50 hours' },
    { name: 'Chemistry', topics: 26, duration: '48 hours' },
    { name: 'Biology', topics: 32, duration: '55 hours' },
    { name: 'Economics', topics: 22, duration: '38 hours' },
    { name: 'Civic Education', topics: 52, duration: '50 hours' },
    { name: 'Government', topics: 23, duration: '35 hours' },
    { name: 'Geography', topics: 16, duration: '34 hours' },
    { name: 'CRS/IRS', topics: 33, duration: '52 hours' },
    { name: 'Commerce', topics: 41, duration: '32 hours' },
    { name: 'Literature', topics: 18, duration: '33 hours' }
  ];

  // Practice questions data
  const practiceQuestions = [
    {
      question: "Which of the following is not a property of metals?",
      options: [
        "High melting point",
        "Malleability",
        "Low density",
        "Good conductivity"
      ],
      correctAnswer: 2,
      subject: "Chemistry"
    },
    {
      question: "What is the derivative of x³?",
      options: [
        "3x²",
        "2x³",
        "3x",
        "x²"
      ],
      correctAnswer: 0,
      subject: "Mathematics"
    },
    {
      question: "Who is the author of 'Things Fall Apart'?",
      options: [
        "Wole Soyinka",
        "Chinua Achebe",
        "Chimamanda Adichie",
        "Ben Okri"
      ],
      correctAnswer: 1,
      subject: "Literature"
    },
    {
      question: "Which organelle is called the powerhouse of the cell?",
      options: [
        "Nucleus",
        "Mitochondria",
        "Ribosome",
        "Endoplasmic reticulum"
      ],
      correctAnswer: 1,
      subject: "Biology"
    },
    {
      question: "What is the capital of Nigeria?",
      options: [
        "Lagos",
        "Abuja",
        "Kano",
        "Port Harcourt"
      ],
      correctAnswer: 1,
      subject: "Geography"
    }
  ];

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Practice question state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Initialize countdown timer (example: next JAMB exam on June 15th)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextExam = new Date(now.getFullYear(), 5, 15); // June 15th
      if (now > nextExam) {
        nextExam.setFullYear(nextExam.getFullYear() + 1);
      }
      
      const difference = nextExam - now;
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => 
      prev < practiceQuestions.length - 1 ? prev + 1 : 0
    );
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <JAMBContainer>
      <HeroSection>
        <h1>JAMB Exam Preparation</h1>
        <p>Comprehensive resources to help you ace your UTME examination</p>
      </HeroSection>

      <CountdownTimer>
        <h2>Next JAMB Exam Starts In:</h2>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
      </CountdownTimer>

      <TabContainer>
        <TabButton 
          active={activeTab === 'subjects'}
          onClick={() => setActiveTab('subjects')}
        >
          All Subjects
        </TabButton>
        <TabButton 
          active={activeTab === 'past-questions'}
          onClick={() => setActiveTab('past-questions')}
        >
          Past Questions
        </TabButton>
        <TabButton 
          active={activeTab === 'strategies'}
          onClick={() => setActiveTab('strategies')}
        >
          Exam Strategies
        </TabButton>
      </TabContainer>

      {activeTab === 'subjects' && (
        <TabContent>
          <h2>JAMB Subjects Available</h2>
          <SubjectGrid>
            {subjects.map((subject, index) => (
              <SubjectCard key={index}>
                <h3>{subject.name}</h3>
                <p>Topics: {subject.topics}</p>
                <p>Duration: {subject.duration}</p>
                <StartButton to={`/jamb/${subject.name.toLowerCase().replace('/', '-')}`}>
                  Start Learning
                </StartButton>
              </SubjectCard>
            ))}
          </SubjectGrid>
        </TabContent>
      )}

      {activeTab === 'past-questions' && (
        <TabContent>
          <h2>Practice Past Questions</h2>
          <PracticeQuestionContainer>
            <div>
              <h3>{practiceQuestions[currentQuestionIndex].question}</h3>
              <p><small>Subject: {practiceQuestions[currentQuestionIndex].subject}</small></p>
              {practiceQuestions[currentQuestionIndex].options.map((option, i) => (
                <div key={i} style={{ margin: '0.5rem 0' }}>
                  <input
                    type="radio"
                    id={`option-${i}`}
                    name="practice-question"
                    checked={selectedOption === i}
                    onChange={() => setSelectedOption(i)}
                    disabled={showAnswer}
                  />
                  <label htmlFor={`option-${i}`} style={{ marginLeft: '0.5rem' }}>
                    {option}
                    {showAnswer && i === practiceQuestions[currentQuestionIndex].correctAnswer && (
                      <span style={{ color: '#2ECC40', marginLeft: '0.5rem' }}>✓ Correct</span>
                    )}
                  </label>
                </div>
              ))}
              <div style={{ marginTop: '1rem' }}>
                <button 
                  onClick={() => setShowAnswer(true)}
                  disabled={selectedOption === null || showAnswer}
                  style={{
                    background: '#001f3f',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    marginRight: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  Check Answer
                </button>
                <button
                  onClick={handleNextQuestion}
                  style={{
                    background: '#2ECC40',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Next Question
                </button>
              </div>
            </div>
          </PracticeQuestionContainer>
        </TabContent>
      )}

      {activeTab === 'strategies' && (
        <TabContent>
          <h2>Exam Strategies</h2>
          <StrategyCard>
            <h3>Time Management Tips</h3>
            <p>Learn how to allocate your time effectively during the exam:</p>
            <ul>
              <li>Spend no more than 45 seconds per question</li>
              <li>Answer easy questions first, then return to harder ones</li>
              <li>Practice with timed mock exams to build your pace</li>
              <li>Allocate time to review your answers if possible</li>
            </ul>
          </StrategyCard>
          <StrategyCard>
            <h3>Answering Techniques</h3>
            <p>Master the art of eliminating wrong options quickly:</p>
            <ul>
              <li>Look for absolute terms like "always" or "never" - these are often wrong</li>
              <li>Eliminate clearly wrong options first</li>
              <li>Watch for similar paired options - one is likely correct</li>
              <li>Pay attention to questions with "EXCEPT" or "NOT"</li>
            </ul>
          </StrategyCard>
        </TabContent>
      )}
    </JAMBContainer>
  );
};

export default JAMBPage;