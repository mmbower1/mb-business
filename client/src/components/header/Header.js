import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   setShowMenu(false);
  // }, []);

  const menuBtnEl = useRef(null);
  const menuEl = useRef(null);
  const menuNavEl = useRef(null);
  const menuBrandingEl = useRef(null);
  const navItemsEl = useRef(null);
  console.log(navItemsEl);

  //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////
  const navItems1El = useRef(null);
  const navItems2El = useRef(null);
  const navItems3El = useRef(null);
  const navItems4El = useRef(null);
  //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////

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

      //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////
      navItems1El.current.classList.add("show");
      navItems2El.current.classList.add("show");
      navItems3El.current.classList.add("show");
      navItems4El.current.classList.add("show");
      //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////

      setShowMenu(true);
    } else {
      // remove classNames
      menuBtnEl.current.classList.remove("close");
      menuEl.current.classList.remove("show");
      menuNavEl.current.classList.remove("show");
      menuBrandingEl.current.classList.remove("show");
      // navItemsEl.current.map((item) => item.current.classList.remove("show"));
      // navItemsEl.map((item) => createRef(item));

      //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////
      navItems1El.current.classList.remove("show");
      navItems2El.current.classList.remove("show");
      navItems3El.current.classList.remove("show");
      navItems4El.current.classList.remove("show");
      //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////
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
          <li className="nav-item nav-item1 current" ref={navItems1El}>
            <Link to="/" className="nav-link nav-link1">
              Home
            </Link>
          </li>
          <li className="nav-item nav-item2" ref={navItems2El}>
            <Link to="/about" className="nav-link nav-link2">
              About Me
            </Link>
          </li>
          <li className="nav-item nav-item3" ref={navItems3El}>
            <Link to="/work" className="nav-link nav-link3">
              My Work
            </Link>
          </li>
          <li className="nav-item nav-item4" ref={navItems4El}>
            <Link to="/contact" className="nav-link nav-link4">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
