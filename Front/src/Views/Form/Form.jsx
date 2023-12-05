import { React, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { createActivity, getActivities } from '../../Redux/Actions/actions'
import './Form.css'

const Form = () => {

const activities = useSelector((state)=> state.allActivities) 
const dispatch = useDispatch()


const [input, setInput] = useState({
  nombre: "",
  dificultad:"",
  duracion: "",
  temporada: "",
  idPais: []
})

const [error, setError] = useState({
  nombre: "",
  dificultad:"",
  duracion: "",
  temporada: "",
  idPais: ""
})

const validate = (input)=> {

  if(!/^[A-Za-z0-9\s]+$/.test(input.nombre)){
    setError({...error, nombre: "Formato invalido"})
    return
  } else {
    setError({...error, nombre:""})
  } 
  
  if( input.dificultad < 0 && input.dificultad > 5 ){
      setError({...error, dificultad:"Ingresa un numero entre 1 y 5"
      })
      return
    } setError({...error, dificultad:""})

  if( input.duracion < 0 && input.duracion > 100 ){
    setError({...error, duracion: 'Ingresa un entero entre 0 y 100'})
    return
  }  setError({...error, duracion:""})

  if( input.temporada != 'Verano' || input.temporada != 'Otoño' || input.temporada != 'Invierno' || input.temporada != 'Primavera'){
    setError({...error, temporada:'Elije alguna de las 4 estaciones'})
    return
  }  setError({...error, temporada:""})

  // if(!/^[0-9]+$/.test(input.idPais)){
  //   console.log('Error en la duracion')
  // } console.log('Haz tu dispatch')
  

}

const handleChange = (event)=>{
  setInput({...input, [event.target.name]: event.target.value})
  validate({...input, [event.target.name]: event.target.value})
}

const handleInput = (event)=>{
  event.preventDefault()
  dispatch(createActivity(input))
}

useEffect(()=>{
  dispatch(getActivities())
},[error])

console.log(input.nombre)
console.log(input.dificultad)
console.log(input.duracion)
console.log(input.temporada)
console.log(input.idPais)
console.log(error)
console.log(input)
  
  return (
    <div>
<form onSubmit={handleInput} >
  <div>
    <label htmlFor='name'>Nombre: </label>
    <input  type='text' name="nombre" id="nombre" value={input.value} onChange={handleChange}/>
    <span>{error.nombre}</span>
  </div>
  <div>
    <label htmlFor='dificultad'>Dificultad: </label>
    <input type='number' name="dificultad" id='dificultad' value={input.value} onChange={handleChange}/>
    <span>{error.dificultad}</span>
  </div>
  <div>
    <label htmlFor="duracion">Duracion (en horas): </label>
    <input type='number' name="duracion" id="duracion"   value={input.value} onChange={handleChange}/>
    <span>{error.duracion}</span>
  </div>
  <div>
    <label htmlFor='temporada'>Temporada: </label>
          <select name="temporada" id="temporada" onChange={handleChange} >
                   <option value="">Estaciones</option>
                   <option value="Primavera">Primavera</option>
                   <option value="Verano">Verano</option>
                   <option value="Otoño">Otoño</option>
                   <option value="Invierno">Invierno</option>
          </select><span>{error.temporada}</span>
  </div>
  <div>
    <label htmlFor='idPais'>Pais: </label>
    <input  name="idPais" id="idPais" value={input.value} onChange={handleChange}/>
    <span>{error.pais}</span>
  </div>
  <div>
  {error.nombre  || error.dificultad || error.duracion || error.temporada || error.idPais 
  ? null : <button type='submit' className='boton' > 
           <span> Crear Actividad </span> 
           </button>}
  </div>         
  </form>
</div>
  )
}

export default Form