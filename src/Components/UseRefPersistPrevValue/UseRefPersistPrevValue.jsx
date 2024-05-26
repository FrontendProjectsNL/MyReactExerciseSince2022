import { useState } from "react";
import Counter from "./Counter";

const UseRefPersistPrevValue = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={increment}>Increment</button>
      <Counter count={count} />
    </div>
  );
};

export default UseRefPersistPrevValue;
