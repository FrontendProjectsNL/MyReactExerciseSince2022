// src/ProtectedRoute.jsx
import React from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import UserRoles from "./UserRoles";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const currentUserRole = localStorage.getItem("userRole") || UserRoles.GUEST;

  if (allowedRoles.includes(currentUserRole)) {
    return children;
  } else {
    let warningMessage = currentUserRole === UserRoles.USER 
                        ? "You don't have permission to visit the Admin section." 
                        : "You don't have permission to visit this section of the website.";

    return (
      <div>
        <p>{warningMessage}</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }
};

export default ProtectedRoute;
