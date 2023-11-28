import { Routes, Route, useLocation } from 'react-router-dom'
import { getCountriesByName } from '../src/Redux/Actions/actions'
import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'



import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import Form from './Views/Form/Form';
import Details from './Views/Details/Details';
import NavBar from './Components/NavBar/NavBar';


const App = ()=> {
   
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  
  
  const countries = useSelector((state)=> state.allCountries)
  const [searchString, setSearchString] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setSearchString(event.target.value)
  }

  const handleSubmit =(event)=>{
    event.preventDefault()
    dispatch(getCountriesByName(searchString))
  }


  return (
    <div>
      {pathname !== '/' && <NavBar handleSubmit={handleSubmit} handleChange={handleChange} /> }
         <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='home' element={<Home />} />
          <Route path='form' element={<Form/>} />
          <Route path='/details/:id' element={<Details/>} />   
         </Routes>

    </div>
  )
}

export default App 