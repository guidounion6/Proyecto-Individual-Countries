import React from 'react'
import "./Card.css"

const Card = ({id,name,flags,continents}) => {

  return (
    <div className='card-container'>
      <h1>{name}</h1>
      <h2>{continents}</h2>
      <img src={flags}/>
      
    </div>
  )
}

export default Card