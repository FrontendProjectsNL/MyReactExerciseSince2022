// src/App.js
import React, { useState } from "react";
import Calendar from "./Calendar";

// import "./App.css";

function AppPureReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <h1>Book a Hotel</h1>
      <Calendar onDateSelect={handleDateSelect} />
      {selectedDate && (
        <div>
          <h2>Selected Date:</h2>
          <p>{selectedDate.toDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default AppPureReactDatePicker;
