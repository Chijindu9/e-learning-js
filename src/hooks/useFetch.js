
// src/hooks/useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, useMockData = false) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock data can be moved to a separate file if needed
  const mockCourses = [
    { id: 1, title: "React Basics", instructor: "GabbyTech", price: 5, image: '../image/React pic.webp' },
    { id: 2, title: "Python", instructor: "Emmanuel Chibuzor", price: 5, image: '../image/Python.webp' },
    { id: 3, title: "Machine Learning", instructor: "Strongcode", price: 5, image: '../image/AI and Machine Learning.webp' },
    { id: 4, title: "Advanced JS", instructor: "Johncode", price: 5, image: '../image/JavaScript Lang.webp'},
    { id: 5, title: "Computer Basics", instructor: "Judec", price: 5, image: '../image/basic computer.webp'},
    { id: 6, title: "Data Analysis", instructor: "Chiamaka Eze", price: 5, image: '../image/Data Science.webp'},
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (useMockData) {
          // Simulate API delay for realistic loading state
          await new Promise(resolve => setTimeout(resolve, 800));
          setData(mockCourses);
        } else {
          const response = await axios.get(url);
          setData(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, useMockData]);

  return { data, loading, error };
};
