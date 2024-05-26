import React, { forwardRef } from "react";
 
const ReusableCustomButtonPart1 = forwardRef((props, ref) => {
  return (
    <button ref={ref} className="custom-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
});
 
export default ReusableCustomButtonPart1
