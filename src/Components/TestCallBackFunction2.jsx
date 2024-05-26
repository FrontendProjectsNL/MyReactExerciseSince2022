const handleSubmitWithArgs = (callback) => (event) => {
  event.preventDefault();
  // Pass an object with additional data
  callback({ additionalData: "additional data" });
};

const handleFormSubmit = (data) => {
  console.log("Form submitted with:", data.additionalData);
};

const handleSubmitWithAdditionalData = handleSubmitWithArgs(handleFormSubmit);

// Now, handleSubmitWithAdditionalData is a new function
// that can be used as an event handler
const TestCallBackFunction2 = () => {
  return (
    <form onSubmit={handleSubmitWithAdditionalData}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestCallBackFunction2;
