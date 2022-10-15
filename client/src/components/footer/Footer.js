import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>'Logo'</h4>
            <ul>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Socials</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-gmail"></i>
              </a>
              <a href="#">Github</a>
              <a href="#">Linkedin</a>
              <a href="#">Twitter</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Technology</h4>
            <ul>
              <li>
                <a href="#">ReactJS</a>
              </li>
              <li>
                <a href="#">Express</a>
              </li>
              <li>
                <a href="#">Mongo</a>
              </li>
              <li>
                <a href="#">NodeJS</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
