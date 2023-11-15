import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  return (
    <div>
      app
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App