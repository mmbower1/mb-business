import React from "react";
import "./Homepage.scss";

// components

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="lg-heading">
        MB <span className="text-secondary">Tutorials</span>
      </h1>
      <h2 className="sm-heading">
        Web design, hosting, courses & personal tutoring
      </h2>
      <div className="icons">
        <a href="">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
