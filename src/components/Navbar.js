import React from 'react';
import '../styles/Navbar.css';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-data">
      <h1>Bookstore CMS</h1>
      <span>BOOKS</span>
      <span>CATEGORIES</span>
    </div>
    <button type="button" className="user-button">
      <AiOutlineUser style={{ color: 'black', width: '30px', height: '25px' }} />
    </button>
  </div>
);

export default Navbar;
