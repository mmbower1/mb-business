import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";
// import { expressImg } from "../../img/express.png";
import Aos from "aos";
import "aos/dist/aos.css";

// components

const Homepage = () => {
  // const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);

  return (
    <main id="homepage">
      <div className="overlay">
        <h1 className="lg-heading">
          MB <span className="text-secondary">Design</span>
        </h1>
        <h2 className="sm-heading">
          Web design, hosting, courses & personal tutoring needs.
        </h2>
        <div className="icons">
          <Link to="">
            <i className="fab fa-brands fa-envira fa-4x"></i>
          </Link>
          <Link to="" className="expressjs">
            {/* <img src={expressImg} alt="" /> */}
            ExpressJS
          </Link>
          <i className="fab fa-brands fa-react fa-4x"></i>
          <Link to="">
            <i className="fab fa-brands fa-node fa-4x"></i>
          </Link>
        </div>
        <div className="schedule-link">
          Get your personal website built now!
        </div>
        {/* <div className="sliders">
        <div data-aos="fade-right" className="slider"></div>
        <div data-aos="fade-left" className="slider"></div>
      </div> */}
      </div>
    </main>
  );
};

export default Homepage;
