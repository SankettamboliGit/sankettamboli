import { useState } from "react";
import { Brain, Code2, Settings, Database, LayoutTemplate, ChevronRight, Layers, Zap, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Data Structure: T-Shaped Skills with "Deep Dive" Content
const skillCategories = [
  {
    id: "strategy",
    title: "Product Strategy",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    role: "The 'Brain' (Deep Expertise)",
    description: "Translating ambiguous business goals into clear, executable roadmaps.",
    tags: ["Discovery", "Roadmapping", "GTM"],
    className: "md:col-span-2 md:row-span-2 bg-purple-500/5 border-purple-500/20",
    details: {
      philosophy: "Strategy without execution is hallucination. I focus on 'Viable' over 'Visionary'.",
      frameworks: [
        { name: "Opportunity Solution Tree", desc: "Mapping outcomes to opportunities, not just features." },
        { name: "RICE Scoring", desc: "Quantifying prioritization to remove bias from the roadmap." },
        { name: "Lean Canvas", desc: "Validating business models before writing a single line of code." }
      ],
      masteryLevel: 95,
      tools: ["Productboard", "Miro", "Jira Discovery"]
    }
  },
  {
    id: "tech",
    title: "Technical Literacy",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    role: "The 'Hands' (Broad Skills)",
    description: "Prototyping ideas with code to validate feasibility early.",
    tags: ["React", "AI Engineering", "API Design"],
    className: "md:col-span-1 bg-blue-500/5 border-blue-500/20",
    details: {
      philosophy: "A PM should know enough to empathize with engineers and challenge estimates, but not enough to write production code.",
      frameworks: [
        { name: "Rapid Prototyping", desc: "Using Lovable/v0 to build 'throwaway' MVPs for user testing." },
        { name: "Prompt Engineering", desc: "Structuring LLM context windows for consistent outputs." },
        { name: "Component Thinking", desc: "Designing atomic UI systems that scale." }
      ],
      masteryLevel: 75,
      tools: ["VS Code", "Lovable", "Postman", "GitHub"]
    }
  },
  {
    id: "ops",
    title: "Operational Excellence",
    icon: <Settings className="w-6 h-6 text-orange-500" />,
    role: "The 'Backbone' (Core)",
    description: "Optimizing the 'Machine' that builds the product.",
    tags: ["Process Design", "Stakeholder Mgmt", "Agile"],
    className: "md:col-span-1 bg-orange-500/5 border-orange-500/20",
    details: {
      philosophy: "Process should be a guardrail, not a gate. Good ops makes the right thing the easy thing to do.",
      frameworks: [
        { name: "Six Sigma (Lean)", desc: "Systematically removing waste (Muda) from the delivery lifecycle." },
        { name: "Stakeholder Mapping", desc: "Identifying champions and detractors early in the project." },
        { name: "SLA Definition", desc: "Setting clear expectations for delivery and quality." }
      ],
      masteryLevel: 90,
      tools: ["Notion", "Linear", "Excel (Advanced)"]
    }
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6 text-green-500" />,
    description: "Measuring Impact",
    tags: ["SQL Basics", "KPI Tracking", "A/B Testing"],
    className: "md:col-span-1 bg-green-500/5 border-green-500/20",
    details: {
      philosophy: "Data aims the gun; intuition pulls the trigger. I use data to inform decisions, not make them for me.",
      frameworks: [
        { name: "North Star Metric", desc: "Aligning all features to a single leading indicator of value." },
        { name: "Cohort Analysis", desc: "Understanding retention by user join date." },
        { name: "Funnel Optimization", desc: "Identifying where users drop off in the journey." }
      ],
      masteryLevel: 80,
      tools: ["Mixpanel", "Amplitude", "Tableau"]
    }
  },
  {
    id: "design",
    title: "Design & UX",
    icon: <LayoutTemplate className="w-6 h-6 text-pink-500" />,
    description: "User Centricity",
    tags: ["Figma", "User Journey", "Wireframing"],
    className: "md:col-span-2 bg-pink-500/5 border-pink-500/20",
    details: {
      philosophy: "You are not the user. I fight for the user's perspective in every technical discussion.",
      frameworks: [
        { name: "Double Diamond", desc: "Diverging on problems/solutions, converging on definitions/delivery." },
        { name: "Jobs to be Done", desc: "Focusing on the user's intent, not just their demographics." },
        { name: "Heuristic Evaluation", desc: "Auditing interfaces against Jakob Nielsen's usability principles." }
      ],
      masteryLevel: 85,
      tools: ["Figma", "Whimsical", "Maze"]
    }
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skillCategories[0] | null>(null);

  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            The T-Shaped Skillset
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My competency matrix. Click on any domain to see my frameworks, philosophy, and tools.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedSkill(category)}
              className={`p-6 rounded-3xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${category.className}`}
            >
              <div className="flex items-start justify-between mb-6">
                 <div className="p-3 bg-background/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm group-hover:scale-110 transition-transform duration-500">
                   {category.icon}
                 </div>
                 <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                   {category.role}
                 </Badge>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {category.title}
                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                   {category.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-background/50 backdrop-blur-md border border-border/50 rounded-lg text-muted-foreground group-hover:border-primary/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The "Deep Dive" Modal */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-2xl bg-card border-border shadow-2xl overflow-y-auto max-h-[85vh]">
          <DialogHeader className="mb-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-xl">
                 {selectedSkill?.icon}
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold">{selectedSkill?.title}</DialogTitle>
                <DialogDescription className="text-base font-medium text-primary">
                  {selectedSkill?.role}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-8">
            {/* Philosophy Block */}
            <div className="p-5 rounded-xl bg-secondary/30 border border-border/50 italic text-muted-foreground relative">
                <span className="absolute -top-3 -left-2 text-4xl text-primary/20">"</span>
                {selectedSkill?.details.philosophy}
            </div>

            {/* Frameworks List */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Core Frameworks
              </h4>
              <div className="grid gap-3">
                {selectedSkill?.details.frameworks.map((fw, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50">
                    <div className="mt-1">
                      <Zap className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{fw.name}</p>
                      <p className="text-xs text-muted-foreground">{fw.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proficiency & Tools */}
            <div className="grid grid-cols-2 gap-8">
               <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Mastery
                  </h4>
                  <div className="flex items-center gap-3">
                    <Progress value={selectedSkill?.details.masteryLevel} className="h-2" />
                    <span className="text-xs font-bold">{selectedSkill?.details.masteryLevel}%</span>
                  </div>
               </div>
               <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                    Tools Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill?.details.tools.map(tool => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
               </div>
            </div>

          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
