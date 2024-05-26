import React, { useState, useEffect } from 'react';

const CountdownTimerTill2026 = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const newYear = new Date('January 1, 2026 00:00:00 GMT+0000');
    const difference = newYear - now;

    if (difference <= 0) {
      setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      clearInterval(interval);
    } else {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimer({ days, hours, minutes, seconds });
    }
  };

  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(calculateTimeLeft, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Countdown to New Year 2026</h1>
      <div>
        <div>{timer.days} Days</div>
        <div>{timer.hours} Hours</div>
        <div>{timer.minutes} Minutes</div>
        <div>{timer.seconds} Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimerTill2026;
