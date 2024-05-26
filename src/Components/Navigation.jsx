import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav>
      <NavLink to="/" exact="true" className="active-link">
        Home
      </NavLink>
      <br />
      <NavLink to="/about" className="active-link">
        About
      </NavLink>
    </nav>
  );
};

export default Navigation;
