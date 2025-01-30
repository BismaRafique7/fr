import React from 'react';
import Footer from '../Components/Footer';
import Headar from '../Components/Headar'; 
import './AboutUs.css';

function AboutUs() {
  return (
    <div>
      <Headar />
      <div className="about-us-section">
        <div className="about-header">
          <h1>About Us</h1>
          <p className="intro-text">
            Discover our journey and what makes us unique in the world of footwear.
          </p>
        </div>

        <div className="information-div">
          <h2>Why Choose Us?</h2>
          <div className="info-items">
            <div className="info-item">
              <h3>Expert Craftsmanship</h3>
              <p>Each pair of shoes is crafted with precision and care, ensuring the highest quality.</p>
            </div>
            <div className="info-item">
              <h3>Sustainable Materials</h3>
              <p>We are committed to using eco-friendly materials that are safe for our planet.</p>
            </div>
            <div className="info-item">
              <h3>Customer-Centric</h3>
              <p>Your satisfaction is our priority. We offer easy returns and excellent customer service.</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-overview">
            <div className="about-story">
              <h2>Our Story</h2>
              <p>
                Welcome to our shoe store, where passion meets quality! Founded in [Year], we have been committed to providing our customers with stylish, comfortable, and durable footwear.
              </p>
              <p>
                Our journey began with a simple goal: to offer high-quality shoes that not only look great but also feel great. Over the years, we have expanded our collection to include a variety of styles for men, women, and children.
              </p>
            </div>

            <div className="about-mission">
              <h2>Our Mission</h2>
              <p>
                Our mission is to deliver exceptional footwear that combines style, comfort, and value. We believe that everyone deserves to find the perfect pair of shoes that suits their lifestyle and enhances their confidence.
              </p>
            </div>

            <div className="about-values">
              <h2>Our Values</h2>
              <ul>
                <li><i className="fas fa-check-circle"></i> Quality: We source our materials from trusted suppliers to ensure durability and comfort.</li>
                <li><i className="fas fa-check-circle"></i> Customer Satisfaction: Our customers are our top priority. We strive to provide excellent service and a seamless shopping experience.</li>
                <li><i className="fas fa-check-circle"></i> Innovation: We are constantly exploring new designs and technologies to keep our products fresh and exciting.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-join-us">
          <h2>Join Us</h2>
          <p>
            Thank you for choosing us as your go-to shoe store. We invite you to explore our collection and discover the perfect pair for any occasion. Stay connected with us on social media for updates and promotions!
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
