import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginationExample2 = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
        );

        setPosts(response.data);
        // Assuming the API provides a header with total items count, if not, adjust accordingly
        const totalCount = Number(response.headers['x-total-count']);
        setTotalPages(Math.ceil(totalCount / 10));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
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
      <h1>Posts from JSONPlaceholder API</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
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

export default PaginationExample2;
