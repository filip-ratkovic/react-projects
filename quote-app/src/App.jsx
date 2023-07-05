import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './Pages/AllQuotes/AllQuotes'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllQuotes/>}/>
        {/* <Route to={"/signup"} element={<AllQuotes/>}/>
        <Route to={"/login"} element={<AllQuotes/>}/> */}

      </Routes>
    </div>
  )
}

export default App