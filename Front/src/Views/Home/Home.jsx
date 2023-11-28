import Cards from '../../Components/Cards/Cards'
import {useDispatch, useSelector} from 'react-redux'

import './Home.css'

const Home = () => {
 
  const allCountries = useSelector((state)=> state.allCountries)
 
  
  

  return (
    <div className='Home'>
      <h2 className='Home-title'>Estas en el Home</h2>
      <Cards allCountries={allCountries}/>
    </div>
  )
}

export default Home