import React, { useState, useEffect, useRef } from 'react';

const Countdown = ({ initialSeconds, onTimeout }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const timerRef = useRef(null);

  useEffect(() => {
    if (seconds > 0) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timerRef.current);
    } else {
      onTimeout(); // Invoke the provided callback when countdown reaches zero
    }
  }, [seconds, onTimeout]);

  const resetCountdown = () => {
    clearInterval(timerRef.current);
    setSeconds(initialSeconds);
  };

  return (
    <div>
      <p>Time Remaining: {seconds} seconds</p>
      <button onClick={resetCountdown}>Reset Countdown</button>
    </div>
  );
};

export default Countdown;
