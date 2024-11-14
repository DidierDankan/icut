import { h } from 'preact';
import { Link } from 'preact-router/match';  // If you are using preact-router for navigation

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link href="/" className="nav-link">Home</Link>
      </li>
      <li>
        <Link href="/about" className="nav-link">About</Link>
      </li>
      <li>
        <Link href="/pre-signup" className="nav-link">Signup</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;