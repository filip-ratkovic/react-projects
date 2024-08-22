import React from "react";
import "./card.css";
import twitter from "../../images/twitter.png";
import puppies from "../../images/puppies.png";
const Cards = () => {
  return (
    <div className="cards-main">
      <h1>CARDS</h1>
      <div className="cards-cont">
        <section className="projects-card-cont">
          <h2>Twitter login</h2>
          <a
            href="https://filip-ratkovic.github.io/grupa-6/forms/dog.html"
            target="blank"
          >
            <img src={twitter} alt="twitter logo" />
          </a>
          <p className="card-tech">
            HTML5, CSS3
          </p>
        </section>

        <section className="projects-card-cont">
          <h2>Sign up</h2>
          <a
            href="https://filip-ratkovic.github.io/grupa-6/forms/dog.html"
            target="blank"
          >
            <img src={puppies} alt="twitter logo" />
          </a>
          <p className="card-tech">
          HTML5, CSS3, JavaScript
          </p>
        </section>
      </div>
    </div>
  );
};

export default Cards;
