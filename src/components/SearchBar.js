import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/courses?search=${query}`); // Redirect with search query
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="What do you want to learn?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <i className="fas fa-search"></i> {/* Font Awesome icon */}
      </button>
    </form>
  );
};

export default SearchBar;