import React from "react";
import ChildComponentButton from "./ChildComponentButton";

const ParentComponentTest2 = () => {
  const handleDiv = () => {
    console.log("************ Parent Div Clicked! ***********");
  };
  return (
    <div onClick={handleDiv}>
      <ChildComponentButton />
    </div>
  );
};

export default ParentComponentTest2;
