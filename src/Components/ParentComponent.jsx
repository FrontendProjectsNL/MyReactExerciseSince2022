import React, { useState } from 'react';
import DebouncedInput from './DebouncedInput';

const ParentComponent = () => {
  const handleInput = (value) => {
    console.log('Input value:', value);
    // Your custom logic with the input value
  };

  return (
    <div>
      <h2>Debounced Input Example</h2>
      <DebouncedInput onInput={handleInput} />
    </div>
  );
};

export default ParentComponent;
