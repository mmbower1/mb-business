import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>MB Design</h4>
            <h6>PO Box 123, Sacramento, CA 95819</h6>
            <h6>
              <i className="fa fa-regular fa-envelope fa"></i> Email:
            </h6>
            <h6 className="copyright">Copyright © 2023 MB Design LLC</h6>
          </div>
          <div className="footer-col">
            <h4>Follow</h4>
            <div className="social-links">
              <Link to="#">
                <i className="fab fa-brands fa-github fa-2x"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-brands fa-linkedin fa-2x"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-brands fa-twitter fa-2x"></i>
              </Link>
              <Link to="#">
                <i className="fab fa-brands fa-youtube fa-2x"></i>
              </Link>
            </div>
          </div>
          <div className="footer-col tech">
            <h4>Tech</h4>
            <ul>
              <li>
                <Link to="#">HTML/CSS</Link>
              </li>
              <li>
                <Link to="#">Javascript</Link>
              </li>
              <li>
                <Link to="#">ReactJS</Link>
              </li>
              <li>
                <Link to="#">Express</Link>
              </li>
              <li>
                <Link to="#">Mongo</Link>
              </li>
              <li>
                <Link to="#">NodeJS</Link>
              </li>
              <li>
                <Link to="#">AWS</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link to="#">FAQ</Link>
              </li>
              <li>
                <Link to="#">Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
