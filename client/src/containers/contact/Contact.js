import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Please reach out!</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span> @mttbwr91@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span> (530) 219-1250
          </div>
          <div>
            <span className="text-secondary">Address:</span> 675 53rd St,
            Sacramento, CA 95819
          </div>
        </div>
      </main>
      <footer id="main-footer">Copyright &copy; 2023</footer>
    </>
  );
};

export default Contact;
