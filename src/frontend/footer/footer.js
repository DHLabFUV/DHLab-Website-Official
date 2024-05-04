// Footer.js
import './footer.css';
import React from 'react';

const Footer = () => {
  const footerStyle = {
    background: 'radial-gradient(ellipse at center, rgba(0, 15, 98, 1), rgba(4, 50, 141, 1)',
    color: '#fff',
    textAlign: 'center',
    padding: '10%',
    position: 'relative',
    bottom: 0,
    width: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <div className='container'>
        <div className='sayhello-container'>
                {/* Use <a> tag for external link */}
                <a href='https://www.facebook.com/'className='link'>Say Hello</a>               
        </div>
        <div className='grid-container'>
          <div class="grid-item">
            <h3>Vu An-Lam</h3>
            <h3>Founder</h3>
            <p>Email: founder1@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div class="grid-item">
            <h3>Hoa Leo</h3>
            <h4>Lead of Communication Department</h4>
            <p>Email: founder2@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div class="grid-item">
            <h3>Phuong Anh-Pham Doan</h3>
            <h4>Tech Lead and Project Manager</h4>
            <p>Email: founder3@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
