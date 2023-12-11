import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/Searchbar'
import { sortCountries } from '../../Redux/Actions/actions'
import FilterByContinent from '../FilterByContinent/FilterByContinent'

import './NavBar.css'

const NavBar = ({handleChange, handleSubmit}) => {

  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.allCountries)
  const state = useSelector((state) => state.orderBy)
  const { pathname } = useLocation()
 

const handleSort = (event) => {
    dispatch(sortCountries(event.target.value))
} 

 
  return (
     
  <div >
        <SearchBar  handleChange={handleChange} handleSubmit={handleSubmit} className='search-box'  /> 
        <FilterByContinent/>  
      <div>
        {allCountries.length == 0 || pathname !== '/home' ? null : 
          <select name="sort" id="sort"  onChange={handleSort}>
                    <option value="">Elige una opción</option>
                    <option value="AA">Por nombre ascendente</option>
                    <option value="AD">Por nombre descendente</option>
                    <option value="PA">Por Poblacion ascendente</option>        
                    <option value="PD">Por Poblacion descendente</option>        
          </select> }
      </div>  
  </div>
    
  )
}

export default NavBar

