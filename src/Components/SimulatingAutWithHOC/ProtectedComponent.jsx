// ProtectedComponent.js
import React, { useState, useEffect } from "react";

const ProtectedComponent = () => {
  const [protectedContent, setProtectedContent] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Redirect to login if not authenticated
      navigate("/login");
    }

    // Fetch protected content from the fake API server
    fetch("http://localhost:3001/protectedResource")
      .then((response) => response.json())
      .then((resource) => {
        setProtectedContent(resource.content);
      })
      .catch((error) => {
        console.error("Error fetching protected content:", error);
      });
  }, []);

  return (
    <div>
      <h2>Protected Component</h2>
      <p>{protectedContent}</p>
    </div>
  );
};

export default ProtectedComponent;
