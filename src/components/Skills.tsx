const skillCategories = [
  {
    title: "Product Management",
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "Feature Prioritization",
      "PRD Writing",
      "User Stories",
      "Go-to-Market Strategy",
    ],
  },
  {
    title: "User Research & Discovery",
    skills: [
      "User Interviews",
      "Usability Testing",
      "A/B Testing",
      "Journey Mapping",
      "Competitive Analysis",
      "User Feedback Synthesis",
    ],
  },
  {
    title: "Agile & Frameworks",
    skills: ["Agile Scrum", "Kanban", "SAFe", "Lean Six Sigma", "Design Thinking"],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Data-Driven Decisions",
      "KPI Tracking",
      "Metrics Analysis",
      "Stakeholder Reporting",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Figma", "Notion", "Jira", "Miro", "SaaS Platforms", "AI Tools"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Expertise & Capabilities
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-foreground/30 transition-colors"
                  >
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

export default Skills;
