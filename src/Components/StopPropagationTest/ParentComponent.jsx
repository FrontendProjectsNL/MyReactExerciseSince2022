const ParentComponentTest = () => {
  const handleDivClick = () => {
    console.log("Parent component clicked");
  };

  return (
    <div onClick={handleDivClick}>
      <button>Click me</button>
    </div>
  );
};

export default ParentComponentTest;
