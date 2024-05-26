import React, { useState, useEffect } from "react";

function TimeLeftTillNewYear() {
  const [countdown, setCountdown] = useState(getCountdown());
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

  useEffect(() => {
    console.log("Inside useEffect in TimeLeftTillNewYear");
    const interval = setInterval(() => {
      setCountdown(getCountdown());
      setCurrentDateTime(getCurrentDateTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getCountdown() {
    const newYear = new Date("January 1, 2025 00:00:00 GMT+00:00");
    const now = new Date();
    const difference = newYear - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function getCurrentDateTime() {
    const options = {
      hour: "numeric",
      year: "numeric",
      minute: "numeric",
      month: "long",
      second: "numeric",
      day: "numeric",
      timeZone: "Europe/Amsterdam",
      weekday: "long",
    };
    return new Date().toLocaleDateString("nl-NL", options);
  }

  return (
    <div>
      <div>
        <h1>Countdown to New Year 2025</h1>
        <p>
          {countdown.days} days {countdown.hours} hours {countdown.minutes}{" "}
          minutes {countdown.seconds} seconds
        </p>
      </div>
      <div>
        <h1>Current Date and Time in Dutch Format</h1>
        <p>{currentDateTime}</p>
      </div>
    </div>
  );
}

export default TimeLeftTillNewYear;
