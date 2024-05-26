import React, { useState } from "react";
import Calendar from "./Calendar";

function PureBookingFromGrid1930Till2119() {
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

export default PureBookingFromGrid1930Till2119;
