import React, { useRef, useEffect } from "react";

const Counter = ({ count }) => {
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, []);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Current count: {count}</p>
      <p>Previous count: {prevCount}</p>
    </div>
  );
};

export default Counter;
