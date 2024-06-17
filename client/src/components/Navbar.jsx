import { Link } from "react-router-dom";
import LOGO from "/Logo.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header className={isHomePage ? "navbar navbar-home" : "navbar"}>
      <div>
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <nav>
        <div className="nav-links">
          <ul style={toggle ? { left: "-100%" } : { left: "0" }}>
            <li onClick={!toggle}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={!toggle}>
              <Link to="/about">About</Link>
            </li>
            <li onClick={!toggle}>
              <Link to="/academics">Academics</Link>
            </li>
            <li onClick={!toggle}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li onClick={!toggle}>
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={!toggle}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="check_btn_container">
            <input type="checkbox" id="check" name="check" />
            <label
              htmlFor="check"
              className="navbar_checkBtn"
              onMouseEnter={handleToggle}
            >
              {toggle ? <MdMenu /> : <MdClose />}
            </label>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
