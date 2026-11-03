import React, { useEffect } from 'react';
import {
  FaTimes,
  FaDownload,
  FaPrint
} from 'react-icons/fa';
import { personalInfo, experienceData } from '../../data/portfolioData';
import './ResumeModal.scss';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const lowes = experienceData[0];

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Modal Toolbar */}
        <div className="resume-modal-toolbar">
          <div className="toolbar-info">
            <span className="doc-title">Jehan_Engineer_Resume.pdf</span>
            <span className="doc-meta">Senior Software Engineer • ATS Format</span>
          </div>
          <div className="toolbar-actions">
            <a
              href={personalInfo.resumePath}
              download="Jehan_Engineer_Resume.pdf"
              className="btn btn-primary btn-sm"
            >
              <FaDownload />
              <span>Download PDF</span>
            </a>
            <button onClick={() => window.print()} className="btn btn-secondary btn-sm print-btn">
              <FaPrint />
              <span>Print</span>
            </button>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <FaTimes />
            </button>
          </div>
        </div>

        {/* ATS Document Canvas */}
        <div className="resume-document">
          {/* Header */}
          <div className="doc-header">
            <h1 className="doc-name">{personalInfo.name}</h1>
            <h2 className="doc-role">{personalInfo.role}</h2>
            <div className="doc-contact-line">
              <span>{personalInfo.location}</span>
              <span className="sep">•</span>
              <span>{personalInfo.phone}</span>
              <span className="sep">•</span>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <span className="sep">•</span>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="doc-section">
            <h3 className="doc-sec-title">SUMMARY</h3>
            <p className="doc-sec-body">{personalInfo.summary}</p>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="doc-section">
            <h3 className="doc-sec-title">TECHNICAL SKILLS</h3>
            <div className="doc-skills-table">
              <div className="skill-row">
                <span className="skill-cat">Languages:</span>
                <span className="skill-vals">Java, JavaScript, TypeScript, SQL</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Frontend:</span>
                <span className="skill-vals">React.js, Next.js, Redux, HTML5, CSS, React Router, AG Grid, Storybook, Micro Frontend Architecture</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Backend:</span>
                <span className="skill-vals">Spring Boot, Spring Batch, Hibernate/JPA, REST APIs, GraphQL, Microservices, Apache Kafka, Event-Driven Architecture</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Databases:</span>
                <span className="skill-vals">PostgreSQL, MySQL, MongoDB, Redis</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">DevOps & IaC:</span>
                <span className="skill-vals">Docker, ArgoCD, Jenkins, CI/CD, Vercel</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Observability:</span>
                <span className="skill-vals">Grafana, Prometheus, Kibana, Session Replay</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Quality & Security:</span>
                <span className="skill-vals">Cypress, Playwright, Jest, JUnit, Mockito, Snyk</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">AI:</span>
                <span className="skill-vals">LLM integration (Claude, GPT, Gemini), GitHub Copilot</span>
              </div>
              <div className="skill-row">
                <span className="skill-cat">Tools & Practices:</span>
                <span className="skill-vals">Git, GitHub, Bitbucket, Jira, Confluence, Agile/Scrum, System Design, Code Reviews</span>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL EXPERIENCE */}
          <div className="doc-section">
            <h3 className="doc-sec-title">PROFESSIONAL EXPERIENCE</h3>
            <div className="doc-exp-item">
              <div className="exp-line-1">
                <span className="exp-company">{lowes.company}</span>
                <span className="exp-dates">
                  Jun 2026 – Present • Software Engineer (Sep 2023 – May 2026) • Assoc (Aug 2021 – Sep 2023)
                </span>
              </div>
              <div className="exp-line-2">
                <span className="exp-job-title">Senior Software Engineer</span>
              </div>
              <ul className="doc-bullets">
                {lowes.achievements.map((ach, idx) => (
                  <li key={idx}>{ach.description}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROJECTS */}
          <div className="doc-section">
            <h3 className="doc-sec-title">PROJECTS</h3>
            <div className="doc-project-item">
              <div className="project-title-row">
                <span className="p-title">Conversational AI Chatbot Platform</span>
                <span className="p-link">Live App (Vercel)</span>
              </div>
              <ul className="doc-bullets">
                <li>
                  Architected and developed a full-scale conversational AI application integrating Google OAuth for secure user authentication and session management.
                </li>
                <li>
                  Integrated the Google AI API to stream context-aware model responses, implementing robust error handling, rate-limiting, and responsive UI components.
                </li>
              </ul>
            </div>

            <div className="doc-project-item">
              <div className="project-title-row">
                <span className="p-title">Developer Portfolio & Web Application</span>
                <span className="p-link">Live Portfolio (Vercel)</span>
              </div>
              <ul className="doc-bullets">
                <li>
                  Engineered a high-performance personal portfolio and interactive web application using React, JavaScript, and CSS.
                </li>
                <li>
                  Optimized client-side rendering, accessibility, and asset delivery, deploying with automated CI/CD pipelines on Vercel.
                </li>
              </ul>
            </div>
          </div>

          {/* EDUCATION & ACHIEVEMENTS */}
          <div className="doc-section">
            <h3 className="doc-sec-title">EDUCATION & ACHIEVEMENTS</h3>
            <div className="doc-edu-item">
              <span className="edu-title">
                New Horizon College of Engineering, Bengaluru (VTU) — B.E., Computer Science & Engineering | CGPA: 8.93 (2017 – 2021)
              </span>
              <ul className="doc-bullets">
                <li>
                  Received 2 Individual Excellence Awards, 3 Team Excellence Awards and VP-level leadership recognition at the Annual Technology Town Hall for end-to-end ownership of critical supply chain platforms.
                </li>
                <li>
                  Earned top performance ratings delivering 450+ production code contributions across enterprise repositories in a single year.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
