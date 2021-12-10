import React from 'react';
import "./SearchBox.scss";

export const SearchBox = (props) => {
  const{searchTerm, handleInput} = props;
  return (
    <form className="search-box">
      <input type="text" value={searchTerm} onInput={handleInput} placeholder='Search by Name' className="search-box__input"/>
    </form>
  )
}

export default SearchBox;
