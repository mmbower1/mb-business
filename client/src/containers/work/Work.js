import React from "react";
import { Link } from "react-router-dom";

import "./Work.scss";
import ecotreecarePhoto from "../../img/ecotreecare.png";
import monarchTrackerPhoto from "../../img/monarchtracker.png";

const Work = () => {
  return (
    <>
      <main id="work">
        <h1 className="lg-heading">
          My Work
          {/* <span className="text-secondary">Work</span> */}
        </h1>
        {/* <h2 className="sm-heading">MERN stack</h2> */}
        <div className="projects">
          <div className="item">
            <Link to="#!">
              <img src={ecotreecarePhoto} alt="project1" />
            </Link>
            <Link to="https://ecotreecare.org/" className="btn-light">
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
            <Link to="#!">
              <img src={monarchTrackerPhoto} alt="project2" />
            </Link>
            <Link to="https://monarchtracker.com/" className="btn-light">
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
            <Link to="#!">
              <img src="" alt="project3" />
            </Link>
            <Link to="" className="btn-light">
              <i className="fas fa-eye"></i> Crypto Converter
            </Link>
            <Link to="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link to="#!">
              <img src="" alt="project4" />
            </Link>
            <Link to="" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </Link>
            <Link to="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
          <div className="item">
            <Link to="#!">
              <img src="" alt="project5" />
            </Link>
            <Link to="" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </Link>
            <Link to="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
