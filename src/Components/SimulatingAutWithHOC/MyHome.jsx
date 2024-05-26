import React from "react";

const MyHome = () => {
  const history = useHistory();

  const handleHistory = () => {
    navigate("/login");
  };
  return (
    <div>
      MyHome
      <button
        onClick={handleNavigate}
        style={{ background: "lightblue", color: "black", fontWeight: "bold" }}
      >
        Login page
      </button>
    </div>
  );
};

export default MyHome;
