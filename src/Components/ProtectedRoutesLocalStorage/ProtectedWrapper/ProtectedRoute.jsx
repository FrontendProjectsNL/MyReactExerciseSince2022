import React from "react";
import Roles from "../Roles/Roles";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate;
  console.log(
    'De localStorage.getItem("userRole") is: ',
    localStorage.getItem("userRole")
  );
  if (allowedRoles.includes(userRole)) {
    return children;
  } else {
    let message =
      userRole === Roles.USER
        ? "You're not allowed to visit Admin pages"
        : "You dont have permission to visit this section of the page.";
    return (
      <div>
        <div>{message}</div>
        <button onClick={() => navigate(-1)}>Go back please.</button>
      </div>
    );
  }
};

export default ProtectedRoute;
