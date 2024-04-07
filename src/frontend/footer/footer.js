// Footer.js
import './footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className='background'>
        <div className='grid-container'>
            <div className='formlink'>
                {/* Use <a> tag for external link */}
                <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                Say Hello
                </a>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
