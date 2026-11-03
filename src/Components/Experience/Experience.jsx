import React from 'react';
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBolt
} from 'react-icons/fa';
import { experienceData } from '../../data/portfolioData';
import './Experience.scss';

const Experience = () => {
  const lowes = experienceData[0];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career & Experience</span>
          <h2 className="section-title">
            Enterprise <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            5 years of technical ownership across high-scale supply chain platforms, event-driven pipelines and distributed systems.
          </p>
        </div>

        {/* Company Header & Career Ladder */}
        <div className="company-ladder-card">
          <div className="company-ladder-header">
            <div className="company-info">
              <div className="company-logo-badge">L</div>
              <div>
                <h3 className="company-name">{lowes.company}</h3>
                <div className="company-meta">
                  <span>
                    <FaMapMarkerAlt /> {lowes.location}
                  </span>
                  <span>
                    <FaCalendarAlt /> {lowes.period}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="ladder-steps">
            {lowes.roles.map((role, idx) => (
              <div key={idx} className={`ladder-step ${idx === 0 ? 'step-current' : ''}`}>
                <div className="step-indicator">
                  <div className="step-dot"></div>
                  {idx < lowes.roles.length - 1 && <div className="step-line"></div>}
                </div>
                <div className="step-content">
                  <div className="step-header">
                    <h4 className="step-title">{role.title}</h4>
                    <span className={`step-badge ${idx === 0 ? 'badge-current' : ''}`}>{role.badge}</span>
                  </div>
                  <span className="step-period">{role.period}</span>
                  <p className="step-desc">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="initiatives-grid">
          {lowes.achievements.map((item, idx) => (
            <div key={idx} className="initiative-card">
              <div className="initiative-top">
                <span className="initiative-cat">{item.category}</span>
                <span className="initiative-impact">
                  <FaBolt className="bolt-icon" /> {item.impact}
                </span>
              </div>

              <h4 className="initiative-title">{item.title}</h4>

              <p className="initiative-desc">{item.description}</p>

              <div className="initiative-skills">
                {item.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
