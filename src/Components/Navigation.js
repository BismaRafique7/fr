import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/AboutUs">About Us</Link></li>
        <li><Link to="/ContactUs">Contact Us</Link></li>
        <li><Link to="/Kids">Kids</Link></li>
        <li><Link to="/Men">Men</Link></li>
        <li><Link to="/Women">Women</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;