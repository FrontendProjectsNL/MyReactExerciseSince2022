import React from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { user } = useAuth();

  if (user) {
    return <Redirect to="/home" />;
  }

  // Render login form
};
