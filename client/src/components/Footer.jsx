import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <ul className="social-icons">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100006140478304"
            target="_blank"
            className="social-icon"
          >
            <BsFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/beki_tesh"
            target="_blank"
            className="social-icon"
          >
            <BsInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/bereket-teshome-1345a0246"
            target="_blank"
            className="social-icon"
          >
            <BsLinkedin />
          </a>
        </li>
      </ul>

      <ul className="footer-menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/academics">Academics</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <hr style={{ width: "100%", opacity: "0.2" }} />
      <p>Copyright © 2024 Destiny Future Academy</p>
    </footer>
  );
};

export default Footer;
