import React, { createContext, useContext } from 'react';

const ThemeContext = createContext();
const UserContext = createContext();

const ThemedUserProfile = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div style={{ background: theme.background, color: theme.text }}>
      <p>Welcome, {user.username}!</p>
    </div>
  );
};

const ContextExample = () => {
  const theme = { background: 'lightblue', text: 'darkblue' };
   const user = { username: 'JohnDoe' };

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <ThemedUserProfile />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ContextExample;
