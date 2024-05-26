import React, { useEffect, useState } from "react";

const Promise1 = () => {
  const [activated, setActivated] = useState(false);
  const handleClick = () => {
    setActivated(!activated);
    console.log(activated);
    return <p>You clicked on the button.</p>;
  };
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Promise1;
