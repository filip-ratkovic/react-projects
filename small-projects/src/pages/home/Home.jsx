import React from "react";
import react from "../../photos/react.png";
import css from "../../photos/css.png";
import javascript from "../../photos/javascript.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import homeData from "../../data/homeData";


import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()


  return (
    <main className="home-main-cont">
      <h1 id="home-header">Small Projects</h1>
     <div style={{display:"flex"}}>

        {homeData.map((data, index) => {
          return (
            <section className="projects-card-container" key={index}>
        <div className="card-container">
          <h1>{data.name}</h1>
          <div className="home-image-cont">
          <h2>{data.language}</h2>
          <img src={data.image} alt="react logo" />
          </div>
          <button 
          onClick={()=> {navigate(data.link)}}>
            <OpenInNewIcon/>
          </button>
        </div>
      </section>
          )
        })}
     </div>
    </main>
  );
};

export default Home;
