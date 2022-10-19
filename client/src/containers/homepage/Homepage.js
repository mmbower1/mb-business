import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";
// import { expressImg } from "../../img/express.png";

// components

const Homepage = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // useEffect(() => {
  //   setShowMenu(false);
  // }, []);

  return (
    <main id="homepage">
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
    </main>
  );
};

export default Homepage;
