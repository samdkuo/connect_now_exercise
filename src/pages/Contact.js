import * as React from "react";
import "../styles/contact.css";

const ipsum = "Tempus quam pellentesque nec nam aliquam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Tristique sollicitudin nibh sit amet commodo nulla facilisi.";

const Contact = () => {
  return (
    <main className="main">
      <div className="contact">
        <h2>{"get in touch".toUpperCase()}</h2>
        <p>{ipsum}</p>

        <form className="form contact-form">
        <h3>{"Contact Form"}</h3>

        <label id="name-label">Name</label>
        <input id="name-input" type="text" required/>

        <label id="email-label">Email Address</label>
        <input id="email-input" type="email" required/>

        <label id="message-label">Message</label>
        <textarea id="message-input" required rows={5} />

        <button id="contact-button" type="submit">Send</button>
      </form>
      </div>
    </main>
  )
};

export default Contact;