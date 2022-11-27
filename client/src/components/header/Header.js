import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

// styles
import "./Header.scss";

// actions
import { logout } from "../../actions/userActions";

const Header = ({ history, location }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // };

  useEffect(() => {
    const pathname = window.location.pathname.replace("/", "");
    setCurrentPage(pathname);
  }, [history]);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    console.log(logout);
  };

  const menuBtnEl = useRef(null);
  const menuEl = useRef(null);
  const menuNavEl = useRef(null);
  const menuBrandingEl = useRef(null);
  // const navItemsEl = useRef(null);

  //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////
  const navItems1El = useRef(null);
  const navItems2El = useRef(null);
  const navItems3El = useRef(null);
  const navItems4El = useRef(null);
  const navItems5El = useRef(null);
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
      navItems5El.current.classList.add("show");
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
      navItems5El.current.classList.remove("show");

      //////// REPETITIVE. NEEDS A FOR LOOP WITH USEREF() //////////
      setShowMenu(false);
      const pathname = window.location.pathname.replace("/", "");
      setCurrentPage(pathname);
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
          <li
            className={`nav-item nav-item1 ${!currentPage ? "current" : ""}`}
            ref={navItems1El}
            onClick={toggleMenu}
          >
            <Link to="/" className="nav-link nav-link1">
              Home
            </Link>
          </li>
          <li
            className={`nav-item nav-item2 ${
              currentPage === "work" ? "current" : ""
            }`}
            ref={navItems2El}
            onClick={toggleMenu}
          >
            <Link to="/work" className="nav-link nav-link3">
              Websites
            </Link>
          </li>
          <li
            className={`nav-item nav-item3 ${
              currentPage === "contact" ? "current" : ""
            }`}
            ref={navItems3El}
            onClick={toggleMenu}
          >
            <Link to="/contact" className="nav-link nav-link4">
              Contact
            </Link>
          </li>
          <li
            className={`nav-item nav-item4 ${
              currentPage === "about" ? "current" : ""
            }`}
            ref={navItems4El}
            onClick={toggleMenu}
          >
            <Link to="/about" className="nav-link nav-link4">
              About
            </Link>
          </li>
          <br />
          <li
            className={`nav-item nav-item5 ${
              currentPage === "login" ? "current" : ""
            }`}
            ref={navItems5El}
            onClick={toggleMenu}
          >
            {userInfo ? (
              <Link to="/profile" className="nav-link">
                Your Account
              </Link>
            ) : (
              <Link to="/login" className="nav-link">
                Login
              </Link>
            )}
            <br />
            {userInfo ? (
              <Link to="/" className="nav-link" onClick={logoutHandler}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout
              </Link>
            ) : (
              <div></div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
