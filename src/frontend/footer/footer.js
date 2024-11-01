import './footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    background: 'radial-gradient(ellipse at center, rgba(0, 15, 98, 1), rgba(4, 50, 141, 1)',
    color: '#fff',
    textAlign: 'center',
    padding: '10%',
    bottom: 0,
    width: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <div className='container'>
        <div className='sayhello-container'>
          {/* Use <a> tag for external link */}
          <h1>Say Hello</h1>
          {/* Add social media icons */}
        </div>
        <div className='grid-container'>
          <div className="grid-item">
            <h4>Founder</h4>
            <h3>Vu An-Lam</h3>
            <p>Email: founder1@example.com</p>
          </div>
          <div className="grid-item">
            <h4>Lead of Communication Department</h4>
            <h3>Thuy Linh-Hoa Thi</h3>
            <p>Email: founder2@example.com</p>
          </div>
          <div className="grid-item">
            <h4>Tech Lead and Project Manager</h4>
            <h3>Phuong Anh-Pham Doan</h3>
            <p>Email: pdpa.work@gmail.com</p>
          </div>
        </div>
        <div className="social-icons">
            <a href="https://www.facebook.com/trungtamnghiencuuvietnam">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
