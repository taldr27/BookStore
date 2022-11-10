import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-data">
      <h1>Bookstore CMS</h1>
      <Link to="/" className="navBar-link">BOOKS</Link>
      <Link to="/Categories" className="navBar-link">CATEGORIES</Link>
    </div>
    <button type="button" className="user-button">
      <AiOutlineUser style={{ color: 'black', width: '30px', height: '25px' }} />
    </button>
  </div>
);

export default Navbar;
