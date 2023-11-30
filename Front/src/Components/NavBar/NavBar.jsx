import {React, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from '../SearchBar/Searchbar'
import { orderCards } from '../../Redux/Actions/actions'
import './NavBar.css'

const NavBar = ({handleChange, handleSubmit}) => {

  const dispatch = useDispatch()
  
  const [orderBy, setOrderBy] = useState('');
  const orderOptions = ['Nombre', 'Poblacion'];
  
  const allCountries = useSelector((state) => state.allCountries)

  const handleType = (event) => {
    setOrderBy(event.target.value);
 };

 const handleOrder = (event) => {
  dispatch(orderCards(event.target.value))
}
  
  return (
    <div >

      <div>
        <label htmlFor="order">
          Ordenar por:
          <select value={orderBy} onChange={handleType} name='order' id='order'>
            <option value=""> - - </option>
            {orderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        
        {allCountries.length == 0 || orderBy ==='' ? null : <select name="order" id="order" onChange={handleOrder} >
          <option value="A">Ascendente</option>
          <option value="D">Descendente </option>
        </select>}
     
      </div>
        <SearchBar  handleChange={handleChange} handleSubmit={handleSubmit}  />
      </div>
    
  )
}

export default NavBar