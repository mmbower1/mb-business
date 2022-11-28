import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <main id="contact">
        <h1 className="lg-heading">Contact</h1>
        <h2 className="sm-heading">Please reach out for scheduling.</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span> @mttbwr91@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span> (530) 219-1250
          </div>
          <div>
            <span className="text-secondary">City:</span>
            Sacramento, CA 95819
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
