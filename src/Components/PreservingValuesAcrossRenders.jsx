import React, { useRef, useEffect } from 'react';

const PreservingValuesAcrossRenders = ({value}) => {
    const previousValueRef = useRef();

    useEffect(() => {
      // Store the previous value on each render
      previousValueRef.current = value;
    });
  
    return (
      <div>
        <p>Current Value: {value}</p>
        <p>Previous Value: {previousValueRef.current}</p>
      </div>
    );
  
}

export default PreservingValuesAcrossRenders
