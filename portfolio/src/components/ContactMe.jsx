import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "animate.css";
import "../styles/ContactMe.css";

const ContactMe = () => {
  const contactMeRef = useRef(null);

  useEffect(() => {
    const contactMeSection = contactMeRef.current;
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp");
            observer.unobserve(entry.target); // Unobserve after animation triggers
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = contactMeSection.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      if (elementsToAnimate.length > 0) {
        elementsToAnimate.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_cqdm3nu", "template_2d0nk5d", e.target, "pwY3OFZ5EZuv0fEp2")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className="contact-me-container" ref={contactMeRef}>
      <div className="contact-text animate-on-scroll">
        <p>
          Whether you're looking to build from the ground up or enhance an
          existing project, I'm here to transform your ideas into polished
          digital experiences. Let’s collaborate to push the boundaries of your
          code and achieve outstanding results.
        </p>
      </div>
      <div className="contact-form animate-on-scroll">
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your name here"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email here"
            required
          />
          <textarea
            name="message"
            placeholder="Tell me about it"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Let's talk <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
