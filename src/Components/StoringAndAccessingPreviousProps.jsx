import React, { useEffect, useRef } from 'react';

const StoringAndAccessingPreviousProps = ({data}) => {
    const previousDataRef = useRef();

  useEffect(() => {
    // Store the previous props on each render
    previousDataRef.current = data;
  });

  return (
    <div>
      <p>Current Props: {JSON.stringify(data)}</p>
      <p>Previous Props: {JSON.stringify(previousDataRef.current)}</p>
    </div>
  );

}

export default StoringAndAccessingPreviousProps
