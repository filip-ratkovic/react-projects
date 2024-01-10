import React from 'react'
import Nav from "./components/nav/Nav"
import {Routes, Route} from 'react-router-dom'
import Products from './pages/products/Products'
import Cart from './pages/cart/Cart'

import './app.css'

const App = () => {

 
  return (
    <div>
      <Nav/>
      <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App