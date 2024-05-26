/* eslint-disable react/display-name */
// AuthenticationHOC.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const WithAuthentication = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      // Check if the user is authenticated (you might want to use a token instead of just checking users)
      const token = localStorage.getItem("token");
      setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
      return navigate("/login");
    }

    return <WrappedComponent {...props} />;
  };
};

export default WithAuthentication;
