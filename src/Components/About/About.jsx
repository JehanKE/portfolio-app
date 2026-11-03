import React from 'react';
import {
  FaLayerGroup,
  FaServer,
  FaChartLine,
  FaUsersCog,
  FaChevronRight,
  FaLightbulb,
  FaTerminal
} from 'react-icons/fa';
import './About.scss';

const About = () => {
  const pillars = [
    {
      icon: <FaLayerGroup />,
      title: "High-Volume Frontend Architecture",
      description:
        "Engineered nested infinite-scrolling tables, asynchronous data loading, and virtualization with AG Grid & React, eliminating redundant re-renders and speeding up heavy supply chain workflows."
    },
    {
      icon: <FaServer />,
      title: "Event-Driven Distributed Microservices",
      description:
        "Built resilient microservices with Spring Boot and Apache Kafka for automated inventory replenishment, backed by PostgreSQL persistence and Redis caching to eliminate DB bottlenecks."
    },
    {
      icon: <FaChartLine />,
      title: "Observability & SRE Culture",
      description:
        "Established end-to-end client telemetry and Grafana dashboards integrating session replay, error tracking, and clickstream analytics for rapid incident triage during peak traffic events."
    },
    {
      icon: <FaUsersCog />,
      title: "Quality, Security & Engineering Mentorship",
      description:
        "Instituted Cypress and Playwright E2E testing suites, remediated Snyk security vulnerabilities, and mentored junior engineers through debugging and modular architecture workshops."
    }
  ];

  const highlights = [
    "5 Years of full-stack engineering at Lowe's India",
    "Promoted from Associate to Software Engineer to Senior Software Engineer",
    "450+ production pull requests delivered in a single year with top ratings",
    "2 Individual Excellence + 3 Team Excellence Awards + VP Recognition",
    "B.E. in Computer Science with 8.93 / 10 CGPA"
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Architecture & Leadership</span>
          <h2 className="section-title">
            Transforming Ambiguity into <span className="gradient-text">Scalable Systems</span>
          </h2>
          <p className="section-subtitle">
            Senior Software Engineer with end-to-end ownership across distributed microservices, complex React frontends, and automated CI/CD pipelines.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative">
            <div className="narrative-card">
              <h3 className="narrative-heading">
                <FaTerminal className="narrative-icon" /> Engineering Journey at Lowe's India
              </h3>
              <p className="narrative-text">
                Over the past <strong>5 years at Lowe's India</strong>, I have grown from an Associate Software Engineer to a Senior Software Engineer, taking on end-to-end ownership of enterprise supply chain platforms, regional inventory allocation, and automated replenishment services.
              </p>
              <p className="narrative-text">
                My approach bridges deep technical rigor with business outcomes: whether that means building high-throughput event pipelines using <strong>Spring Boot and Apache Kafka</strong>, designing low-latency caching layers with <strong>Redis</strong>, or engineering virtualized <strong>React & AG Grid</strong> tables that handle massive SKU hierarchies without stuttering.
              </p>

              <div className="narrative-highlights">
                <span className="highlights-title">Core Milestones & Leadership:</span>
                <ul className="highlights-list">
                  {highlights.map((item, idx) => (
                    <li key={idx}>
                      <FaChevronRight className="bullet-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outgoing Geek Personal Card */}
            <div className="personality-card">
              <div className="personality-header">
                <span className="personality-badge">
                  <FaLightbulb /> Beyond the IDE
                </span>
                <span className="sneaker-emoji">👟 ⚽ ⚡</span>
              </div>
              <p className="personality-text">
                A sneaker craze, a sports addiction, and a genuine obsession for cutting-edge software make me part of a rare breed of outgoing geeks. Competitive, driven, and continuously learning, I thrive in collaborative high-ownership teams and love turning complex challenges into clean, elegant solutions.
              </p>
            </div>
          </div>

          {/* Right Column: Pillars Grid */}
          <div className="about-pillars">
            <h3 className="pillars-heading">Core Engineering Pillars</h3>
            <div className="pillars-grid">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div className="pillar-content">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
