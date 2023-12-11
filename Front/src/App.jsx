import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { getCountriesByName } from '../src/Redux/Actions/actions'
import { useState } from 'react'
import { useDispatch } from 'react-redux'



import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import Form from './Views/Form/Form';
import Detail from './Views/Details/Detail';
import NavBar from './Components/NavBar/NavBar';


const App = ()=> {
   
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  
  const [searchString, setSearchString] = useState("")

  const handleChange = (event) => {
    event.preventDefault()
    setSearchString(event.target.value)
  }

  const handleSubmit =(event)=>{
    event.preventDefault()
    if (pathname !== 'home'){
    dispatch(getCountriesByName(searchString))
    navigate('/home')
  }
  }


  return (
    <div>
      {pathname !== '/' &&  <NavBar handleSubmit={handleSubmit} handleChange={handleChange}  />  }
         <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='home' element={<Home />} />
          <Route path='form' element={<Form/>} />
          <Route path='/home/:id' element={<Detail/>} />   
         </Routes>

    </div>
  )
}

export default App 