import React, {useState} from 'react'
import SearchBox from '../../components/SearchBox/SearchBox';

const NavBar = (props) => {
  const {searchTerm,handleInput} = props


  return (
    <div className='navBar'>
      <h2>Search</h2>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
      <h2>Filter</h2>
    </div>
  )
}

export default NavBar;


