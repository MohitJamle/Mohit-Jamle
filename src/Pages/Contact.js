import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <form
        className="contact_form"
        action="mailto:mohitjamle111@gmail.com"
        method="Post"
        encType="text/plain"
      >
        <h1>Contact Us </h1>
        <div className="inputs">
          <input
            type="text"
            id="name"
            name="UserName"
            placeholder="Name"
            required
          />
          <input
            type="email"
            id="email"
            name="UserEmail"
            placeholder="example@email.com"
            required
          />
          <input
            type="number"
            id="number"
            name="Number"
            placeholder="mobile number"
            required
          />
        </div>
        <textarea
          name="message"
          id="message"
          rows={10}
          placeholder="Type your message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
