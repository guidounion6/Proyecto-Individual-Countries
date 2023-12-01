import { React, useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { createActivity, getActivities } from '../../Redux/Actions/actions'
import './Form.css'

const Form = () => {

const activities = useSelector((state)=> state.allActivities) 
const dispatch = useDispatch()


const [input, setInput] = useState({
  name: "",
  dificultad:"",
  duracion: "",
  temporada: "",
  idPais: []
})

const [error, setError] = useState({
  name: "",
  dificultad:"",
  duracion: "",
  temporada: "",
  idPais: ""
})

const validate = (input)=> {

  if(!/^[A-Za-z0-9\s]+$/.test(input.name) ){
    setError({...error, name: 'Formato invalido'})
    return
  }  setError({...error, name:""})

    if (!/^[0-5]+$/.test(input.dificultad )&& Number.isInteger(input.dificultad) ){
      setError({...error, dificultad: 'Ingresa un entero entre 1 y 5'})
    } setError({...error, dificultad:""})
    
  if(!/^[0-100]+$/.test(input.duracion) && Number.isInteger(input.duracion)){
      setError({...error, duracion: 'Ingresa un entero entre 0 y 100'})
    } setError({...error, duracion: ""})

  // if( input.temporada !=='Verano' || input.temporada !=='Otoño' || input.temporada !=='Invierno' || input.temporada !=='Primavera'){
  //   setError({...error, temporada: 'Elije alguna de las 4 estaciones'})
  // } setError({...error, temporada:""})

  // if(!/^[0-9]+$/.test(input.idPais)){
  //   console.log('Error en la duracion')
  // } console.log('Haz tu dispatch')

}

const handleChange = (event)=>{
  setInput({
    ...input,
    [event.target.name]: event.target.value})
    
    validate({
      ...input,
      [event.target.name]: event.target.value
    })
}

const handleInput = (event)=>{
  dispatch(createActivity(input))
}

useEffect(()=>{
  dispatch(getActivities())
},[])

  return (
    <div>
<form >
  <div>
    <label htmlFor='name'>Nombre: </label>
    <input  type='text' name="name" id="name" value={input.value} onChange={handleChange}/>
    <span>{error.name}</span>
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
    <input name="temporada" id="temporada"  value={input.value} onChange={handleChange}/>
    <span>{error.temporada}</span>
  </div>
  <div>
    <label htmlFor='idPais'>Pais: </label>
    <input  name="idPais" id="idPais" value={input.value} onChange={handleChange}/>
    <span>{error.pais}</span>
  </div>
  {error.name  || error.dificultad || error.duracion || error.temporada || error.pais 
  ? null : <button type='submit' className='boton' onClick={handleInput} > 
           <span> Crear Actividad </span> 
           </button>}
  </form>
</div>
  )
}

export default Form