import Cards from '../../Components/Cards/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,  } from 'react'
import { getCountries } from '../../Redux/Actions/actions'
import { Link } from 'react-router-dom'


import './Home.css'

const Home = () => {

  const dispatch = useDispatch()
  const allCountries = useSelector((state) => state.allCountries)
  
  
  
  //trae a todos los paises en el home 
  const handleClick = () => {
    dispatch(getCountries())

  }
  
  useEffect(()=>{
    allCountries
  },[])

  return (
    <div className='Home'>
      <h2 className='Home-title'>Estas en el Home</h2>

      <button type='text' onClick={handleClick} >Traer a todos los paises</button>
      <Link to='/form' > <button> Crear actividad </button> </Link>
      <Cards allCountries={allCountries} />
    </div>
  )
}

export default Home