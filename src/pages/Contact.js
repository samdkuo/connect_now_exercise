import * as React from "react";
import "../styles/contact.css";

const ipsum =
  "Tempus quam pellentesque nec nam aliquam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Tristique sollicitudin nibh sit amet commodo nulla facilisi.";

const Contact = () => {
  return (
    <main className="contact-main">
      <div className="contact">
        <h4 id="contact-title">{"get in touch".toUpperCase()}</h4>
        <p id="contact-summary">{ipsum}</p>

        <form className="form contact-form">
          <h5>{"Contact Form"}</h5>

          <label id="name-label">
            Name <em className="blue">*</em>
          </label>
          <input id="name-input" type="text" required />

          <label id="email-label">
            Email Address <em className="blue">*</em>
          </label>
          <input id="email-input" type="email" required />

          <label id="message-label">
            Message <em className="blue">*</em>
          </label>
          <textarea id="message-input" required rows={3} />

          <button id="contact-button" type="submit">
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
