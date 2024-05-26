import React, { createContext } from "react";

export const MijnContext = createContext();

const mijnObject = {
  name: "EhsanContext",
  job: "Programmer",
};

const MijnContextProvider2 = ({ children }) => {
  return (
    <MijnContext.Provider value={mijnObject}>{children}</MijnContext.Provider>
  );
};

export default MijnContextProvider2;
