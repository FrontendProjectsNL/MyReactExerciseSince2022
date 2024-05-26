import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginationExample = () => {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=react&page=${currentPage}&per_page=10`
        );
        console.log("=======================");
        console.log(response.data);
        console.log("====================")

        setRepositories(response.data.items);
        setTotalPages(Math.ceil(response.data.total_count / 10));
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepositories();
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
      <h1>GitHub Repositories</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>
            {/* Make repo.full_name clickable */}
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.full_name}
            </a>
          </li>
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

export default PaginationExample;
