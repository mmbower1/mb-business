import React, { useRef } from "react";
import { Link } from "react-router-dom";
// photos
import aboutImage from "../../img/portrait.jpg";
import playButton from "../../img/poster.png";
import sortListMP4 from "../../img/sortList.mp4";
import mernStructureMP4 from "../../img/mernStructure.mp4";

import "./About.scss";
import "./Progress.css";

// utils
// import {
//   toggleVideoStatus,
//   updatePlayIcon,
//   updateProgress,
//   setVideoProgress,
//   stopVideo,
// } from "./utils.js";

const About = () => {
  const videoEl = useRef(null);
  const playEl = useRef(null);
  const stopEl = useRef(null);
  const progressEl = useRef(null);
  const timestampEl = useRef(null);

  // function toggleVideoStatus() {
  //   if (videoEl.paused) {
  //     videoEl.play();
  //   } else {
  //     videoEl.pause();
  //   }
  // }

  // // // update play/pause icons
  // function updatePlayIcon() {
  //   if (videoEl.paused) {
  //     playEl.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  //   } else {
  //     playEl.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  //   }
  // }

  // // // update progress and timestamp
  // function updateProgress() {
  //   progressEl.value = (videoEl.currentTime / videoEl.duration) * 100;
  //   // get minutes
  //   let mins = Math.floor(videoEl.currentTime / 60);
  //   if (mins < 10) {
  //     mins = "0" + String(mins);
  //   }
  //   // get seconds
  //   let secs = Math.floor(videoEl.currentTime % 60);
  //   if (secs < 10) {
  //     secs = "0" + String(secs);
  //   }
  //   timestampEl.innerHTML = `${mins}:${secs}`;
  // }

  // // set video time to progress
  // function setVideoProgress() {
  //   videoEl.currentTime = (+progressEl.value * videoEl.duration) / 100;
  // }

  // function stopVideo() {
  //   videoEl.currentTime = 0;
  //   videoEl.pause();
  // }

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
              useRef={videoEl}
              // onClick={toggleVideoStatus}
            ></video>
            <div class="controls">
              <button
                class="btn"
                id="play"
                useRef={playEl}
                // onClick={updatePlayIcon}
              >
                <i class="fa fa-play fa-2x"></i>
              </button>
              <button class="btn" id="stop" useRef={stopEl}>
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
                useRef={progressEl}
                // onClick={updateProgress}
              />
              <span class="timestamp" id="timestamp" useRef={timestampEl}>
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
              useRef={videoEl}
              // onClick={toggleVideoStatus}
            ></video>
            <div class="controls">
              <button
                class="btn"
                id="play"
                useRef={playEl}
                // onClick={updatePlayIcon}
              >
                <i class="fa fa-play fa-2x"></i>
              </button>
              <button class="btn" id="stop" useRef={stopEl}>
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
                useRef={progressEl}
                // onClick={updateProgress}
              />
              <span class="timestamp" id="timestamp" useRef={timestampEl}>
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
