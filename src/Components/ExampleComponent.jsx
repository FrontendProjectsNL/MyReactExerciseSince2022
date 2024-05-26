import React, { useState, useEffect } from 'react';

//In functional components, you can achieve the persistence of local variables between 
//renders using React's built-in state management. To understand how this works, 
//let's go through the process with a simple example:

function ExampleComponent() {
  // Define a state variable 'count' and a function 'setCount' to modify it.
  const [count, setCount] = useState(0);

  // Define a local variable 'localValue' and a function 'increment' to modify it.
  let localValue = 0;
  const increment = () => {
    localValue += 1;
  };

  // Use the useEffect hook to demonstrate the difference.
  useEffect(() => {
    console.log('Render occurred.');
    console.log('Count:', count);
    console.log('Local Value:', localValue);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>Local Value: {localValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={increment}>Increment Local Value</button>
    </div>
  );
}

export default ExampleComponent;
