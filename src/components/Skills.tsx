import { Brain, Code2, Settings, PenTool, LayoutTemplate, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Product Strategy",
    icon: <Brain className="w-5 h-5 text-purple-500" />,
    description: "The 'Brain'",
    skills: ["Product Discovery", "Roadmapping", "Feasibility Analysis", "GTM Strategy"],
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/5 to-transparent"
  },
  {
    title: "Technical Literacy",
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    description: "The 'Hands'",
    skills: ["React & Tailwind", "AI Prototyping", "Lovable.dev", "Prompt Engineering"],
    className: "md:col-span-1 bg-gradient-to-br from-blue-500/5 to-transparent"
  },
  {
    title: "Operations",
    icon: <Settings className="w-5 h-5 text-orange-500" />,
    description: "The 'Backbone'",
    skills: ["Process Optimization", "Stakeholder Mgmt", "Lean Six Sigma", "Agile/Scrum"],
    className: "md:col-span-1 bg-gradient-to-br from-orange-500/5 to-transparent"
  },
  {
    title: "Data & Tools",
    icon: <Database className="w-5 h-5 text-green-500" />,
    description: "The 'Toolkit'",
    skills: ["Jira & Linear", "Figma", "KPI Tracking", "SaaS Config"],
    className: "md:col-span-2 bg-gradient-to-br from-green-500/5 to-transparent"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The T-Shaped Skillset
          </h2>
          <p className="text-muted-foreground">Deep operational expertise combined with broad technical & strategic capabilities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl border border-border hover:border-foreground/20 transition-all duration-300 flex flex-col justify-between group ${category.className} opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                   <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                     {category.icon}
                   </div>
                   <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                     {category.description}
                   </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-background/50 backdrop-blur-sm border border-border/50 rounded-full"
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
