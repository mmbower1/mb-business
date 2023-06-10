import React from "react";
import { Link } from "react-router-dom";

import "./Work.scss";
import ecotreecarePhoto from "../../img/ecotreecare.png";
import cryptoConverter from "../../img/cryptoConverter.png";
import monarchTrackerPhoto from "../../img/monarchtracker.png";
import asteroids from "../../img/asteroids.png";
import snakeGame from "../../img/snakeGame.png";

const Work = () => {
  return (
    <>
      <main id="work">
        <h1 className="lg-heading sm-heading">
          <i className="fa-regular fab-chart-network"></i>
          My Work
          {/* <span className="text-secondary">Work</span> */}
        </h1>
        {/* <h2 className="sm-heading">MERN stack</h2> */}
        <div className="projects">
          <div className="item">
            <Link to="https://ecotreecare.org/">
              <img src={ecotreecarePhoto} alt="project1" />
            </Link>
            <Link to="#" className="btn-light">
              <i className="fas fa-eye"></i> EcoTreeCare
            </Link>
            <Link
              to="https://github.com/mmbower1/ecotreecare"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link to="https://monarchtracker.com/">
              <img src={monarchTrackerPhoto} alt="project2" />
            </Link>
            <Link to="#" className="btn-light">
              <i className="fas fa-eye"></i> MonarchTracker.com
            </Link>
            <Link
              to="https://github.com/mmbower1/react-ecommerce-traversy"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link to="https://mmbower1.github.io/monarch_crypto_converter/">
              <img src={cryptoConverter} alt="project3" />
            </Link>
            <div to="" className="btn-light">
              <i className="fas fa-eye"></i> Crypto Converter
            </div>
            <Link
              to="https://github.com/mmbower1/monarchConnector"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link to="https://mmbower1.github.io/asteroids/">
              <img src={asteroids} alt="project4" />
            </Link>
            <Link to="" className="btn-light">
              <i className="fas fa-eye"></i> Asteroids
            </Link>
            <Link
              to="https://github.com/mmbower1/asteroids"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link to="https://mmbower1.github.io/snakeGame/">
              <img src={snakeGame} alt="project5" />
            </Link>
            <Link to="" className="btn-light">
              <i className="fas fa-eye"></i> Snake Game
            </Link>
            <Link
              to="https://github.com/mmbower1/snakeGame"
              className="btn-dark"
            >
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
