import React from 'react'
import { Link } from 'react-router-dom'
import "../style/nav.css"

function Nav() {
  return (
    <div className='nav-main'>
       <Link to={"/"}>Home</Link>
       <Link to={"/cart"}>Cart <span>0</span></Link>
    </div>
  )
}

export default Nav