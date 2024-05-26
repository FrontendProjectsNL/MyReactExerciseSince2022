import React from "react";
import useCustomContextProvider from "./useCustomContextProvider";

const MyComponentUsingCustomContextProvider = () => {
  const { goToVideos } = useCustomContextProvider();

  const handleClick = () => {
    goToVideos();
  };
  return (
    <div>
      <button onClick={handleClick}>Go to videos</button>
    </div>
  );
};

export default MyComponentUsingCustomContextProvider;
