import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);
  41;
  useEffect(() => {
    const handleErrors = (error, errorInfo) => {
      setHasError(true);
      setError(error);
      setErrorInfo(errorInfo);
      // Log the error to an error reporting service
      console.error("Error occurred:", error);
    };
    window.addEventListener("error", handleErrors);
    return () => {
      window.removeEventListener("error", handleErrors);
    };
  }, []);
  if (hasError) {
    return (
      <div>
        <h1>Something went wrong</h1>
        {console.log("error object is: ", error)}

        <p>{error.message}</p>
      </div>
    );
  }

  return children;
};
export default ErrorBoundary;
