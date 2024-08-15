import React from "react";
import react from "../../photos/react.png";
import css from "../../photos/css.png";
import javascript from "../../photos/javascript.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const cardsName = ["Widgets", "Carusels", "Dropdowns"];
  return (
    <main className="home-main-cont">
      <h1 id="home-header">Small Projects</h1>
     <div style={{display:"flex"}}>
     <section className="projects-card-container">
        <div className="card-container">
          <h1>Carousels</h1>
          <img src={react} alt="react logo" />
          <button>React</button>
          <button id="btn"
          onClick={()=> {navigate("/carusels")}}>
            <OpenInNewIcon/>
          </button>
        </div>
      </section>

      <section className="projects-card-container">
        <div className="card-container">
          <h1>Dropdowns</h1>
          <img src={javascript} alt="Javas logo" />
          <button>JS</button>
          <button id="btn"
          onClick={()=> {navigate("/carusels")}}>
            <OpenInNewIcon/>
          </button>
        </div>
      </section>
     </div>
    </main>
  );
};

export default Home;
