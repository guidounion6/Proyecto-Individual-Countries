import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
  
    <div className='LandingPage' >
      <h1 className='botonLanding'>
      <button  className='botonInicio'>
      <Link to='/home'> Bienvenido a Paises </Link>
      </button>
      </h1>

    </div>
    
  )
}

export default Landing