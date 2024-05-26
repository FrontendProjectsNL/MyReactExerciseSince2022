// src/ChangeUserRole.js
import React from "react";
import UserRoles from "./UserRoles";

const ChangeUserRole = () => {
  const setUserRole = (role) => {
    localStorage.setItem("userRole", role);
    window.location.reload();
  };

  return (
    <div>
      Change User Role:
      <button onClick={() => setUserRole(UserRoles.ADMIN)}>Admin</button>
      <button onClick={() => setUserRole(UserRoles.USER)}>User</button>
      <button onClick={() => setUserRole(UserRoles.GUEST)}>Guest</button>
    </div>
  );
};

export default ChangeUserRole;
