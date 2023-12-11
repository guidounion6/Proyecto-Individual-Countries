import { useState } from 'react'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { createActivity, getActivities, getCountries } from '../../Redux/Actions/actions'

import './Form.css'


const Form = () => {

const dispatch = useDispatch()

const countries = useSelector((state)=> state.allCountries)
const activities = useSelector((state)=> state.allActivities) 




const validate = (input)=> {

  let error = {}

  if( !input.name || !/^[A-Za-z0-9\s]+$/.test(input.name))
    error.name = "Formato invalido"
   
  if( !input.dificultad || input.dificultad < 0 && input.dificultad > 5 )
     error.dificultad = "Ingresa un numero entre 1 y 5"

  if (!input.duracion ) error.duracion = 'Ingresa un entero entre 1 y 100'
  if (input.duracion < 0 && input.duracion > 100 ) 
  error.duracion = 'El numero debe estar comprendido entre 1 y 100'

  if( !input.temporada )
    error.temporada = 'Elije alguna de las 4 estaciones'

  if(!input.idPais || input.idPais.length === 0 )
    error.idPais = "Elige entre 1 y 3 paises" 

    return error
  
}


const [input, setInput] = useState({
  name: "",
  dificultad: "",
  duracion: "",
  temporada: "",
  idPais: []
})

const [error, setError] = useState({
  name: "Ingresa un nombre",
  dificultad:"Ingresa una dificultad",
  duracion: "Ingresa una duracion",
  temporada: "Ingresa una estacion del año",
  idPais: "Elige entre 1 y 3 paises"
})

const handleChange = (event)=>{
  setInput({...input, [event.target.name]: event.target.value})
  setError(validate({...input, [event.target.name]: event.target.value}))
}

const handleCountries = (event)=>{
  input.idPais.forEach((country, index)=>{
    if (country === event.target.value) throw alert ("Pais ya elegido")
  }) 
  if ( input.idPais.length < 3 )
  {setInput({...input, idPais: [...input.idPais, event.target.value]})
  setError(validate({...input, [event.target.name]: event.target.value}))
} else 
{throw alert ("Ya has elegido 3 paises")}
}

const handleInput = (event, input)=>{
  event.preventDefault()
  dispatch(createActivity(input))
  alert("Actividad Creada")
}


const onClose = (name) =>{
  let paises = input.idPais
  const {id} = countries.find(country => country.name === name)
  const paisesFiltered = paises.filter(pais => pais !==id)
  setInput({...input, idPais: paisesFiltered})
 
  }
  
const showCountries = () => {
    return input.idPais.map((pais, index) => {
      const country = countries.find(item => item.id === pais)
      return (
        <div key={index}>
          <h2 className='card-container'>{country.name}</h2>
          <button onClick={() => onClose(country.name)}>X</button>
        </div>
      )
    })
  }

useEffect(()=>{
  dispatch(getActivities())
  dispatch(getCountries())
},[dispatch])


  return (
    <div>
<form onSubmit = {(event) => {handleInput(event, input)}} >
  <div>
    <label htmlFor='name'>Nombre: </label>
    <input  type='text' name="name" id="name" value={input.value} onChange={handleChange} placeholder={error.name}/>
  </div>
  <div>
    <label htmlFor='dificultad'>Dificultad: </label>
    <input type='number' name="dificultad" id='dificultad' value={input.value} onChange={handleChange} placeholder={error.dificultad}/>
  </div>
  <div>
    <label htmlFor="duracion">Duracion (en horas): </label>
    <input type='number' name="duracion" id="duracion"   value={input.value} onChange={handleChange} placeholder={error.duracion}/>
  </div>
  <div>
    <label htmlFor='temporada'>Temporada: </label>
          <select name="temporada" id="temporada" value={input.value} onChange={handleChange}  placeholder={error.temporada}>
                   <option value="">Estaciones</option>
                   <option value="Primavera">Primavera</option>
                   <option value="Verano">Verano</option>
                   <option value="Otoño">Otoño</option>
                   <option value="Invierno">Invierno</option>        
          </select>
  </div>
  <div>
    <label htmlFor='idPais'>Pais:
      <select name='idPais' id='idPais' value={input.value} onChange={handleCountries}>
            <option value=''>Elige de 1 a 3 paises</option>
              {countries.map((countries) => (
            <option key={countries.id} value={countries.id}>
              {countries.name}
            </option>
           ))}
      </select>    
    </label>
   
  </div>
  <div>
   <button type='submit' className='boton' disabled={ error.name  || error.dificultad || error.duracion || error.temporada || error.idPais }> 
           <span> Crear Actividad </span> 
           </button>    
  </div>         
  </form>
  {showCountries()}
</div>
  )
}

export default Form





