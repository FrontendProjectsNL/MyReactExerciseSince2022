import React, { useState } from "react";
import Calendar from "./Calendar";

function AppPureReactBookingHotelFrom1930Till2119() {
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

export default AppPureReactBookingHotelFrom1930Till2119;
