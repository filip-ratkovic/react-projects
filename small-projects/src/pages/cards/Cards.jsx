import React from 'react'
import "./card.css"
import twitter from "../../images/twitter.png"
import puppies from "../../images/puppies.png"
const Cards = () => {
  
  return (
    <div className='cards-cont'>
      <a href="https://filip-ratkovic.github.io/grupa-6/forms/dog.html" target='blank'>
       <img src={twitter} alt="twitter logo" />
      </a>
       <img src={puppies} alt="twitter logo" />
       </div>
  )
}

export default Cards