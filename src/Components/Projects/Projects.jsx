import React from 'react';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRobot,
  FaLaptopCode,
  FaBoxes,
  FaLayerGroup,
  FaArrowRight
} from 'react-icons/fa';
import { projectsData } from '../../data/portfolioData';
import './Projects.scss';

const Projects = () => {
  const getProjectIcon = (id) => {
    switch (id) {
      case 'conversational-ai-platform':
        return <FaRobot />;
      case 'developer-portfolio-platform':
        return <FaLaptopCode />;
      case 'enterprise-supply-chain-engine':
        return <FaBoxes />;
      default:
        return <FaLayerGroup />;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Systems</span>
          </h2>
          <p className="section-subtitle">
            A showcase of production-grade engineering: from enterprise-scale supply chain event streaming to modern generative AI applications.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon-wrapper">{getProjectIcon(project.id)}</div>
                <div className="project-title-meta">
                  <span className="project-badge">{project.badge}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              {/* Metrics row */}
              <div className="project-metrics">
                {project.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="project-metric-item">
                    <span className="m-val">{m.value}</span>
                    <span className="m-lbl">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Links */}
              <div className="project-footer">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn primary"
                  >
                    <span>Live Application</span>
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-btn"
                  >
                    <FaGithub />
                    <span>View Repository</span>
                  </a>
                )}
                {project.links.caseStudy && (
                  <a href={project.links.caseStudy} className="project-link-btn">
                    <span>View Architecture Details</span>
                    <FaArrowRight />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
