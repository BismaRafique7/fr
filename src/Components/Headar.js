import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Header.css'; 
import l from './logo.png';

function Header() {
  return (
    <header className="header-container">
    
      <div className="top-header">
        <p>Email: customercare.batapk@gmail.com</p>
      </div>

      
      <div className="middle-header">
        <div className="logo-section">
          <img src={l} alt="Bata Logo" className="header-logo" />
        </div>
        <div className="right-icons">
          <Link to="/login" className="icon-link">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>Login</span>
          </Link>
          <Link to="/Register" className="icon-link">
          <FontAwesomeIcon icon={faUserPlus} className="icon" />
            <span>Register</span>
          </Link>
          <Link to="/cart" className="icon-link">
            <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            <span>Rs. 0</span>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bottom-header">
        <ul className="nav-links">
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/men">MEN</Link></li>
          <li><Link to="/women">WOMEN</Link></li>
          <li><Link to="/kids">KIDS</Link></li>
          <li><Link to="/AboutUs">ABOUT US</Link></li>
          <li><Link to="/Checkout">CHECKOUT</Link></li>
          <li><Link to="/cart">CART</Link></li>
          <li><Link to="/ContactUs">CONTACTUS</Link></li>
        </ul>
      </nav>

      {/* Delivery Info */}
      <div className="delivery-info">
        <p>Delivery charges: Rs.100 will be charged on all orders</p>
      </div>
    </header>
  );
}

export default Header;
