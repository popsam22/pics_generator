import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const onInputChange = (e) => {
    setValue(e.target.value)
    
  }

  return (
    <div className="search-bar">
      <form onSubmit={formSubmitHandler}>
        <label>Enter your search here</label>
        <input onChange={onInputChange} autoFocus value={value}/>
      </form>
    </div>
  );
};

export default SearchBar;
