import React from 'react'
import { useState } from 'react'

const Form = () => {
const [input, setInput] = useState({
  name: "",
  dificultad:"",
  duracion: "",
  temporada: "",
  idPais: ""
})

const handleChange = (event)=>{
  setInput({
    ...input,
    [event.target.name]:event.target.value})
}
   

  return (
    <div>
<form onSubmit={""}>
  <div>
    <label>Nombre: </label>
    <input name="name"  value={input.value} onChange={handleChange}/>
  </div>
  <div>
    <label>Dificultad: </label>
    <input name="dificultad" value={input.value} onChange={handleChange}/>
  </div>
  <div>
    <label>Duracion: </label>
    <input name="duracion" value={input.value} onChange={handleChange}/>
  </div>
  <div>
    <label>Temporada: </label>
    <input name="temporada" value={input.value} onChange={handleChange}/>
  </div>
  <div>
    <label>Pais: </label>
    <input name="idPais" value={input.value} onChange={handleChange}/>
  </div>
  <button type='submit'> Crear Actividad </button>
  </form>
</div>
  )
}

export default Form