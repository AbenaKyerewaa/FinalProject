import { useState } from "react";
import { Link } from "react-router-dom";
import { Church, Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-container flex items-center ">
          <span className="live-text">
            <span className="dot"></span>
            Live Service on Sundays | 9:00 AM
          </span>
          <div className="flex gap-2">
      <a href="login" className=" church-btn small-btn">
        Login
      </a>
      <a href="signup" className="church-btn small-btn">
        Sign Up
      </a>
    </div>
          <a href="sermon" className="watch-live">Watch Live →</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="logo">
        <img src={logo} alt="church logo" className="church-icon" />          <div className="logo-text">
            <h3>MUSAMA DISCO CHRISTO CHURCH </h3>
            <p>The Army of the Cross of Christ </p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links desktop-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/ministries">Ministries</Link></li>
  <li><Link to="/events">Events</Link></li>
  <li className="dropdown">
    <Link to="/media" className="nav-link">Media ▾</Link>
    <div className="dropdown-menu">
      <Link to="/media/sermons">Sermons</Link>
    </div>
  </li>
  <li className="dropdown">
   <Link to="/resources" className="nav-link">Resources ▾ </Link>
    <div className="dropdown-menu">
      <Link to="/resources/hymnal">Hymnal</Link>
      <Link to="/resources/constitution">Constitution</Link>
    </div>
  </li>

  <li><Link to="/contact">Contact</Link></li>
</ul>
    

        <button className="church-btn desktop-btn">Find A Church</button>

        {/* Mobile Hamburger */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <ul className="nav-links mobile-links">
            <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileOpen(false)}>About</Link></li>
            <li><Link to="/ministries" onClick={() => setMobileOpen(false)}>Ministries</Link></li>
            <li><Link to="/events" onClick={() => setMobileOpen(false)}>Events</Link></li>
            <li><Link to="/media" onClick={() => setMobileOpen(false)}>Media</Link></li>
            <li><Link to="/resources" onClick={() => setMobileOpen(false)}>Resources</Link></li>
            <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          </ul>
          <button className="church-btn mobile-btn" onClick={() => setMobileOpen(false)}>Find A Church</button>
        </div>
      )}

  
    </header>
  );
}

export default Navbar;

