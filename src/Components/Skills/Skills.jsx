import React, { useState } from 'react';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
  FaRobot,
  FaSearch
} from 'react-icons/fa';
import { skillCategories } from '../../data/portfolioData';
import './Skills.scss';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <FaCode />;
      case 'server':
        return <FaServer />;
      case 'database':
        return <FaDatabase />;
      case 'cloud':
        return <FaCloud />;
      case 'chart':
        return <FaChartLine />;
      case 'shield':
        return <FaShieldAlt />;
      case 'bot':
        return <FaRobot />;
      default:
        return <FaCode />;
    }
  };

  // Filter skills based on category and search query
  const filteredCategories = skillCategories
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        const skillName = typeof skill === 'string' ? skill : skill.name;
        return skillName.toLowerCase().includes(query);
      });
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Stack</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Enterprise-tested full-stack proficiency spanning frontend frameworks, distributed backend microservices, telemetry, and modern developer tooling.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="skills-toolbar">
          <div className="skills-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search skills (e.g., React, Kafka, Redis, Cypress)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="clear-btn">
                ✕
              </button>
            )}
          </div>

          <div className="category-pills">
            <button
              className={`cat-pill ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.category}
                className={`cat-pill ${selectedCategory === cat.category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.category)}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Display */}
        <div className="skills-grid">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="category-card">
              <div className="category-header">
                <div className="category-icon">{getCategoryIcon(cat.icon)}</div>
                <h3 className="category-title">{cat.category}</h3>
                <span className="category-count">{cat.skills.length} skills</span>
              </div>

              <div className="skills-items-grid">
                {cat.skills.map((skill, sIdx) => {
                  const skillName = typeof skill === 'string' ? skill : skill.name;
                  return (
                    <div key={sIdx} className="skill-pill-card">
                      <span className="skill-dot"></span>
                      <span className="skill-name">{skillName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="no-skills-found">
              <p>No skills matching "{searchQuery}"</p>
              <button onClick={() => setSearchQuery('')} className="btn btn-secondary btn-sm">
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
