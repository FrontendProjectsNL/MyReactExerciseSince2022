import React, { useState, useEffect } from "react";

const ErrorBoundary2 = ({ children, fallback }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleErrors = (event) => {
      // Check if the event is a network error
      if (event && event.error && event.error instanceof Error) {
        setHasError(true);
      }
    };

    window.addEventListener("error", handleErrors);

    return () => {
      window.removeEventListener("error", handleErrors);
    };
  }, []);

  if (hasError) {
    return fallback ? fallback : <DefaultFallback />;
  }

  return children;
};

const DefaultFallback = () => (
  <div>
    <h1>Something went wrong</h1>
    <p>We're sorry, an error occurred.</p>
  </div>
);

export default ErrorBoundary2;
