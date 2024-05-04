// Footer.js
import './footer.css';
import React from 'react';

const Footer = () => {
  const footerStyle = {
    // background: 'linear-gradient(to top, rgba(0, 15, 98, 1), rgba(4, 50, 141, 1), rgba(8, 84, 185, 1))',
    background: 'radial-gradient(ellipse at center, rgba(0, 15, 98, 1), rgba(4, 50, 141, 1)',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'relative',
    bottom: 0,
    width: '100%',
  };

  return (
    <footer style={footerStyle}>
        <div className='grid-container'>
            <div className='formlink'>
                {/* Use <a> tag for external link */}
                <a href='https://www.facebook.com/'className='link'>Say Hello</a>               
            </div>
      </div>
    </footer>
  );
};

export default Footer;
