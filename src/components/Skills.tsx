const skillCategories = [
  {
    title: "Operations & Leadership",
    skills: [
      "Team Management",
      "Stakeholder Management",
      "Vendor Negotiation",
      "Lean Operations",
      "Resource Planning",
      "Strategic Communications",
    ],
  },
  {
    title: "Talent Acquisition & HR",
    skills: [
      "Global Talent Acquisition",
      "Technical Recruiting",
      "Sourcing & Screening",
      "Onboarding Compliance",
      "Employee Engagement",
      "Performance Management",
    ],
  },
  {
    title: "ATS Management",
    skills: ["Ceipal", "JobDiva", "Conrep", "Greythr"],
  },
  {
    title: "Product & Agile Strategy",
    skills: [
      "Agile Scrum",
      "Kanban",
      "SAFe",
      "Lean Six Sigma",
      "AI Product Management",
      "Product Strategy",
      "User Feedback",
      "A/B Testing",
    ],
  },
  {
    title: "Data, Tools & Design",
    skills: ["Data Analysis", "Figma", "Notion", "Notebook LLM"],
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
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:bg-accent transition-colors"
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
