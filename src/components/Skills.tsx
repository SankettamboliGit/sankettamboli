import { Brain, Code2, Settings, Database, LayoutTemplate, PenTool, GitBranch } from "lucide-react";

// T-Shaped Skill Structure
const skillCategories = [
  {
    title: "Product Strategy (Deep Expertise)",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    description: "The 'Vertical Bar' - Core PM Competencies",
    skills: [
      "Product Discovery", "Roadmap Planning", "Feasibility Analysis", 
      "GTM Strategy", "User Feedback Loops", "Feature Prioritization"
    ],
    // Large block spanning 2 cols
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/5 to-transparent border-purple-500/20"
  },
  {
    title: "Technical Literacy",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    description: "Building with AI & Code",
    skills: ["React & Tailwind", "AI Prototyping", "Lovable.dev", "Prompt Engineering"],
    className: "md:col-span-1 bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20"
  },
  {
    title: "Operational Excellence",
    icon: <Settings className="w-6 h-6 text-orange-500" />,
    description: "Scaling Processes",
    skills: ["Lean Six Sigma", "Stakeholder Mgmt", "Agile/Scrum", "Capacity Planning"],
    className: "md:col-span-1 bg-gradient-to-br from-orange-500/5 to-transparent border-orange-500/20"
  },
  {
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6 text-green-500" />,
    description: "Measuring Impact",
    skills: ["KPI Tracking", "Revenue Matrix", "A/B Testing", "Clean Data Audits"],
    className: "md:col-span-1 bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20"
  },
  {
    title: "Design & UX",
    icon: <LayoutTemplate className="w-6 h-6 text-pink-500" />,
    description: "User Centricity",
    skills: ["Figma", "User Journey Mapping", "Usability Testing", "Wireframing"],
    className: "md:col-span-1 bg-gradient-to-br from-pink-500/5 to-transparent border-pink-500/20"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The T-Shaped Skillset
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining deep operational domain expertise with broad technical and strategic product capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 flex flex-col group ${category.className} opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div className="flex items-start justify-between mb-6">
                 <div className="p-3 bg-background rounded-xl border border-border shadow-sm group-hover:scale-110 transition-transform">
                   {category.icon}
                 </div>
              </div>
              
              <div className="mb-auto">
                <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                   {category.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg shadow-sm"
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
