import React from 'react';
import {
  FaDownload,
  FaFileAlt,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCodeBranch,
  FaCheckCircle
} from 'react-icons/fa';
import { personalInfo, keyMetrics } from '../../data/portfolioData';
import './Hero.scss';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="bg-glow-orb orb-1"></div>
      <div className="bg-glow-orb orb-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
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
              <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="social-btn">
                <FaTwitter />
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

        {/* Hero Visual Card / Interactive Tech Snippet */}
        <div className="hero-visual">
          <div className="tech-terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="terminal-title">jehan-engineer-stack.ts</span>
              <span className="terminal-badge">production ready</span>
            </div>

            <div className="terminal-body">
              <div className="code-line">
                <span className="code-keyword">const</span> <span className="code-var">seniorEngineer</span>: <span className="code-type">FullStackArchitect</span> = {'{'}
              </div>
              <div className="code-line indent-1">
                <span className="code-prop">name</span>: <span className="code-string">"Jehan Engineer"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-prop">role</span>: <span className="code-string">"Senior Software Engineer"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-prop">company</span>: <span className="code-string">"Lowe's Services India"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-prop">experience</span>: <span className="code-string">"5 Years (Aug 2021 – Present)"</span>,
              </div>
              <div className="code-line indent-1">
                <span className="code-prop">coreStack</span>: [
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"React.js"</span>, <span className="code-string">"TypeScript"</span>, <span className="code-string">"Spring Boot"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"Apache Kafka"</span>, <span className="code-string">"Redis"</span>, <span className="code-string">"PostgreSQL"</span>
              </div>
              <div className="code-line indent-1">],</div>
              <div className="code-line indent-1">
                <span className="code-prop">specialties</span>: [
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"High-Volume Data Tables (Nested Virtualization)"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"Event-Driven Supply Chain Microservices"</span>,
              </div>
              <div className="code-line indent-2">
                <span className="code-string">"Real-Time Telemetry & Observability (Grafana)"</span>
              </div>
              <div className="code-line indent-1">],</div>
              <div className="code-line indent-1">
                <span className="code-prop">annualPRs</span>: <span className="code-number">450</span>+,
              </div>
              <div className="code-line indent-1">
                <span className="code-prop">excellenceAwards</span>: <span className="code-string">"2 Individual + 3 Team + VP Recognition"</span>
              </div>
              <div className="code-line">{'};'}</div>
            </div>

            <div className="terminal-footer">
              <span className="status-item">
                <FaCheckCircle className="status-icon" /> E2E Cypress & Playwright Verified
              </span>
              <span className="status-item">
                <FaCodeBranch className="status-icon" /> CI/CD Automated
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Ribbon */}
      <div className="container">
        <div className="metrics-grid">
          {keyMetrics.map((metric, idx) => (
            <div key={idx} className="metric-card">
              <div className="metric-value-wrap">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-highlight">{metric.highlight}</span>
              </div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-sublabel">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
