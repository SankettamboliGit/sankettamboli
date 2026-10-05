// Plain-data mirror of the portfolio content exposed over MCP.
// Import-safe: no env reads, no I/O, no side effects.

export const profile = {
  name: "Sanket Tamboli",
  title: "Technology Delivery & Product Operations Leader",
  company: "Technocore360",
  location: "Vadodara, Gujarat, India",
  education: "Postgraduate in HRM",
  yearsOfExperience: 9,
  certifications: [
    "18 ServiceNow micro and suite certifications",
    "Salesforce Agentblazer Champion 2026",
    "36 Salesforce Trailhead badges",
    "AI Product Management",
    "Scrum Master",
    "Lean Six Sigma",
  ],
  summary:
    "Delivery Director at Technocore360 with 9+ years in technology delivery and product operations. Leads a global India/U.S. team to SLA and fulfillment targets for clients up to Fortune 200 enterprises. Delivers ServiceNow SOW engagements across ITSM, ITOM, GRC, HRSD, CSM, and CMDB workflows, deploying 20+ consultants and reducing niche-role time-to-fill from 90 to 15 days. Acts as internal product owner for SaaS/ATS workflows through user feedback, vendor enhancement prioritization, release validation, and data governance. Defines delivery KPIs and revenue dashboards that guide leadership decisions.",
  positioning:
    "Technology delivery and product operations leader combining program execution, internal platform ownership, and enterprise workflow expertise.",
  resumeUrl:
    "https://drive.google.com/file/d/1Ms4HBfit_oIq0Qh32IkQ-p-vMc21ly18/view?usp=drive_link",
};

export const contact = {
  email: "sanket.130410111098@gmail.com",
  phone: "+91 9998271731",
  linkedin: "https://linkedin.com/in/sanket-tamboli",
  location: "Vadodara, Gujarat, India",
};

export const experience = [
  {
    role: "Delivery Director",
    company: "Technocore360",
    period: "Apr 2026 – Present",
    current: true,
    focus: "Portfolio Owner",
    description:
      "Own end-to-end client-services delivery, leading a global India/U.S. team to SLA and fulfillment targets for clients up to Fortune 200 enterprises. Scope ServiceNow SOW roles across ITSM, ITOM, GRC, HRSD, and CSM; deployed 20+ consultants and cut niche-role time-to-fill from 90 to 15 days. Define delivery KPIs, manage executive stakeholders and vendors, and mentor team leads.",
    tags: ["ServiceNow SOW", "Portfolio Leadership", "KPIs & Governance"],
  },
  {
    role: "Senior Manager — Operations & Delivery",
    company: "Technocore360",
    period: "Apr 2025 – Mar 2026",
    current: false,
    focus: "Operations Leader",
    description:
      "Managed daily operations and capacity planning for a 5–7 person India/U.S. team with 24/7 coverage. Built revenue matrices and growth dashboards, owned ATS configuration and data standards, advised hiring managers on requirement feasibility, and designed retention and mentorship frameworks.",
    tags: ["Capacity Planning", "Revenue Dashboards", "ATS Governance"],
  },
  {
    role: "Associate Delivery Manager",
    company: "Technocore360",
    period: "Apr 2022 – Mar 2025",
    current: false,
    focus: "Team Lead",
    description:
      "Led delivery for Fortune 500 clients and start-ups across ServiceNow SOW, IT, non-IT, healthcare, pharma, and life sciences roles, managing a 10-member team. Acted as internal product owner for SaaS/ATS workflows by gathering feedback, prioritizing vendor enhancements, validating releases, and setting data-governance standards.",
    tags: ["Internal Product Owner", "Release Validation", "Team Leadership"],
  },
  {
    role: "Team Lead Recruitment",
    company: "Technocore360",
    period: "Oct 2021 – Mar 2022",
    current: false,
    focus: "Resourcing Lead",
    description:
      "Led business-aligned resourcing professionals across ServiceNow SOW and broader technology and life-sciences roles. Tracked hiring metrics, introduced sourcing methods, evaluated recruitment software, and forecast hiring needs with department managers.",
    tags: ["Resource Planning", "Hiring Analytics", "Software Evaluation"],
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
    company: "Rang Technologies Inc",
    period: "Apr 2019 – Mar 2021",
    current: false,
    focus: "Award-Winning Lead",
    description:
      "Trained and mentored recruiters, deployed resources across client requirements, and partnered with Business Development on assigned client relationships. Earned the Striker Award 2019 and a Loyalty Award.",
    tags: ["Mentoring", "Client Relationships", "Striker Award"],
  },
  {
    role: "Talent Acquisition Specialist",
    company: "Rang Technologies Inc",
    period: "Mar 2017 – Apr 2019",
    current: false,
    focus: "Top Performer",
    description:
      "Managed full-lifecycle U.S. recruiting across IT, non-IT, healthcare, Salesforce, and insurance for enterprise clients. Earned the Flare 2018 Money Maker Award runner-up for the company's second-highest gross profit.",
    tags: ["Enterprise Recruiting", "Offer Negotiation", "Revenue Performance"],
  },
];

export const skills = [
  {
    id: "product",
    title: "Product Operations & Agile",
    description:
      "Internal product ownership, requirement prioritization, feedback loops, release validation, and Agile execution.",
    tags: ["Product Ownership", "Scrum", "Kanban", "Release Validation"],
    frameworks: ["Scrum / Kanban", "Feedback Loops"],
    tools: ["ATS Platforms", "Figma", "Notion", "Lovable"],
  },
  {
    id: "ops",
    title: "Delivery & Program Leadership",
    description:
      "Program delivery, SLA management, capacity planning, change management, and cross-functional leadership.",
    tags: ["Program Delivery", "SLAs", "Capacity", "Change Management"],
    frameworks: ["SLA Management", "Capacity Planning"],
    tools: ["Excel", "JobDiva", "Ceipal", "ServiceNow"],
  },
  {
    id: "data",
    title: "Governance & Analytics",
    description:
      "Delivery KPIs, dashboards, data governance, forecasting, and data-informed decisions.",
    tags: ["KPIs", "Dashboards", "Data Governance", "Forecasting"],
    frameworks: ["Delivery KPIs", "Revenue Analysis"],
    tools: ["Microsoft Excel", "ATS Reporting", "Data Analysis"],
  },
  {
    id: "tools",
    title: "ServiceNow & AI Platforms",
    description:
      "ServiceNow enterprise workflows, Salesforce Agentforce, ATS ecosystems, and generative AI tools.",
    tags: ["ServiceNow", "Agentforce", "ATS", "Generative AI"],
    frameworks: ["Enterprise Workflow", "Agentic AI"],
    tools: ["ServiceNow", "Salesforce Agentforce", "JobDiva", "Ceipal", "Lovable"],
  },
];

export const projects = [
  {
    title: "AI-First Web Portfolio",
    category: "Rapid Prototyping",
    period: "2025 – Present",
    description:
      "Responsive React portfolio designed and deployed in under 48 hours through an AI-assisted feedback loop.",
    tags: ["Lovable", "React", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Traditional development creates lag between product vision and execution. Needed to demonstrate both PM thinking and shipping ability.",
      solution:
        "Used Lovable.dev, React, Tailwind CSS, and Vite to build the portfolio, iterating UI and content through a generative-AI feedback loop.",
      outcome:
        "Working product showcasing systems thinking, prioritization, and execution speed.",
    },
  },
  {
    title: "SaaS/ATS Product Ownership",
    category: "Product Operations",
    period: "2021 – Present",
    description:
      "Internal product ownership spanning user feedback, vendor enhancements, release validation, and data governance.",
    tags: ["Product Operations", "Release Validation", "Data Governance"],
    caseStudy: {
      problem:
        "Operational bottlenecks and data inconsistencies. Users had workarounds bypassing the system.",
      solution:
        "Gathered user feedback, prioritized enhancements with vendors, validated releases, and set data-governance standards.",
      outcome:
        "Improved forecasting accuracy and operational reporting through cleaner workflows and data.",
    },
  },
  {
    title: "Delivery KPI & Revenue Dashboards",
    category: "Data & Analytics",
    period: "2022 – Present",
    description:
      "Built delivery and revenue dashboards tracking fill rate, ramp time, SLA adherence, leakage, and growth opportunities.",
    tags: ["Delivery KPIs", "Revenue Analysis", "Leadership Reporting"],
    caseStudy: {
      problem:
        "Stakeholders lacked visibility into real-time trends. Revenue leakages undetected until quarter-end.",
      solution:
        "Defined delivery KPIs and built revenue matrices, growth dashboards, and projection views for leadership.",
      outcome:
        "Leadership identified leakages in real-time and took corrective actions.",
    },
  },
  {
    title: "ServiceNow SOW Delivery",
    category: "Enterprise Delivery",
    period: "2022 – Present",
    description:
      "Translated fixed SOW outcomes into phased plans for niche ServiceNow roles across major workflow domains.",
    tags: ["ServiceNow", "SOW", "Program Delivery"],
    caseStudy: {
      problem:
        "Niche ServiceNow requirements were taking up to 90 days to fill, creating delivery risk against fixed milestones.",
      solution:
        "Scoped role requirements against deliverables and milestones, then converted scope into prioritized phased hiring plans.",
      outcome: "Deployed 20+ consultants and reduced niche-role time-to-fill from 90 to 15 days.",
    },
  },
];
