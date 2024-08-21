import React from 'react'
import "./card.css"
import twitter from "../../images/twitter.png"
import puppies from "../../images/puppies.png"
const Cards = () => {
  
  return (
    <div className='cards-main'>
      <h1>CARDS</h1>
      <div className='cards-cont'>
      <a href="https://filip-ratkovic.github.io/grupa-6/forms/dog.html" target='blank'>
       <img src={twitter} alt="twitter logo" />
      </a>
      <a href="https://filip-ratkovic.github.io/grupa-6/forms/dog.html" target='blank'>

       <img src={puppies} alt="twitter logo" />
      </a>
       
      </div>
       </div>
  )
}

export default Cards