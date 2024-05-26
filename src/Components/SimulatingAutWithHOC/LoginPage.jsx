// LoginPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const users = await response.json();

      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (!user) {
        throw new Error("Invalid credentials");
      }

      // Store token in localStorage (you might want to use a more secure method)
      localStorage.setItem("token", "your_token_here");

      navigate("/protected");
    } catch (error) {
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
