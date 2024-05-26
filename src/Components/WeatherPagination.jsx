import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherPagination = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchWeatherData = async () => {
        try {
          const apiKey = '4590446bc38713db59bedf555ba23864'; // Replace with your actual API key
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=city&page=${currentPage}&cnt=10&appid=${apiKey}`
          );
      
          setWeatherData(response.data.list);
          // Assuming the API provides a total count or you can calculate it based on your logic
          // Set the total pages accordingly
          setTotalPages(10); // Adjust as needed
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      
    fetchWeatherData();
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
      <h1>Weather Data for Cities</h1>
      <ul>
        {weatherData.map((city) => (
          <li key={city.id}>{city.name}</li>
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

export default WeatherPagination;
