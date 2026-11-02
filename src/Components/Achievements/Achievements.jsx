import React from 'react';
import {
  FaAward,
  FaUsers,
  FaStar,
  FaBolt,
  FaGraduationCap,
  FaTrophy
} from 'react-icons/fa';
import { achievementsData } from '../../data/portfolioData';
import './Achievements.scss';

const Achievements = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'award':
        return <FaAward />;
      case 'users':
        return <FaUsers />;
      case 'star':
        return <FaStar />;
      case 'bolt':
        return <FaBolt />;
      case 'grad':
        return <FaGraduationCap />;
      default:
        return <FaTrophy />;
    }
  };

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recognition & Education</span>
          <h2 className="section-title">
            Honors, Awards & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Consistently recognized for technical leadership, high velocity, and end-to-end platform ownership at Lowe's India.
          </p>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-icon-box">{getIcon(item.icon)}</div>
              <div className="achievement-content">
                <div className="achievement-type-badge">{item.type}</div>
                <h3 className="achievement-title">{item.title}</h3>
                <h4 className="achievement-org">{item.organization}</h4>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

