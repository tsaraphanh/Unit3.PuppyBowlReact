import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
    onSearch(event.target.value); // Pass the search text to the parent component
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search player..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
