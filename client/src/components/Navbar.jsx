import { Link } from "react-router-dom";
import LOGO from "/Logo.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Function to handle scroll event
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isHomePage ? "navbar navbar-home" : "navbar"}>
      <div>
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </header>
  );
};

export default Navbar;
