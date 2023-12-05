import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = ({id, name, flags, continents}) => {

  return (
    <div className='card-container' >
      <Link to={`/home/${id}`} className='enlace'>
      <h1 className='Nombre'>{name}</h1>
      <h2>{continents}</h2>
      <img src={flags} className='flagsImage'/>
      </Link>
      
    </div>
  )
}

export default Card