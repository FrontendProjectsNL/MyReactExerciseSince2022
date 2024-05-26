import React from "react";

function TestRenderDays() {
  const renderDays = () => {
    let days = [
      "<div>testRenderDays 1</div>",
      "<div>testRenderDays 2</div>",
      "<div>testRenderDays 3</div>",
    ];

    return days;
  };

  return <div>{renderDays()}</div>;
}

export default TestRenderDays;
