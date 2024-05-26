const TestCallBackFunction3 = () => {
  const higherOrderFunction = (callback) => {
    console.log("Executing higher-order function");
    callback();
  };

  // Using a callback in a higher-order function
  higherOrderFunction(() => {
    console.log("Callback inside higher-order function");
  });
};

export default TestCallBackFunction3;
