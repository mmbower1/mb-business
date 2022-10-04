import React, { useState, useRef, createRef } from "react";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuBtnEl = useRef(null);
  const menuEl = useRef(null);
  const menuNavEl = useRef(null);
  const menuBrandingEl = useRef(null);
  const navItemsEl = useRef(null);
  console.log(navItemsEl);

  const toggleMenu = () => {
    if (!showMenu) {
      // add classNames
      menuBtnEl.current.classList.add("close");
      menuEl.current.classList.add("show");
      menuNavEl.current.classList.add("show");
      menuBrandingEl.current.classList.add("show");
      // [navItemsEl.current.children].forEach((item) =>
      //   item.current.classList.add("show")
      // );
      // navItemsEl.map((item) => createRef(item));

      setShowMenu(true);
    } else {
      // remove classNames
      menuBtnEl.current.classList.remove("close");
      menuEl.current.classList.remove("show");
      menuNavEl.current.classList.remove("show");
      menuBrandingEl.current.classList.remove("show");
      // navItemsEl.current.map((item) => item.current.classList.remove("show"));
      // navItemsEl.map((item) => createRef(item));

      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <div className="menu-btn" ref={menuBtnEl} onClick={toggleMenu}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className="menu" ref={menuEl}>
        <div className="menu-branding" ref={menuBrandingEl}>
          <div className="portrait"></div>
        </div>
        <ul className="menu-nav" ref={menuNavEl}>
          <li className="nav-item current" ref={navItemsEl}>
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item" ref={navItemsEl}>
            <a href="" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item" ref={navItemsEl}>
            <a href="" className="nav-link">
              My Work
            </a>
          </li>
          <li className="nav-item" ref={navItemsEl}>
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
