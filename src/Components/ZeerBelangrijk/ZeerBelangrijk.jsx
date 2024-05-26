import React, { useState, useEffect } from "react";

const ZeerBelangrijk = () => {
  const [countdown, setCountdown] = useState(getCountdown());
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());
  const [countdownDutchTime, setCountdownDutchTime] = useState(
    getCountdownDutchTime()
  );
  const [currentTimeNY, setCurrentTimeNY] = useState("");
  const [currentTimeAMS, setCurrentTimeAMS] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown());
      setCurrentDateTime(getCurrentDateTime());
      setCountdownDutchTime(getCountdownDutchTime());
      setCurrentTimeNY(getCurrentTime("America/New_York"));
      setCurrentTimeAMS(getCurrentTime("Europe/Amsterdam"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getCurrentTime(timezone) {
    const options = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timezone,
    };
    return new Date().toLocaleTimeString("en-US", options);
  }

  function getCountdown() {
    const newYear = new Date("January 1, 2025 00:00:00 GMT+00:00");
    const now = new Date();
    const difference = newYear - now;

    //!!!!!!!!!!!!!!!! Uitleg: Explain me the 1000 in: const days = Math.floor(difference / (1000 * 60 * 60 * 24)); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //     The 1000 is used to convert milliseconds to seconds. Here's the breakdown of the expression:

    // (1000 * 60 * 60 * 24): This calculates the number of milliseconds in a day.
    // 1000 milliseconds make up 1 second.
    // 60 seconds make up 1 minute.
    // 60 minutes make up 1 hour.
    // 24 hours make up 1 day.
    // So, 1000 * 60 * 60 * 24 calculates the total number of milliseconds in a day.

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
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "Europe/Amsterdam",
    };
    return new Date().toLocaleDateString("nl-NL", options);
  }

  function getCountdownDutchTime() {
    const newYear = new Date("January 1, 2025 00:00:00 GMT+00:00");
    const now = new Date();
    const difference = newYear - now;
    const dutchTime = new Date(
      now.getTime() + now.getTimezoneOffset() * 60000 + 3600000
    ); // Adjust for Dutch time

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, seconds };
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
      <div>
        <h1>Countdown to New Year 2025 (Dutch Time and Date)</h1>
        <p>
          {countdownDutchTime.days} dagen {countdownDutchTime.hours} uren{" "}
          {countdownDutchTime.seconds} seconden
        </p>
      </div>
      <div>
        <h1>Current Time in New York</h1>
        <p>{currentTimeNY}</p>
      </div>
      <div>
        <h1>Current Time in Amsterdam</h1>
        <p>{currentTimeAMS}</p>
      </div>
    </div>
  );
};
export default ZeerBelangrijk;
