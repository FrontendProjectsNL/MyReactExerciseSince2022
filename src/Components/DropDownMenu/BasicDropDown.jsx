import React, { useState } from "react";
import "./BasicDropDown.css";

const BasicDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleNestedDropdown = (e) => {
    const target = e.currentTarget.querySelector(".nested-dropdown-items");
    target.classList.toggle("active");
  };

  return (
    <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Dropdown
      </button>
      <div className={`dropdown-menu ${isOpen ? "active" : ""}`}>
        <ul className="dropdown-items">
          <li>Dropdown Item 1</li>
          <li>Dropdown Item 2</li>
          <li>Dropdown Item 3</li>
          <li
            className="nested-dropdown"
            onMouseEnter={toggleNestedDropdown}
            onMouseLeave={toggleNestedDropdown}
          >
            Nested Dropdown
            <ul className="nested-dropdown-items">
              <li>Nested Item 1</li>
              <li>Nested Item 2</li>
              <li>Nested Item 3</li>
            </ul>
          </li>
          <li
            className="nested-dropdown"
            onMouseEnter={toggleNestedDropdown}
            onMouseLeave={toggleNestedDropdown}
          >
            Another Nested Dropdown
            <ul className="nested-dropdown-items">
              <li>Nested Item 4</li>
              <li>Nested Item 5</li>
              <li>Nested Item 6</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BasicDropDown;
