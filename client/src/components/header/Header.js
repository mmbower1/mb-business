import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div classname="menu-btn">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <div className="menu">
        <div className="menu-branding">
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item">
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              My Work
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
