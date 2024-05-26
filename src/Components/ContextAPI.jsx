import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Default Value');

  const updateValue = newValue => {
    setValue(newValue);
  };

  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { value, updateValue } = useContext(MyContext);

  return (
    <div>
      <p>Value from Context: {value}</p>
      <button onClick={() => updateValue('New Value')}>Update Value</button>
    </div>
  );
};

const ContextAPI = () => {
  return (
    <>
      return (
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );

    </>
  )
}

export default ContextAPI
