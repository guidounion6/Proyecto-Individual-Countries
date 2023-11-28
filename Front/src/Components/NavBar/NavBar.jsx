import React from 'react'
import SearchBar from '../SearchBar/Searchbar'
import './NavBar.css'

const NavBar = ({handelChange, handleSubmit}) => {
  return (
    <div >
        <SearchBar  onChange={handelChange} onClick={handleSubmit}  />
    </div>
  )
}

export default NavBar