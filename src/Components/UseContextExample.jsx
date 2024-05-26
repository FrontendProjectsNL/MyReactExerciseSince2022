import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const UserProfile = () => {
  const { user, logout, login } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <>
        <p>Please log in.</p>
        <button onClick={() => login({username: "Ehsan"})}>Login</button>
        </>
      )}
    </div>
  );
};

const AuthExample = () => {
  return (
    <AuthProvider>
      <UserProfile />
    </AuthProvider>
  );
};

export default AuthExample;
