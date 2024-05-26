import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SpaceXLaunchesPagination = () => {
  const [launches, setLaunches] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage] = useState(12);


  useEffect(() => {
    const fetchLaunches = async () => {
        try {
          const response = await axios.get(
            `https://api.spacexdata.com/v4/launches?page=${currentPage}&limit=${perPage}`
          );
      
          // Manually slice the array to respect the perPage limit
          const startIndex = (currentPage - 1) * perPage;
          const endIndex = startIndex + perPage;
          const slicedLaunches = response.data.slice(startIndex, endIndex);
      
          setLaunches(slicedLaunches);
          // Assuming the API provides a total count or you can calculate it based on your logic
          // Set the total pages accordingly
          setTotalPages(Math.ceil(response.data.length / perPage));
        } catch (error) {
          console.error('Error fetching SpaceX launches:', error);
        }
      };
      

    fetchLaunches();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 4;
    const totalPagesInRange = Math.min(totalPages, currentPage + maxPagesToShow - 1);

    for (let i = Math.max(1, currentPage - maxPagesToShow + 1); i <= totalPagesInRange; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePageChange(i)} disabled={i === currentPage}>
          {i}
        </button>
      );
    }

    if (totalPages > totalPagesInRange) {
      pageNumbers.push(<span key="ellipsis">...</span>);
    }

    return pageNumbers;
  };

  return (
    <div>
      <h1>SpaceX Launches</h1>
      <ul>
        {launches.map((launch) => (
          <li key={launch.id}>{launch.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        {renderPageNumbers()}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default SpaceXLaunchesPagination;
