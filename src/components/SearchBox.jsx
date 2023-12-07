

import React from 'react';
import '../styles/Search.css';
const SearchBox = ({ onSearch }) => {
    return (
        <input
            type="text"
            placeholder="Search for a code snippet..."
            onChange={(e) => onSearch(e.target.value)} // e.target.value is the search term
            className="search-box"/>);};
export default SearchBox;