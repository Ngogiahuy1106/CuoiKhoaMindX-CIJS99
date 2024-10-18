import React from 'react';
import './CarCard.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            className='CarCardSearch'
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={onSearchChange}
        />
    );
};

export default SearchBar;