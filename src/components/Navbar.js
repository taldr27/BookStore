import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-data">
      <h1>Bookstore CMS</h1>
      <span>BOOKS</span>
      <span>CATEGORIES</span>
    </div>
    <img alt="user-icon" />
  </div>
);

export default Navbar;
