import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';  // If you are using preact-router for navigation

import logo from "../../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkClick = (href) => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className='logo'>
        <Link href="/"><img src={logo} alt="logo" /></Link>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" id="hamburger-icon" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link href="/" className="nav-link" onClick={linkClick}>
          <li>
            Home
          </li>
        </Link>
        <Link href="/about" className="nav-link" onClick={linkClick}>
          <li>
            About
          </li>
        </Link>
        <Link href="/pre-signup" className="nav-link" onClick={linkClick}>
          <li>
            Signup
          </li>
        </Link>
      </ul>
    </nav>
  )
};

export default Navbar;