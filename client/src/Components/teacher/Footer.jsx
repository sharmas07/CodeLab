import React from 'react';
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Gates Code Lab</p>
          <nav>
            made with love
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
