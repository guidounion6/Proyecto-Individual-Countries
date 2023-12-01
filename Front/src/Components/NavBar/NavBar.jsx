import { React } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../SearchBar/Searchbar'
import { orderCountries } from '../../Redux/Actions/actions'
import FilterByContinent from '../Filtros/FilterByContinent/filterByContinent'

import './NavBar.css'

const NavBar = ({handleChange, handleSubmit}) => {

  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.allCountries)
  


const handleSort = (event) => {
    dispatch(sortCountries(event))
} 

 const handleOrder = (event) => {
   dispatch(orderCountries(event.target.value))
   console.log(event.target.value)
}


  return (
     
  <div >
        <SearchBar  handleChange={handleChange} handleSubmit={handleSubmit}  /> 
        <FilterByContinent/>  
      <div>
      {allCountries.length == 0 ? null : 
          <select name="sort" id="sort"  onChange={handleSort}>
                    <option value="Alfabetico">Alfabeticamente</option>
                    <option value="Poblacion">Por Poblacion</option>        
          </select> }
      </div>  

      <div>
        {allCountries.length == 0 ? null : 
          <select name="order" id="order" onChange={handleOrder} >
                   <option value="A">Ascendente</option>
                   <option value="D">Descendente </option>
          </select> }
      </div>
        
     </div>
    
  )
}

export default NavBar