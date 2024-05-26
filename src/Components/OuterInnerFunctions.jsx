const handleSubmitWithArgs = (callback) => (event) => {
  event.preventDefault();
  callback("additional data");
};

export const OuterInnerFunctions = () => {
  const handleFormSubmitWithData = (data) => {
    console.log("Form Submitted with", data);
  };

  return (
    <form onSubmit={handleSubmitWithArgs(handleFormSubmitWithData)}>
      <button type="submit">Submit</button>
    </form>
  );
};
