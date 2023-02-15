import React from "react";
import "./Contact.scss";
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact" className="ContactSection">
      <div className="contact">
        {" "}
        <div className="container1">
          <h2 className="ContactTitle">Contact Us</h2>
    

          <p class="section-text">
            Contact us, we have a team on stand by to recieve and reply to your
            queries at your earliest convinience
          </p>
        </div>
        <br />
        <form className="form-floating">
          <div className="form-floating mb-3">
            <input
              name="name"
              type="text"
              className="form-control"
              id="floatingInput"
              required
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              name="email"
              type="email"
              className="form-control"
              id="floatingInput"
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              required
            />
            <label htmlFor="floatingInput">Subject</label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              name="message"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: 100 }}
            />
            <label htmlFor="floatingInput">Message</label>
          </div>

          <button type="submit" className="contactBtn">
            Send <FaTelegramPlane style={{ fontSize: "16px" }} />
          </button>
        </form>
      </div>
    </div>
  );
}
