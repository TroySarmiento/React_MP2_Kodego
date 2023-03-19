import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTiktok, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="social-icons">
              <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.tiktok.com"><FontAwesomeIcon icon={faTiktok} /></a>
              <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="https://www.github.com"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="footer-text">Copyright © 2023 YortClub
              <a href="/#">Terms of Use</a> | <a href="/#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
