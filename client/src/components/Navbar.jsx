import { Link } from "react-router-dom";
import LOGO from "/Logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
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
