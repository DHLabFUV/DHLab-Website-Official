// Footer.js
import React from 'react';
import 'src/UI/footer/footer.css';
import background from '../pic/background.png'

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>This is the footer.</p>
        <img  src={background} className='background' alt="background image"/>
      </div>
    </footer>
  );
};

export default Footer;
