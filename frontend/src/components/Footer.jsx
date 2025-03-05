import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Decentralized AI Model Marketplace. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
