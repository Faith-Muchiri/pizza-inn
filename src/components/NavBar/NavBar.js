import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="navbar-item active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" className="navbar-item">
            Menu
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-item">
            Services
          </Link>
        </li>
        <li>
          <Link to="/blog" className="navbar-item">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar-item">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar