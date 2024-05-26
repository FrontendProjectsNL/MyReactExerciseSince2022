// export const TestCallbackFunction = () => {
//   const handleSubmit = (callback) => (event) => {
//     event.preventDefault();
//     callback();
//   };

//   const handleButtonClick = () => {
//     console.log("Button Clicked");
//   };

//   return <button onClick={handleSubmit(handleButtonClick)}>Click Me</button>;
// };

// **************** The code above is callback test, but chatGPT improved the code according to berst practices:
// **************** Which resulted in a code WITHOUT callback!!!!!! So to see examples of callback, see code
// ********* see code above, but the code below is according to best practices (without callback):
const TestCallbackFunction = () => {
  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleButtonClick();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Click Me</button>
    </form>
  );
};

export default TestCallbackFunction;
