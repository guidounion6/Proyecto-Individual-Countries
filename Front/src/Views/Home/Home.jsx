import Cards from '../../Components/Cards/Cards'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../Redux/Actions/actions'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {
  
  const dispatch = useDispatch()
  const allCountries = useSelector((state)=> state.allCountries)

  const handleButtonClick = () => {
    dispatch(getCountries())
  }
 
  return (
    <div className='Home'>
      <h2 className='Home-title'>Estas en el Home</h2>
      <button type='text' onClick={handleButtonClick} >Traer a todos los paises</button>
      <Link to='/form' > <button> Crear actividad </button> </Link>
      <Cards allCountries={allCountries}/>
    </div>
  )
}

export default Home