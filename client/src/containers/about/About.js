import React from "react";
import { Link } from "react-router-dom";
// photos
import aboutImage from "../../img/portrait.jpg";
import playButton from "../../img/poster.png";
import sortListMP4 from "../../img/sortList.mp4";
import mernStructureMP4 from "../../img/mernStructure.mp4";

import "./About.scss";
import "./Progress.css";

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
            <br />
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
            <video
              id="video1"
              className="screen"
              src={sortListMP4}
              poster={playButton}
            ></video>
            <div class="controls">
              <button class="btn" id="play">
                <i class="fa fa-play fa-2x"></i>
              </button>
              <button class="btn" id="stop">
                <i class="fa fa-stop fa-2x"></i>
              </button>
              <input
                type="range"
                id="progress"
                className="progress"
                min="0"
                max="100"
                step="0.1"
                value="0"
              />
              <span class="timestamp" id="timestamp">
                00:00
              </span>
            </div>
          </div>
          <div className="job job-3">
            <video
              id="video2"
              className="screen"
              src={mernStructureMP4}
              poster={playButton}
            ></video>
            <div class="controls">
              <button class="btn" id="play">
                <i class="fa fa-play fa-2x"></i>
              </button>
              <button class="btn" id="stop">
                <i class="fa fa-stop fa-2x"></i>
              </button>
              <input
                type="range"
                id="progress"
                class="progress"
                min="0"
                max="100"
                step="0.1"
                value="0"
              />
              <span class="timestamp" id="timestamp">
                00:00
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
