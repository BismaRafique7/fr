import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Headar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 
import './ContactUs.css';

function ContactUs() {
  return (
    <div>
        <Header /> 

        <div className="contact-us-section">
          <h1>Contact Us</h1>


    <div className="contact-info">
        <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p>Phone number: 01922774620</p>
        </div>
        <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>Email: goldenfishbahrandpizza.place@gmail.com</p>
        </div>
        <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p>Address: 176 Bloxwich Rd, Walsall WS2</p>
        </div>
    </div>

          <p>We value your feedback. Please fill out the form below to submit your complaint.</p>

          <form className="complaint-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="complaint">Complaint:</label>
            <textarea id="complaint" name="complaint" rows="5" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>

        </div>


          <div className="location-map">
            <h4>Our Location</h4>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.570031392308!2d-1.9831403844077778!3d52.58663580323363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48700078ad5b4b7d%3A0x4fbc3edff29bfa68!2s176%20Bloxwich%20Rd%2C%20Walsall%20WS2!5e0!3m2!1sen!2suk!4v1690608597359!5m2!1sen!2suk" 
              width="600" 
              height="350" 
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          

        <Footer />
    </div>
  );
}

export default ContactUs;
