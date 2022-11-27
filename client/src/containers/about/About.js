import React from "react";
import { Link } from "react-router-dom";
import aboutImage from "../../img/portrait.jpg";

import "./About.scss";

const About = () => {
  return (
    <>
      <main id="about">
        <h1 className="lg-heading sm-heading">
          About
          {/* <span className="text-secondary">Me</span> */}
        </h1>
        {/* <h2 className="sm-heading">My life in a nutshell..</h2> */}
        <div className="about-info">
          <img src={aboutImage} alt="Matt B." className="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">BIO:</h3>
            <p>
              {" "}
              My coding journey begain in the summer of 2017 after ironically
              obtaining a degree not related to computer science. The following
              year, I graduated from the UC Davis Trilogy Education Services
              Bootcamp in 2018. I have worked three different jobs as a
              professional web developer and engineer since 2018 for a
              cryptocurrency startup, an IP networking company, as well as a
              coding instructor for Hackingtons code school based in Northern
              California. I am here for your coding and website building needs.
              Please kindly reach out!
            </p>
          </div>
          <div className="job job-1">
            <h3>Subscribe to my Youtube!</h3>
            <br />
            <span className="youtube-link">
              <h6>MB Tutorials:</h6>
              <a href="https://www.youtube.com/channel/UCnIEe_2WcwQd-mZeOyVOWzA/videos">
                <i
                  className="fab fa-brands fa-youtube fa-2x"
                  style={{ color: "red" }}
                ></i>
              </a>
            </span>
            <p></p>
          </div>
          <div className="job job-2">
            <h3>Video 1</h3>
            <h6>title</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              fugiat tempora voluptate earum totam harum placeat, soluta
              necessitatibus sint deleniti aut incidunt accusamus distinctio
              fuga similique aliquam ullam nobis quas?
            </p>
          </div>
          <div className="job job-3">
            <h3>Video 2</h3>
            <h6>title</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              fugiat tempora voluptate earum totam harum placeat, soluta
              necessitatibus sint deleniti aut incidunt accusamus distinctio
              fuga similique aliquam ullam nobis quas?
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
