import React from "react";
import {} from "react";
import "./Homepage.scss";

// components

const Homepage = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   setShowMenu(false);
  // }, []);

  return (
    <main id="homepage">
      <h1 className="lg-heading">
        MB <span className="text-secondary">Tutorials</span>
      </h1>
      <h2 className="sm-heading">
        Web design, hosting, courses & personal tutoring
      </h2>
      <div className="icons">
        <a href="">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
        <a href="">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </main>
  );
};

export default Homepage;
