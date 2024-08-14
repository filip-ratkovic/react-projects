import React from 'react'

import "./home.css"

const Home = () => {
  const cardsName = ["Widgets", "Carusels", "Dropdowns"]
  return (
    <main className='home-main-cont'>
      <h1 id="home-header">Small Projects</h1>
      <section className="projects-card-container">
        {cardsName.map((card) => {
            return (
              <div className="card-container">
                  <p>
                    {card}
                  </p>
        </div>
            )
        })}
        
      </section>
    </main >
  )
}

export default Home