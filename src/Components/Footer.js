import React from 'react';
import './Footer.css'; // Make sure to style it accordingly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faCcVisa,
  faCcMastercard,
} from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import {
  faTruck,
  faStore,
  faHeadset,
  faGift,
} from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <footer className="footer-container">
      {/* Top Section with Icons */}
      <div className="footer-top">
        <div className="icon-section">
          <div className="icon-item">
            <FontAwesomeIcon icon={faTruck} className="top-icon" />
            <p>Shipping Nationwide</p>
          </div>
          <div className="icon-item">
            <FontAwesomeIcon icon={faStore} className="top-icon" />
            <p>Active Store Near You</p>
          </div>
          <div className="icon-item">
            <FontAwesomeIcon icon={faHeadset} className="top-icon" />
            <p>Customer Care</p>
          </div>
          <div className="icon-item">
            <FontAwesomeIcon icon={faGift} className="top-icon" />
            <p>Bata Club Benefits</p>
          </div>
        </div>
      </div>

      <hr></hr>


      {/* Links Section */}
      <div className="footer-middle">
        <div className="footer-column">
          <h4>Shop</h4>
          <ul>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help Center</h4>
          <ul>
            <li><a href="/my-account">My Account</a></li>
            <li><a href="/track-order">Track Order</a></li>
            <li><a href="/write-to-us">Write to Us</a></li>
            <li><a href="/store-locator">Store Locator</a></li>
            <li><a href="/site-map">Site Map</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Franchise</h4>
          <ul>
            <li><a href="/franchise-program">Franchise Program</a></li>
            <li><a href="/store-locations">Store Locations</a></li>
          </ul>
          <h4>Company Info</h4>
          <ul>
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/ContactUs">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
            <li><a href="/payment-options">Payment Options</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
          <h4>My Account</h4>
          <ul>
            <li><a href="/login">login</a></li>
            <li><a href="/Register">Register</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <h4>We Accept</h4>
          <div className="payment-icons">
            <FontAwesomeIcon icon={faMoneyBillWave} title="Cash on Delivery" className="payment-icon" />
            <FontAwesomeIcon icon={faCcVisa} title="Visa" className="payment-icon" />
            <FontAwesomeIcon icon={faCcMastercard} title="MasterCard" className="payment-icon" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>BATA - PAKISTAN'S FAVORITE FOOTWEAR BRAND</p>
        <p>
          Since 1942 Bata Pakistan has been rendering its services to its valued customers by offering quality products.{' '}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
