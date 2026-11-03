import React from 'react';
import { FaArrowUp, FaCode } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Footer.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main">
      <div className="container footer-container">
        <div className="footer-bottom">
          <div className="footer-copy">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            <span className="footer-tech-note">
              <FaCode className="code-icon" /> Built with React 18 & Enterprise Design Tokens
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Back to top"
            title="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
