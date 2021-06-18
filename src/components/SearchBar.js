import React, { useState } from "react";

/**
  FUNCTION COMPONENT VERSION
**/
const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  // Associate the user's input to 'state.term'
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  // Pass 'term' value to App component
  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>
            <span>YouTube</span> Video Search
          </label>
          <input
            placeholder="Search"
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;