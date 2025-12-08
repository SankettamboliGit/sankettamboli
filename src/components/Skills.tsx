const skillCategories = [
  {
    title: "Product & Research",
    skills: [
      "Product Management",
      "Product Strategy",
      "Market Research",
      "User Behavior Analysis",
      "Feedback Systems",
    ],
  },
  {
    title: "AI & Data",
    skills: [
      "AI Product Management",
      "Text-to-SQL",
      "Databases & Query Writing",
      "Analytics",
      "Data Analysis",
    ],
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Visio", "Excel (Advanced)"],
  },
  {
    title: "Agile & Process",
    skills: [
      "Agile Methodologies",
      "Scrum",
      "Kanban",
      "Scrumban",
      "Lean Operations",
      "Continuous Improvement",
    ],
  },
  {
    title: "Recruitment & Operations",
    skills: [
      "ATS Management",
      "Sourcing Strategy",
      "Talent Acquisition",
      "Team Training",
      "Workflow Optimization",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Expertise & Capabilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`text-center opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
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
