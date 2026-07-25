// Plain-data mirror of the portfolio content exposed over MCP.
// Import-safe: no env reads, no I/O, no side effects.

export const profile = {
  name: "Sanket Tamboli",
  title: "Director of Delivery — Client Services",
  company: "Technocore360",
  location: "Vadodara, Gujarat, India",
  education: "Postgraduate in HRM",
  yearsOfExperience: 9,
  certifications: ["AI Product Management", "Scrum Master", "Lean Six Sigma"],
  summary:
    "Director of Delivery at Technocore360. Owns end-to-end execution for the client-services portfolio across US, Europe, Canada, and India, leading an 11-person team to SLA and fulfillment targets. Acts as internal product owner for the team's SaaS/ATS workflows — gathering feedback, prioritizing enhancements with vendors, validating releases, and enforcing clean-data standards. Delivered ServiceNow SOW engagements (ITSM/ITOM/HRSD/CSM), deploying 20+ consultants against fixed acceptance criteria and reducing time-to-fill on niche roles from 90 to 15 days. Defines delivery KPIs and dashboards (fill rate, ramp time, SLA adherence) that surface revenue leakage and inform leadership decisions.",
  positioning:
    "Operations to Product — a delivery leader transitioning into Product Manager / Product Owner roles.",
  resumeUrl:
    "https://drive.google.com/file/d/1zNr2cCp_NRRDGWJJ9yV-KMPQmqVUvrAV/view?usp=sharing",
};

export const contact = {
  email: "sanket.130410111098@gmail.com",
  phone: "+91 9998271731",
  linkedin: "https://linkedin.com/in/sanket-tamboli",
  location: "Vadodara, Gujarat, India",
};

export const experience = [
  {
    role: "Director of Delivery — Client Services",
    company: "Technocore360",
    period: "Apr 2026 – Present",
    current: true,
    focus: "Portfolio Owner",
    description:
      "Own end-to-end delivery across IT, healthcare, pharma, and technical-functional domains for local to Fortune 200 clients. Lead an 11-person team across India and US to SLA and fulfillment targets. Delivered ServiceNow SOW engagements (ITSM/ITOM/HRSD/CSM), cutting time-to-fill on niche roles from 90 to 15 days. Act as internal product owner for the team's SaaS/ATS workflows.",
    tags: ["Portfolio Ownership", "ServiceNow SOW", "KPI & Dashboards"],
  },
  {
    role: "Senior Manager — Operations & Delivery",
    company: "Technocore360",
    period: "Apr 2025 – Jun 2026",
    current: false,
    focus: "Platform Owner",
    description:
      "Ran daily operations and capacity planning for a 5–7 person team across India and US. Built revenue matrices and growth dashboards that surfaced leakages for leadership. Audited ATS process adherence, enforced clean-data standards, and led requirement gathering with hiring managers to reduce requirement churn.",
    tags: ["Backlog Ownership", "Revenue Dashboards", "Process Design"],
  },
  {
    role: "Associate Delivery Manager",
    company: "Technocore360",
    period: "Apr 2022 – Mar 2025",
    current: false,
    focus: "Team Lead",
    description:
      "Led US IT hiring for Fortune 500 clients and start-ups, managing a 10-member team. Owned recruitment metrics, modified procedures to resolve bottlenecks, and partnered with department heads to forecast hiring needs.",
    tags: ["Team Leadership", "Metrics Ownership", "Stakeholder Planning"],
  },
  {
    role: "Lead Recruitment Executive",
    company: "Diverse Lynx",
    period: "Apr 2021 – Oct 2021",
    current: false,
    focus: "Cross-Functional Execution",
    description:
      "Owned the full recruitment lifecycle for the US Delivery Center. Collaborated with leadership and hiring managers on a strategic recruiting process; used JobDiva to manage workflow tracking and ensure data accuracy across the funnel.",
    tags: ["Lifecycle Ownership", "Stakeholder Alignment", "ATS Workflows"],
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "Mar 2017 – Apr 2021",
    current: false,
    focus: "Enterprise Delivery",
    description:
      "Owned end-to-end delivery on Direct, VMS, and MSP client accounts. Built proactive candidate pipelines, defined requirements with BDMs, and gained platform familiarity through ServiceNow ecosystem recruiting — ITSM concepts, enterprise workflows, and user roles.",
    tags: ["Pipeline Architecture", "ServiceNow Exposure", "Enterprise Ops"],
  },
];

export const skills = [
  {
    id: "product",
    title: "Product & Delivery",
    description:
      "Product lifecycle, backlog management, requirement definition, Agile execution, stakeholder alignment.",
    tags: ["Roadmapping", "Scrum", "RICE", "Backlog"],
    frameworks: ["RICE / MoSCoW", "Opportunity Solution Tree"],
    tools: ["Jira", "Linear", "Notion"],
  },
  {
    id: "ops",
    title: "Operations & Systems",
    description:
      "Workflow design, process optimization, platform ownership, KPI tracking, data quality.",
    tags: ["Six Sigma", "Process Design", "SLAs", "Capacity"],
    frameworks: ["Lean Six Sigma", "Capacity Planning"],
    tools: ["Excel", "ATS Platforms", "ServiceNow (exposure)"],
  },
  {
    id: "data",
    title: "Data & Analytics",
    description:
      "Defining metrics, building dashboards, funnel analysis, data-informed decisions.",
    tags: ["KPIs", "Dashboards", "Revenue Ops"],
    frameworks: ["North Star Metric", "Funnel Analysis"],
    tools: ["Excel", "Google Sheets", "Tableau"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description:
      "ServiceNow (platform exposure), Lovable, Figma, Notion, data and reporting tools.",
    tags: ["ServiceNow", "Lovable", "Figma", "Notion"],
    frameworks: ["No-Code/Low-Code", "ITSM Familiarity"],
    tools: ["ServiceNow (domain)", "Lovable", "Figma", "Notion"],
  },
];

export const projects = [
  {
    title: "AI-First Web Portfolio",
    category: "Rapid Prototyping",
    period: "2025",
    description:
      "MVP portfolio deployed in 48 hours using AI-assisted development. Demonstrates product thinking and execution speed.",
    tags: ["Lovable", "AI Tools", "Rapid Execution"],
    caseStudy: {
      problem:
        "Traditional development creates lag between product vision and execution. Needed to demonstrate both PM thinking and shipping ability.",
      solution:
        "Used Lovable.dev and natural language prompting to build a production-ready portfolio. Owned information architecture, content strategy, and iterative refinement.",
      outcome:
        "Working product showcasing systems thinking, prioritization, and execution speed.",
    },
  },
  {
    title: "Internal ATS Platform Ownership",
    category: "Product Operations",
    period: "2021 – Present",
    description:
      "End-to-end ownership of internal SaaS platform. User feedback loops, KPI definition, workflow optimization.",
    tags: ["Platform Ownership", "Backlog", "Configuration"],
    caseStudy: {
      problem:
        "Operational bottlenecks and data inconsistencies. Users had workarounds bypassing the system.",
      solution:
        "Took platform ownership, established feedback mechanisms, defined metrics aligning user behavior with business goals.",
      outcome:
        "Reliable data environment. Reduced workarounds by making the system work for users.",
    },
  },
  {
    title: "Revenue Intelligence Dashboards",
    category: "Data & Analytics",
    period: "2022 – Present",
    description:
      "Built revenue reports and growth projections identifying leakages. Enabled proactive decision-making.",
    tags: ["Dashboards", "KPIs", "Business Intelligence"],
    caseStudy: {
      problem:
        "Stakeholders lacked visibility into real-time trends. Revenue leakages undetected until quarter-end.",
      solution:
        "Designed dynamic revenue reports with clear visualizations and projection matrices for proactive decisions.",
      outcome:
        "Leadership identified leakages in real-time and took corrective actions.",
    },
  },
  {
    title: "Team Gamification & Retention",
    category: "Behavioral Design",
    period: "2021 – Present",
    description:
      "Designed incentive plans and retention roadmaps. Reduced attrition and drove performance metrics.",
    tags: ["Incentive Design", "Retention", "Performance"],
    caseStudy: {
      problem:
        "Performance plateaus and attrition risk across the delivery team.",
      solution:
        "Designed gamified incentive structures and retention roadmaps tied to measurable delivery outcomes.",
      outcome: "Improved performance metrics and lower attrition.",
    },
  },
];
