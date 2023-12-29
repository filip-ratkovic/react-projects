import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {

    return (
    <div className='nav-main'>
        <Link to={'/'}>Products</Link>
        <Link to={'/cart'}>Cart</Link>
    </div>
  )
}

export default Nav