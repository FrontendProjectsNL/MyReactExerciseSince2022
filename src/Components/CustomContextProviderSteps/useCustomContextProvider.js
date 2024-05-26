import React, { useContext } from "react";
import { MijnContext } from "./CustomContextProvider";

const useCustomContextProvider = () => {
  const context = useContext(MijnContext);

  if (!context) throw new Error("No context available");
  return context;
};

export default useCustomContextProvider;
