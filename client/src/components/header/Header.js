import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const openNavClick = () => setOpenNav(true);

  return (
    <header className="header">
      <div className="menu-btn" onClick={openNavClick}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className="menu">
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
      </nav>
    </header>
  );
};

export default Header;
