import React from 'react';

const SearchForm = ({ searchTerm, onSearch, updateSearchTerm }) => (
  <form onSubmit={(event) => { 
    event.preventDefault();
    onSearch(event.target.value);
  }} className="search-form">
    <input
      type="text"
      value={searchTerm}
      onChange={updateSearchTerm}
      placeholder="Search for anime..."
      className="search-input"
    />
    <button type="button" onClick={() => onSearch(searchTerm)} className="search-button">
      Search
    </button>
  </form>
);

export default SearchForm;