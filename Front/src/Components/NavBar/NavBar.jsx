import React from 'react'
import SearchBar from '../SearchBar/Searchbar'
import './NavBar.css'

const NavBar = ({handleChange, handleSubmit}) => {
  return (
    <div >
        <SearchBar  handleChange={handleChange} handleSubmit={handleSubmit}  />
    </div>
  )
}

export default NavBar