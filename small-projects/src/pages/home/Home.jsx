import React from "react";
import react from "../../photos/react.png";
import css from "../../photos/css.png";
import javascript from "../../photos/javascript.png";

import "./home.css";

const Home = () => {
  const cardsName = ["Widgets", "Carusels", "Dropdowns"];
  return (
    <main className="home-main-cont">
      <h1 id="home-header">Small Projects</h1>
      <section className="projects-card-container">
        <div className="card-container">
          <h1>Carousels</h1>
          <img src={react} alt="react logo" />
          <button>React</button>
        </div>
      </section>
    </main>
  );
};

export default Home;
