import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCountryById } from '../../Redux/Actions/actions'
import Activities from '../../Components/Activities/Activities'
import './Detail.css'



const Details = () => {

  
const { name, flags, continents, population, capital } = useSelector((state) => state.countriesCopy)


const {id} = useParams() 
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getCountryById(id))
},[dispatch])


return (
  <div >
    <div className='id-container'>
     <h1>{name}</h1>
     <h2>{continents}</h2>
     <img src={flags}/>
     <h2>Capital: {capital}</h2>
     <h2>Population: {population}</h2>
     <h2>International Id: {id}</h2>
    </div>
    <div className='id-container'>
      <Activities id={id}/>
    </div>
  </div>
)
}

export default Details