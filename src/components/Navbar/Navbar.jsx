import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Expense Tracking App</div>
      <div className="navLinks">
        <Link to="/home" className="navLink">Home</Link>
        <Link to="/expenses" className="navLink">Expenses</Link>
        <Link to="/new-expense-form" className="navLink">Add Expense</Link>
        <Link to="/new-category-form" className="navLink">Add Category</Link>
      </div>
    </div >
  );
};

export default Navbar;
