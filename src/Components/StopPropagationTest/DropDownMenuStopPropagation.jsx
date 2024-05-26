// **************************************************
// the event propagation is stopped when clicking on the dropdown menu button itself.
// In the handleToggle function, event.stopPropagation() is called, which prevents
// the click event from bubbling up to parent elements. This ensures that clicking
// on the dropdown button does not trigger the document click event listener added
// in the useEffect hook.
// So, the dropdown menu opens and closes correctly, and event propagation is stopped
// when clicking on the dropdown button.
// ***************************************************

import React, { useState, useRef, useEffect } from "react";
import "./DropDownMenuStopPropagation.css";

const DropDownMenuStopPropagation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" onClick={handleToggle}>
      <button className="dropdown-toggle">Dropdown Menu</button>
      <div
        className={`dropdown-menu ${isOpen ? "open" : ""}`}
        ref={dropdownRef}
      >
        {/* Dropdown content */}
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenuStopPropagation;
