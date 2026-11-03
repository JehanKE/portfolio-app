export const personalInfo = {
  name: "Jehan Engineer",
  role: "Senior Software Engineer",
  company: "Lowe's India",
  location: "Bengaluru, India",
  email: "jehanke8@gmail.com",
  phone: "+91 8971915776",
  resumePath: "/Jehan_Engineer_Resume.pdf",
  status: "Available for Senior & Lead Engineering Roles",
  socials: {
    linkedin: "https://www.linkedin.com/in/jehan-engineer-9a0b401b0/",
    github: "https://github.com/JehanKE",
    email: "mailto:jehanke8@gmail.com"
  },
  summary: `Senior Software Engineer with 5 years of full-stack experience at Lowe's India building scalable enterprise web applications, microservices, and distributed systems using React, JavaScript, Spring Boot and Java. Strong in designing high-volume frontend architectures, event-driven data pipelines, and maintainable APIs with a focus on reliability, performance, and cost efficiency. Comfortable owning complex systems end to end, from technical design, development and code reviews to automated testing, production observability, and integrating LLM capabilities into developer workflows.`,
  bio: `A sneaker craze, a sports addiction, and a love for technology and software make me part of a rare breed of outgoing geeks. Competitive, driven, hardworking, and always willing to learn. Looking for the next challenge life throws at me.`
};

export const keyMetrics = [
  {
    value: "5+",
    label: "Years Experience",
    sublabel: "Full-Stack Enterprise Systems",
    highlight: "Lowe's India"
  },
  {
    value: "450+",
    label: "Production PRs / Year",
    sublabel: "Enterprise Repositories",
    highlight: "Top Performance Rating"
  },
  {
    value: "5x",
    label: "Excellence Awards",
    sublabel: "2 Individual + 3 Team + VP Recognition",
    highlight: "Annual Tech Town Hall"
  },
  {
    value: "99.9%",
    label: "System Reliability",
    sublabel: "Observability & Kafka Pipelines",
    highlight: "Sub-Second Latency"
  }
];

export const experienceData = [
  {
    id: "lowes-india",
    company: "Lowe's India",
    location: "Bengaluru, India",
    period: "Aug 2021 – Present (5 Years)",
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Jun 2026 – Present",
        badge: "Current Role",
        description: "Leading frontend architecture and distributed microservice initiatives across enterprise supply chain operations."
      },
      {
        title: "Software Engineer",
        period: "Sep 2023 – May 2026",
        badge: "Promoted",
        description: "Delivered core full-stack inventory platforms, event-driven Kafka replenishment microservices, and client-side observability pipelines."
      },
      {
        title: "Associate Software Engineer",
        period: "Aug 2021 – Sep 2023",
        badge: "Promoted",
        description: "Developed reusable Storybook component libraries, integrated REST APIs, and automated E2E testing suites."
      }
    ],
    achievements: [
      {
        title: "Supply Chain Table Architecture & Modernization",
        category: "Frontend Architecture",
        impact: "Zero Redundant Re-renders & Accelerated Load Times",
        description:
          "Spearheaded the modernization of legacy supply chain operations, collaborating with UX teams to integrate optimized components and engineering a nested infinite-scrolling and asynchronous data-loading architecture for high-volume data tables, eliminating redundant re-renders and cutting load times.",
        skills: ["React.js", "AG Grid", "TypeScript", "Redux", "Data Virtualization", "Performance Profiling"]
      },
      {
        title: "Full-Stack Latency Reduction & Distributed Caching",
        category: "Performance Engineering",
        impact: "Significant Latency Reduction & Cloud Cost Savings",
        description:
          "Implemented caching layers and code optimizations across frontend React views and backend Spring Boot microservices for multiple workflows and tools, reducing API response latency and lowering infrastructure costs.",
        skills: ["Spring Boot", "Redis", "React Memoization", "REST APIs", "Microservices"]
      },
      {
        title: "Real-Time Observability & Telemetry Pipelines",
        category: "Observability & SRE",
        impact: "Instant Incident Detection & Zero-Blindspot Analytics",
        description:
          "Established real-time observability and client-side telemetry pipelines by building Grafana dashboards and integrating user session replay, clickstream analytics, and automated error reporting during promotional and incident response events.",
        skills: ["Grafana", "Prometheus", "Kibana", "Session Replay", "Clickstream Analytics", "Telemetry"]
      },
      {
        title: "Enterprise Inventory Allocation & Regional Stock Management",
        category: "Full-Stack Systems",
        impact: "Resolved Multi-Tier SKU Hierarchy Defects End-to-End",
        description:
          "Led end-to-end full-stack delivery of enterprise inventory allocation and regional stock management platforms, building Spring Boot search and filter microservices, resolving multi-tier SKU hierarchy defects, and engineering modular React interfaces.",
        skills: ["Spring Boot", "React.js", "PostgreSQL", "SKU Hierarchy", "Search Microservices"]
      },
      {
        title: "High-Throughput Event-Driven Microservices with Kafka",
        category: "Distributed Backend",
        impact: "Automated Store Replenishment & Reduced DB Bottlenecks",
        description:
          "Developed high-throughput event-driven microservices using Spring Boot and Apache Kafka for automated supply chain replenishment, integrating PostgreSQL for transactional persistence and Redis distributed caching to accelerate read-heavy inventory lookups and reduce database load.",
        skills: ["Apache Kafka", "Spring Boot", "Redis", "PostgreSQL", "Event-Driven Architecture", "Spring Batch"]
      },
      {
        title: "Automated Testing, E2E Suites & Security Compliance",
        category: "Quality & Security",
        impact: "Enterprise Snyk Remediation & Team Performance Suite",
        description:
          "Drove automated testing and security compliance across enterprise repositories, implementing Cypress and Playwright E2E test suites, institutionalizing a team-wide performance testing suite, and remediating Snyk security vulnerabilities.",
        skills: ["Cypress", "Playwright", "Jest", "JUnit", "Mockito", "Snyk Security"]
      },
      {
        title: "Engineering Mentorship & Technical Leadership",
        category: "Leadership & Culture",
        impact: "Cross-Team Knowledge Sharing & Seamless Migrations",
        description:
          "Mentored junior engineers and led cross-team technical initiatives, conducting workshops on automation testing, session-replay debugging, and modular UI design while coordinating multi-team migrations.",
        skills: ["Technical Mentorship", "Code Reviews", "System Design", "Agile/Scrum", "Workshops"]
      },
      {
        title: "Reusable Storybook Component Libraries & Design System",
        category: "Frontend Systems",
        impact: "Unified Enterprise UI & High Code Reusability",
        description:
          "Developed responsive enterprise web interfaces and reusable Storybook component libraries using React, Redux, TypeScript, and React Router, integrating third-party libraries and RESTful backend APIs while maintaining test suites with Jest and Cypress.",
        skills: ["Storybook", "TypeScript", "React Router", "Redux", "Jest", "CSS Architecture"]
      }
    ]
  }
];

export const skillCategories = [
  {
    category: "Languages",
    icon: "code",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "SQL"]
  },
  {
    category: "Frontend Architecture",
    icon: "code",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "HTML5 & CSS3/SCSS",
      "React Router",
      "AG Grid",
      "Storybook",
      "Micro Frontend Architecture"
    ]
  },
  {
    category: "Backend & Distributed Systems",
    icon: "server",
    skills: [
      "Spring Boot",
      "Spring Batch",
      "Hibernate / JPA",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Apache Kafka",
      "Event-Driven Architecture"
    ]
  },
  {
    category: "Databases & Caching",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL & Query Tuning"]
  },
  {
    category: "DevOps & IaC",
    icon: "cloud",
    skills: ["Docker", "ArgoCD", "Jenkins", "CI/CD", "Vercel"]
  },
  {
    category: "Observability & Telemetry",
    icon: "chart",
    skills: ["Grafana", "Prometheus", "Kibana", "Session Replay", "Client-Side Telemetry"]
  },
  {
    category: "Quality, Testing & Security",
    icon: "shield",
    skills: ["Cypress", "Playwright", "Jest", "JUnit", "Mockito", "Snyk Security"]
  },
  {
    category: "AI & Developer Tooling",
    icon: "bot",
    skills: [
      "LLM Integration (Claude, GPT, Gemini)",
      "GitHub Copilot",
      "Git & GitHub",
      "Bitbucket & Jira",
      "System Design & Code Reviews"
    ]
  }
];

export const projectsData = [
  {
    id: "conversational-ai-platform",
    title: "Conversational AI Chatbot Platform",
    badge: "AI Project",
    summary:
      "A full-scale conversational AI application integrating Google OAuth for secure user authentication, session management, and Google AI streaming APIs.",
    description:
      "Architected and developed a production-ready conversational AI platform integrating Google OAuth for secure user authentication and session management. Integrated the Google AI (Gemini) API to stream context-aware model responses in real-time, engineering robust error handling, adaptive rate-limiting, and fluid UI components with markdown and syntax rendering.",
    tags: ["React.js", "Google AI / Gemini API", "OAuth 2.0", "Streaming Responses", "Rate Limiting", "Vercel"],
    metrics: [
      { label: "Streaming Latency", value: "< 250ms TTFT" },
      { label: "Auth Flow", value: "Google OAuth 2.0" },
      { label: "Deployment", value: "Vercel Edge" }
    ],
    links: {
      live: "https://chat-bot-ten-peach.vercel.app/",
      github: "https://github.com/JehanKE/chat-bot"
    }
  },
  {
    id: "developer-portfolio-platform",
    title: "Developer Portfolio & Web Application",
    badge: "Personal Brand & Web Vitals",
    summary:
      "High-performance personal portfolio and interactive web platform engineered with React, SCSS, and automated CI/CD deployment on Vercel.",
    description:
      "Engineered an interactive, high-performance personal portfolio and developer platform with a custom design system, dark/light theme switching, responsive micro-interactions, and accessibility optimizations. Implemented automated CI/CD pipelines on Vercel with near-perfect Lighthouse scores.",
    tags: ["React 18", "SCSS Modules", "Web Vitals", "Accessibility", "CI/CD", "Vercel"],
    metrics: [
      { label: "Lighthouse Performance", value: "98+" },
      { label: "Design System", value: "Custom Dark/Light" },
      { label: "Deployment", value: "Automated CI/CD" }
    ],
    links: {
      live: "https://portfolio-app-nine-phi.vercel.app/",
      github: "https://github.com/JehanKE/portfolio-app"
    }
  }
];

export const achievementsData = [
  {
    type: "Award",
    title: "2x Individual Excellence Awards",
    organization: "Lowe's India",
    description: "Awarded for outstanding individual ownership, exceptional technical execution, and delivering critical business results on supply chain platforms.",
    icon: "award"
  },
  {
    type: "Award",
    title: "3x Team Excellence Awards",
    organization: "Lowe's India",
    description: "Recognized for stellar team contribution, cross-functional collaboration, and high-impact delivery of regional stock management systems.",
    icon: "users"
  },
  {
    type: "Leadership",
    title: "VP-Level Leadership Recognition",
    organization: "Annual Technology Town Hall (Lowe's India)",
    description: "Honored with VP-level executive recognition for end-to-end technical ownership, resilience, and operational reliability of mission-critical platforms.",
    icon: "star"
  },
  {
    type: "Performance",
    title: "450+ Production PRs in a Single Year",
    organization: "Enterprise Repositories",
    description: "Earned top-tier performance ratings by delivering 450+ high-quality production code contributions with robust test coverage across enterprise repos.",
    icon: "bolt"
  },
  {
    type: "Education",
    title: "B.E. in Computer Science & Engineering",
    organization: "New Horizon College of Engineering, Bengaluru (VTU)",
    description: "Graduated with Distinction | CGPA: 8.93 / 10.0 (2017 – 2021). Strong foundation in algorithms, distributed computing, database management, and system design.",
    icon: "grad"
  }
];

