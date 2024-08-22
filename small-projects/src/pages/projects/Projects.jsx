import React from "react";
import firebaseImg from "../../images/Firebase-quotes.png";
import reduxCartImg from "../../images/redux-cart2.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="cards-main">
      <h1>CARDS</h1>
      <div className="cards-cont">
        <section className="projects-card-cont">
          <h2>Firebase quotes</h2>
          <a href="https://fr-quote.netlify.app" target="blank">
            <img src={firebaseImg} alt="Firebase site" />
          </a>
          <p className="card-tech">
            React, Mui, Firebase, i18next, Formik, Yup
          </p>
        </section>

        <section className="projects-card-cont">
          <h2>Redux cart</h2>
          <a href="https://fr-reduxcart.netlify.app" target="blank">
            <img src={reduxCartImg} alt="Redux site" />
          </a>
          <p className="card-tech">
            React, Mui, Redux
          </p>
        </section>
      </div>
    </div>
  );
};

export default Projects;
