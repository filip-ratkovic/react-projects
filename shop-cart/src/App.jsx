import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='*' element={<div>Page not found</div>} />
      <Route path='cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App