import React, { useRef } from 'react';

function StoringMutableValuesWithoutTriggeringRerenders() {
    const count = useRef(0);

  const handleIncrement = () => {
    count.current += 1;
    console.log(`Current count: ${count.current}`);
  };

  return (
    <div>
      <p>Count: {count.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );

}

export default StoringMutableValuesWithoutTriggeringRerenders
