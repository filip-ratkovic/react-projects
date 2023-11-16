import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Nav from './components/Nav'
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App