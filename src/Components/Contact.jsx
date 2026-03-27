import React, { useState } from "react";
import "./Contact.css";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xojpvbva", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully 🚀");
      e.target.reset();
    } else {
      setStatus("Failed to send ❌");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Let's Connect..</h3>
          <p>
            I'm open to freelance, internships, and full-time opportunities.
          </p>

          <p>Email: <a href="mailto:[EMAIL_ADDRESS]">ankitjgupta57@gmail.com</a></p>
          <p>Location: India</p>

          {/* 🔥 SOCIAL LINKS */}
          <div className="social-links">

            <a href="https://www.linkedin.com/in/ankitgupta01ai/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://github.com/ankitgupta-01" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            {/* <a href="ankitjgupta57@gmail.com">
              <FaEnvelope />
            </a> */}

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {/* 🔥 STATUS MESSAGE */}
          {status && <p className="status">{status}</p>}

        </form>

      </div>
    </section>
  );
};

export default Contact;