import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState(10);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            clearInterval(intervalId); // Stop the interval when countdown reaches 0
            // Perform any action or trigger an event when the countdown finishes
          }
          return prevCountdown - 1;
        });
      }, 1000); // Update countdown every 1 second
  
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
    return <div>Countdown: {countdown}</div>;
  };
  
  export default CountdownTimer;
  