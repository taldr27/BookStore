import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-data">
      <h1>Bookstore CMS</h1>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'navBar-link selected' : 'navBar-link')}>BOOKS</NavLink>
      <NavLink to="/Categories" className={({ isActive }) => (isActive ? 'navBar-link selected' : 'navBar-link')}>CATEGORIES</NavLink>
    </div>
    <button type="button" className="user-button">
      <AiOutlineUser style={{ color: 'black', width: '30px', height: '25px' }} />
    </button>
  </div>
);

export default Navbar;
