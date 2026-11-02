import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Navbar.scss';

const Navbar = ({ theme, toggleTheme, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Honors', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" onClick={() => handleNavClick('#hero')}>
          <div className="brand-badge">JE</div>
          <div className="brand-info">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-status">
              <span className="status-dot"></span>
              {personalInfo.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* Social Links */}
          <div className="nav-socials desktop-only">
            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="nav-icon-btn">
              <FaGithub />
            </a>
            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="nav-icon-btn">
              <FaLinkedin />
            </a>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
          </button>

          {/* Resume CTA */}
          <button onClick={onOpenResume} className="btn btn-primary btn-sm resume-nav-btn">
            <FaFileAlt />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="mobile-drawer-divider"></div>
            <div className="mobile-drawer-footer">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-primary btn-sm mobile-resume-btn"
              >
                <FaFileAlt />
                <span>View Full Resume</span>
              </button>
              <div className="mobile-socials">
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="mobile-social-icon">
                  <FaGithub />
                </a>
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="mobile-social-icon">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

