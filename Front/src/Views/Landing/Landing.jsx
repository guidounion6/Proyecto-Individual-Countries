import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>Estas en la Landing Page
    <div>
      <button>
      <Link to='/home'> Ingresar al Home </Link>
      </button>
    </div>
    </div>
  )
}

export default Landing