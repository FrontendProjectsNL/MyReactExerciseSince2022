import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const MijnContext = createContext();

const CustomContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const goToVideos = () => {
    navigate("/videos", { replace: true });
  };
  return (
    <MijnContext.Provider value={{ goToVideos }}>
      {children}
    </MijnContext.Provider>
  );
};

export default CustomContextProvider;
