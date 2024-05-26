import React, { useRef } from 'react';

const DebouncedInput = ({ onInput }) => {
  const inputRef = useRef();
  const timeoutRef = useRef();

  const handleInput = () => {
    clearTimeout(timeoutRef.current);

    // Debounce logic: Wait for 500 milliseconds before executing onInput
    timeoutRef.current = setTimeout(() => {
      onInput(inputRef.current.value);
    }, 500);
  };

  return <input ref={inputRef} onInput={handleInput} />;
};

export default DebouncedInput;
