import React, { useState } from 'react';

const ControlledComponent = () => {
  // State to control the value of the input
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the state on input change
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* Controlled input component */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      {/* Display the current value */}
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default ControlledComponent;

