import React, { useState, useEffect } from 'react';

const AnimatedComponent = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % 500); // Move position cyclically
    }, 16); // Update position approximately every 16.67 milliseconds (60 frames per second)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        position: 'absolute',
        left: `${position}px`,
      }}
    ></div>
  );
};

export default AnimatedComponent;
