import React, { useRef } from "react";
import ReusableCustomButtonPart1 from "./ReusableCustomButtonPart1";
 
const ReusableCustomButtonPart2 = () => {
  const buttonRef = useRef(null);
 
  const handleClick = () => {
    console.log(buttonRef.current);
  };
 
  return (
    <div>
      <ReusableCustomButtonPart1 ref={buttonRef} onClick={handleClick}>
        Click me!
      </ReusableCustomButtonPart1>
    </div>
  );
};
 
export default ReusableCustomButtonPart2
