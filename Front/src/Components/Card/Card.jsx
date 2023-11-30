import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

const Card = ({id, name, flags, continents}) => {

  return (
    <div className='card-container' >
      <Link to={`/home/${id}`}>
      <h1>{name}</h1>
      <h2>{continents}</h2>
      <img src={flags}/>
      </Link>
      
    </div>
  )
}

export default Card