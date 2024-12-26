import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar rounded-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <Link className="navbar-brand" to="/about">
          About
        </Link>
        <Link className="navbar-brand" to="/work">
          Work
        </Link>
        <Link className="navbar-brand" to="/portfolio">
          Portfolio
        </Link>
        <Link className="navbar-brand" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
