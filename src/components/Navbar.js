import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { HiUser } from 'react-icons/hi';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-data">
      <h1 className="main-title">Bookstore CMS</h1>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'navBar-link selected' : 'navBar-link')}>BOOKS</NavLink>
      <NavLink to="/Categories" className={({ isActive }) => (isActive ? 'navBar-link selected' : 'navBar-link')}>CATEGORIES</NavLink>
    </div>
    <span className="user-button">
      <HiUser style={{ color: 'hsl(206, 100%, 50%)', width: '30px', height: '25px' }} />
    </span>
  </div>
);

export default Navbar;
