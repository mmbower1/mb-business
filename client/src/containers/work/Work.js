import React from "react";

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
            <a href="#!">
              <img src="" alt="project1" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </a>
            <a href="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src="" alt="project2" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </a>
            <a href="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src="" alt="project3" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </a>
            <a href="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src="" alt="project4" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </a>
            <a href="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
          <div className="item">
            <a href="#!">
              <img src="" alt="project5" />
            </a>
            <a href="" className="btn-light">
              <i className="fas fa-eye"></i> Project
            </a>
            <a href="" className="btn-dark">
              <i className="fab fa-github"></i> Github
            </a>
          </div>
        </div>
      </main>
      <footer id="main-footer">Copyright &copy; 2023</footer>
    </>
  );
};

export default Work;
