import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="border rounded p-2"
        placeholder="Search Store"
      />
      <button onClick={() => onSearch(inputValue)} className=" bg-black text-white rounded p-2 font-serif flex items-center space-x-2">
      <FaSearch /> <span>Search</span>
      </button>
    </div>
  );
}

export default SearchBar;