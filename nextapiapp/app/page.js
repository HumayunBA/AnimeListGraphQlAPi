'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; 
import SearchForm from './components/SearchForm'; 
import AnimeCard from './components/AnimeCard'; 

const Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimeout = 500; 
  const minSearchLength = 3; 

  const handleSearch = async (searchQuery) => {
    setIsLoading(true);
    try {
      if (searchQuery.length >= minSearchLength) { 
        const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${searchQuery}`);
        setSearchResults(response.data.data);
      } else {
        setSearchResults([]); 
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    const timeoutId = setTimeout(() => handleSearch(event.target.value), debounceTimeout);

    return () => clearTimeout(timeoutId); 
  };

  const Error = ({ message }) => (
    <p className="error-message">Error: {message}</p>
  );

  const LoadingIndicator = () => (
    <div className="loading-indicator">Loading...</div>
  );

  const SearchResults = ({ results }) => (
    <div className="anime-grid">
      {results.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );

  return (
    <div className="container">
      <SearchForm
        searchTerm={searchTerm}
        onSearch={handleSearch}
        updateSearchTerm={updateSearchTerm}
      />
      {error && <Error message={error.message} />}
      {isLoading && <LoadingIndicator />}
      {searchResults.length > 0 && <SearchResults results={searchResults} />}
    </div>
  );
};

export default Page


