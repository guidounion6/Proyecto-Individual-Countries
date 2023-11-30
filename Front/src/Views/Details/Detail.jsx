import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCountryById } from '../../Redux/Actions/actions'
import './Detail.css'



const Details = () => {

  
const { name, flags, continents, population, capital } = useSelector((state) => state.countriesCopy)


const {id} = useParams() 
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getCountryById(id))
},[dispatch])


return (
  <div className='id-container'>
    <div >
     <h1>{name}</h1>
     <h2>{continents}</h2>
     <img src={flags}/>
     <h2>Capital: {capital}</h2>
     <h2>Population: {population}</h2>
     <h2>International Id: {id}</h2>
    </div>
  </div>
)
}

export default Details