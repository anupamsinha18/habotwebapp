import React from 'react';
import logo from '../Assets/habot-logo.png';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Bottom.css'; // Make sure to create and import a CSS file for styling

const Bottom = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Habot Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Terms</h4>
            <ul>
              <li><a href="#">Data privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Related</h4>
            <ul>
              <li><a href="#">Find Buyer</a></li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; R Singhania</p>
      </div>
    </footer>
  );
};

export default Bottom;
