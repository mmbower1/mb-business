import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <>
      <main id="contact">
        <h1 className="lg-heading">Contact</h1>
        <h2 className="">Please reach out for scheduling.</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email:</span> mttbwr91@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone:</span> (530) 219-1250
          </div>
          <div>
            <span className="text-secondary">City: </span>
            Sacramento, CA 95819
          </div>
        </div>
        <br />
        <div className="services">
          <h2>Web design:</h2>
          <h4>
            If you need a full stack website built for your business or personal
            interests you came to the right place. Prices may vary.
          </h4>

          <br />
          <h2>Collaborations:</h2>
          <h4>
            I am always open to creating new Youtube content on my channel or
            yours. Please feel free to reach out with any ideas!
          </h4>

          <br />
          <h2>Courses: </h2>
          <h4>
            Courses are still in the works. Please refer to 'MB Tutorials' on
            Youtube for the time being.
          </h4>
          <br />
          <h2>Personal tutoring: </h2>
          <h4>
            All links to my contacts are posted above. Please reach out if you
            want to learn the MERN stack, HTML, CSS, Javascript and how to
            properly host with Apache.
          </h4>
        </div>
      </main>
    </>
  );
};

export default Contact;
