import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHome } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h1>Contact Information:</h1>
          <p>
            <FontAwesomeIcon icon={faEnvelope}/> Email: <a href="mailto:thuytran10040103@gmail.com">thuytran10040103@gmail.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone}/> Phone Number: <a href="tel:+14088968711">+1 408 896 8711</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faHome}/> Address: San Jose, CA 95121
          </p>
        </div>
        <div className="footer-links">
          <h1>Social Media:</h1>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100007860696611" target="_blank" rel="nooperner noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="nooperer noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.linkedin.com/in/thuytran10040/" target="_blank" rel="noorperer noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/thuytran100401" target="_blank" rel="noopere noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;