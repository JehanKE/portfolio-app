import React from 'react';
import {
  FaDownload,
  FaFileAlt,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';
import './Hero.scss';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Main Title */}
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Subheading */}
          <h2 className="hero-subtitle">
            Senior Software Engineer building scalable enterprise web applications, high-throughput microservices, and distributed systems.
          </h2>

          {/* Bio text */}
          <p className="hero-description">
            With <strong>5 years of full-stack engineering experience at Lowe's India</strong>, I specialize in designing high-volume React frontend architectures, event-driven Spring Boot & Apache Kafka data pipelines, and maintainable APIs with deep focus on reliability, performance, and client observability.
          </p>

          {/* Status Badge */}
          <div className="hero-badge-wrapper">
            <span className="hero-status-badge">
              <span className="live-dot"></span>
              {personalInfo.status}
            </span>
            <span className="hero-company-pill">
              {personalInfo.role} @ <strong>{personalInfo.company}</strong>
            </span>
          </div>

          {/* Call to Actions */}
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              <span>View Experience</span>
              <FaArrowRight />
            </a>

            <a
              href={personalInfo.resumePath}
              download="Jehan_Engineer_Resume.pdf"
              className="btn btn-secondary"
              title="Download PDF Resume"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>

            <button onClick={onOpenResume} className="btn btn-secondary" title="Preview Resume in Modal">
              <FaFileAlt />
              <span>Preview Resume</span>
            </button>
          </div>

          {/* Socials & Quick Connect */}
          <div className="hero-socials-row">
            <span className="socials-label">Connect:</span>
            <div className="social-links">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-btn">
                <FaGithub />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn">
                <FaLinkedin />
              </a>
              <a href={personalInfo.socials.email} aria-label="Email" className="social-btn">
                <FaEnvelope />
              </a>
            </div>
            <div className="hero-location-pill">
              <span className="pin-icon">📍</span>
              {personalInfo.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
