import React from "react";
import { useNavigate } from "react-router-dom";

const UseNavComp1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/comp2", {
      state: {
        dataDoorgeven: {
          prevLocation: "/comp2",
          name: "Ehsan",
          job: "programmer",
        },
      },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Naar comp2</button>
    </div>
  );
};

export default UseNavComp1;
