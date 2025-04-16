// src/hooks/useFetch.js

import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ===== TOGGLE HERE =====
        const useMockData = true; // Set to `false` for real API calls

        if (useMockData) {
          // Mock data (for prototyping)
          const mockCourses = [
            { id: 1, title: "React Basics", instructor: "GabbyTech", price: 59.99 },
            { id: 2, title: "Python", instructor: "Emmanuel Chibuzor", price: 39.99 },
            { id: 3, title: "Machine Learning", instructor: "Strongcode", price: 89.99 },
            { id: 4, title: "Advanced JS", instructor: "Johncode", price: 49.99 },
            { id: 5, title: "Computer Basics", instructor: "Judec", price: 33.99 },
            { id: 6, title: "Data Analysis", instructor: "Chiamaka Eze", price: 34.99 }
          ];
          setData(mockCourses);
        } else {
          // Real API call (for production)
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
  }, [url]);

  return { data, loading, error };
};