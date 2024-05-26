import React, { useState } from 'react';

function ConditionalRendering() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && <p>This paragraph can be dynamically shown or hidden.</p>}
      <button onClick={toggleVisibility}>Toggle Visibility</button>
    </div>
  );
}
export default ConditionalRendering;
