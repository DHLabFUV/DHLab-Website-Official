// Footer.js
import './footer.css';
import React from 'react';
import background from '../pic/background.png'

const Footer = () => {
  return (
    <><div>
          <img src={background} className='background' alt="background" /></div><div>
              <p>Say Hello</p>
          </div></>
  );
};

export default Footer;
