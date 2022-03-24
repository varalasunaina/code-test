import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h3>Contact Form</h3>
      <nav className="contact-form">
        <ul className="">
          <li>
            <a href="mailto:varala.sunaina@gmail.com">Send Message</a>
          </li>
          <li>
            <a href="#">Forward to Friend</a>
          </li>
          <li>
            <a href="#">Add to Friends</a>
          </li>
          <li>
            <a href="#">Add to Favorites</a>
          </li>
          <li>
            <a href="https://github.com">Instant Message</a>
          </li>
          <li>
            <a href="#">Block User</a>
          </li>
          <li>
            <a href="#">Add to Group</a>
          </li>
          <li>
            <a href="#">Rank User</a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Contact;
