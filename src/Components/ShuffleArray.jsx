import React, { useState, useEffect } from 'react';

const ShuffleArray = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    generateShuffledNumbers();
  }, []);

  const generateShuffledNumbers = () => {
    // Generate an array of numbers (e.g., 1 to 10)
    const initialNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

    // Shuffle the array using Fisher-Yates algorithm
    const shuffledNumbers = shuffleArray([...initialNumbers]);

    setNumbers(shuffledNumbers);
  };

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleShuffleClick = () => {
    generateShuffledNumbers();
  };

  return (
    <div>
      <h2>Shuffled Numbers</h2>
      <button onClick={handleShuffleClick}>Shuffle</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShuffleArray;
