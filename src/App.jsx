import React from 'react'
import Nav from './Nav'
import './global.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Gallery from './Gallery'
import Register from './Register'
import Pagenotfound from './Pagenotfound'
import {ToastContainer} from 'react-toastify'
const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Router>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
