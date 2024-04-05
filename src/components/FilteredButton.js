import React from "react";

const FilteredButton = ({ onClick, children }) => {
  return (
    <button className="filtered-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default FilteredButton;
