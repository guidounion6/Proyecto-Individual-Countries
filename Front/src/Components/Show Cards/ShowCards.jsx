
import  {React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ShowCards = ({input}) => {

const allCountries = useSelector((state)=> state.allCountries)
console.log(input.idPais)


const [paises, setPaises]=useState(input.idPais)
console.log(paises)

const onClose = (name) =>{
const {id} = allCountries.find(country => country.name === name)
const paisesFiltered = paises.filter(pais => pais !==id)
console.log(paisesFiltered)
setPaises(paisesFiltered)
console.log(paises)
}

const showCountries = () => {
  return paises.map((pais, index) => {
    const country = allCountries.find(item => item.id === pais)
    return (
      <div key={index}>
        <h2 className='card-container'>{country.name}</h2>
        <button onClick={() => onClose(country.name)}>X</button>
      </div>
    )
  })
}

useEffect(()=>{
  
},[paises])

  return (
   <div>
    {showCountries()}
   </div>
  )
}

export default ShowCards

