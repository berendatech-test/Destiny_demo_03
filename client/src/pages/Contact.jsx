import { useRef } from "react";
import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";
import emailjs from "emailjs-com";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kg4i1m6",
        "template_8dmgofd",
        form.current,
        "M,4Zpi-71dA7NzuDyn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <header>
        <h5>Get In Touch</h5>
        <h2>
          Contact <span className="me">Us</span>
        </h2>
      </header>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className="contact-icon" />
            <h4>GMAIL</h4>
            <h5>destinyfutureacademy@gmail.com</h5>
            <a
              href="mailto:destinyfutureacademy@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>

          <article className="contact__option ">
            <MdCall className="contact-icon" />
            <h4>Call</h4>
            <h5>+251912131415</h5>
            <a href="tel:0940917172">Ring the bell</a>
          </article>
        </div>

        <form onSubmit={sendEmail} className=" contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-input"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            <IoMdSend size={22} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
