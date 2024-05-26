import React from "react";
import Roles from "./Roles/Roles";

const ChangeRoles = () => {
  return (
    <div>
      <div>Change user roles to:</div>

      <button onClick={() => localStorage.setItem("userRole", Roles.ADMIN)}>
        Admin
      </button>
      <button onClick={() => localStorage.setItem("userRole", Roles.USER)}>
        User
      </button>
      <button onClick={() => localStorage.setItem("userRole", Roles.GUEST)}>
        Guest
      </button>
    </div>
  );
};

export default ChangeRoles;
