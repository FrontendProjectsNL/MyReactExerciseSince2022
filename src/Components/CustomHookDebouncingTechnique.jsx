import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
};

// Usage
const CustomHookDebouncingTechnique = () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedInput = useDebounce(inputValue, 500);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here"
      />
      <p>Debounced Value: {debouncedInput}</p>
    </div>
  );
};

export default CustomHookDebouncingTechnique;
