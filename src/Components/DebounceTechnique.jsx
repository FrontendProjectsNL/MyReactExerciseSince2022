import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function DebounceTechnique() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const timeoutRef = useRef(null);

  // Debounce function
  function debounce(func, delay) {
    return function (...args) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  const debouncedSearch = debounce(async (term) => {
    try {
      const response = await axios.get(`https://demo.dataverse.org/api/search?q=${term}`);
      console.log("==============");
      console.log(response.data);
      console.log("=============")
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  }, 500); // Set the debounce delay to 500 milliseconds

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Trigger the debounced search function
    debouncedSearch(value);
  };

  useEffect(() => {
    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {Array.isArray(searchResults) &&
          searchResults.map((result) => <li key={result.id}>{result.name}</li>)}
      </ul>
    </div>
  );
}

export default DebounceTechnique;
