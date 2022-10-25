import React from "react";
import { Link } from "react-router-dom";

import "./Work.scss";

const Work = () => {
  return (
    <>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out the projects</h2>
        <div className="projects">
          <div className="item">
            <Link to="#!">
              <img src="" alt="project1" />
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
              <img src="" alt="project2" />
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
              <img src="" alt="project3" />
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
