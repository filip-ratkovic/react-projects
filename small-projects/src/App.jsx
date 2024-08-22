import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

import "./app.css"
import Cards from './pages/cards/Cards'
import Projects from './pages/projects/Projects'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cards' element={<Cards/>}/>
      <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App