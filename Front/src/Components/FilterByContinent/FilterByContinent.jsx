import  {React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { filterCountries, findActivities } from '../../Redux/Actions/actions'

const FilterByContinent = () => {

  const dispatch = useDispatch()
  const { pathname } = useLocation()
  

  const [ orderBy, setOrderBy ] = useState('')

  const allCountries = useSelector((state) => state.allCountries)
  const orderOptions = useSelector((state)=> state.allActivities)
  const final = useSelector ((state)=> state.countriesCopy)
  
  const Options = orderOptions.map( option => option.name)

  const handleFilter = (event) => {
    if (event.target.value === '') {alert("Selecciona un continente")}
    dispatch(filterCountries(event.target.value))
    
  } 

 const handleFind = (event) => {
  setOrderBy(event.target.value)
}

useEffect(()=>{
  dispatch(findActivities(orderBy))
},[orderBy])



  return (
   <div > 
          { pathname !== '/home' ? null : <form  onChange={handleFilter}>
                    <label htmlFor="filter">Continentes: </label>
                      <select name="Continents" id="Continents">
                        <option value='' >Selecciona un continente</option>
                        <option value="Todos">Todos</option>
                        <option value="Africa">Africa</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                      </select> 

                    <label htmlFor="filter">Actividad: 
                      <select value={orderBy} onChange={handleFind}>
                            <option value='ALL'>None</option>
                              {Options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                           ))}
                      </select> 
                    </label>
         
          </form>}
      </div>     
  )
}

export default FilterByContinent