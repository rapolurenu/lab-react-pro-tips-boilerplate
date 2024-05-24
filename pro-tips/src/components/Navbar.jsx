// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="header-link" style={{ fontSize: '24px' }}>Kavlium ❤️</Link>
      <nav>
        <Link to="/home" className="header-link">Home</Link>
        <Link to="/contacts" className="header-link" style={{ margin: '0 1rem' }}>Contacts</Link>
        <Link to="/about" className="header-link">RegistrationForm</Link>
      </nav>
    </header>
  );
};

export default Navbar;
