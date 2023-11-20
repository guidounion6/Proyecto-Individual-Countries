import './App.css';
import { Routes, Route, } from 'react-router-dom'
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import Form from './Views/Form/Form';
import Details from './Views/Details/Details';
import NavBar from './Components/Navbar';



const App = ()=> {
  return (
    <div>
      <NavBar/>
         <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='home' element={<Home/>} />
          <Route path='form' element={<Form/>} />
          <Route path='details' element={<Details/>} />   
         </Routes>

    </div>
  )
}

export default App 