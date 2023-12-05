import  {React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterCountries, findActivities } from '../../../Redux/Actions/actions'

const FilterByContinent = () => {

  const dispatch = useDispatch()
  

  const [ orderBy, setOrderBy ] = useState('')
  const [ filter, setFilter ] = useState('ALL');
  const allCountries = useSelector((state) => state.allCountries)
  const orderOptions = useSelector((state)=> state.allActivities)
  const final = useSelector ((state)=> state.countriesCopy)
  const Options = orderOptions.map( option => option.name)

  const handleFilter = (event) => {
    dispatch(filterCountries(event.target.value))
    
  } 

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
 };

 const handleFind = (event) => {
  setOrderBy(event.target.value)
}

useEffect(()=>{
  dispatch(findActivities(orderBy))
},[orderBy])

  return (
   <div >
        {allCountries.length == 0 ? null : 
          <form  onChange={handleFilter}>
                   <input value="ALL" type="radio" id="ALL" name="filter" onChange={handleFilterChange} />
                   <label htmlFor="filter">Todos</label>
                   <input value="Continents" type="radio" id="Continents" name="filter" onChange={handleFilterChange}  />
                   <label htmlFor="filter">Continentes</label>
        {filter !== "Continents" ? null : <select name="Continents" id="Continents">
                        <option value="Todos">Selecciona un continente</option>
                        <option value="Africa">Africa</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                        <option value="North America">North America</option>
                        <option value="South America">South America</option>
                      </select> }

                   <input value="Activities" type="radio" id="Activities" name="filter" onChange={handleFilterChange} />
                      
                
                   <label htmlFor="filter">Actividad
        {filter !== "Activities" ? null : <select value={orderBy} onChange={handleFind}>
                            <option value=''>None</option>
                              {Options.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                           ))}
                      </select> }
                   </label>
         
          </form>}
      </div>     
  )
}

export default FilterByContinent