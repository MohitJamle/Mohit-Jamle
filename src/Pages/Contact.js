import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(event.target);

    emailjs
      .sendForm(
        "service_8fitjgj",
        "template_exqjahr",
        event.target,
        "l3IE4446-Zjbr8VyL"
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <div className="contact">
      <form className="contact_form" onSubmit={submitHandler}>
        <h1>Contact Us </h1>
        <div className="inputs">
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            id="number"
            name="user_number"
            placeholder="mobile number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>
        <textarea
          name="user_message"
          id="message"
          rows={10}
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
