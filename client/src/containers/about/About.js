import React from "react";
import aboutImage from "../../img/portrait.jpg";

import "./About.scss";

const About = () => {
  return (
    <>
      <main id="about">
        <h1 className="lg-heading sm-heading">
          About <span className="text-secondary">Me</span>
        </h1>
        {/* <h2 className="sm-heading">My life in a nutshell..</h2> */}
        <div className="about-info">
          <img src={aboutImage} alt="Matt B." className="bio-image" />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eum
              vero voluptates voluptatem porro provident eos, minima sit alias
              illum eaque iste quis veniam. Repellat sit animi harum voluptatum
              ab. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, tempora placeat, suscipit ex culpa beatae impedit
              excepturi numquam nemo molestiae magnam quos aspernatur cumque
              harum exercitationem at cupiditate temporibus perspiciatis.
            </p>
          </div>
          <div className="job job-1">
            <h3>Subscribe to my Youtube:</h3>
            <h6>MB Tutorials</h6>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              fugiat tempora voluptate earum totam harum placeat, soluta
              necessitatibus sint deleniti aut incidunt accusamus distinctio
              fuga similique aliquam ullam nobis quas? */}
            </p>
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
