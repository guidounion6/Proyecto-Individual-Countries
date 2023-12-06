import { React, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { createActivity, getActivities } from '../../Redux/Actions/actions'
import './Form.css'



const Form = () => {

const activities = useSelector((state)=> state.allActivities) 
const dispatch = useDispatch()
const Estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]

const validate = (input)=> {

  let error = {}

  if( !input.nombre || !/^[A-Za-z0-9\s]+$/.test(input.nombre))
    error.name = "Formato invalido"
   
  if( !input.dificultad || input.dificultad < 0 && input.dificultad > 5 )
     error.dificultad = "Ingresa un numero entre 1 y 5"

  if(!input.duracion || input.duracion < 0 && input.duracion > 100 )
    error.duracion = 'Ingresa un entero entre 0 y 100'

  // if( !input.temporada )
  //   error.temporada = 'Elije alguna de las 4 estaciones'

  if(!input.idPais || input.idPais.length === 0 )
    error.idPais = "Elige entre 1 y 3 paises" 

    return error
  
}


const [input, setInput] = useState({
  name: "",
  dificultad:"",
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

console.log(input)

const handleInput = (event, input)=>{
  event.preventDefault()
  console.log(input)
  dispatch(createActivity(input))
  alert("Actividad Creada")
}

useEffect(()=>{
  dispatch(getActivities())
},[dispatch])



  return (
    <div>
<form  onSubmit = {(event) => {handleInput(event, input)}}  >
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
    <label htmlFor='idPais'>Pais: </label>
    <input  name="idPais" id="idPais" value={input.value} onChange={handleChange} placeholder={error.idPais}/>
  </div>
  <div>
   {error.nombre  || error.dificultad || error.duracion || error.temporada || error.idPais 
  ? null : <button type='submit' className='boton'> 
           <span> Crear Actividad </span> 
           </button>}
  </div>         
  </form>
</div>
  )
}

export default Form