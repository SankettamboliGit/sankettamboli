import { useState } from "react";
import { Brain, Code2, Settings, Database, LayoutTemplate, ChevronRight, Layers, Zap, Users, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Updated Data with Images for the Modal Headers
const skillCategories = [
  {
    id: "strategy",
    title: "Product Strategy",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
    role: "The 'Brain'",
    description: "Translating ambiguous goals into executable roadmaps.",
    tags: ["Discovery", "Roadmapping", "GTM"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/10 via-background to-background border-purple-500/20",
    details: {
      philosophy: "Strategy without execution is hallucination.",
      frameworks: [
        { name: "Opportunity Tree", desc: "Mapping outcomes to opportunities." },
        { name: "RICE Scoring", desc: "Quantifying prioritization." },
        { name: "Lean Canvas", desc: "Validating business models." }
      ],
      masteryLevel: 95,
      tools: ["Productboard", "Miro", "Jira"]
    }
  },
  {
    id: "tech",
    title: "Technical Literacy",
    icon: <Code2 className="w-6 h-6 text-blue-500" />,
    role: "The 'Hands'",
    description: "Prototyping ideas to validate feasibility.",
    tags: ["React", "AI Engineering", "API Design"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 bg-gradient-to-br from-blue-500/10 via-background to-background border-blue-500/20",
    details: {
      philosophy: "Know enough to challenge estimates, not write prod code.",
      frameworks: [
        { name: "Rapid Prototyping", desc: "Building 'throwaway' MVPs." },
        { name: "Prompt Eng.", desc: "Structuring LLM context." },
        { name: "Component Design", desc: "Atomic UI systems." }
      ],
      masteryLevel: 75,
      tools: ["VS Code", "Lovable", "GitHub"]
    }
  },
  {
    id: "ops",
    title: "Operational Excellence",
    icon: <Settings className="w-6 h-6 text-orange-500" />,
    role: "The 'Backbone'",
    description: "Optimizing the 'Machine' that builds the product.",
    tags: ["Process Design", "Stakeholder Mgmt", "Agile"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 bg-gradient-to-br from-orange-500/10 via-background to-background border-orange-500/20",
    details: {
      philosophy: "Good ops makes the right thing the easy thing to do.",
      frameworks: [
        { name: "Six Sigma", desc: "Removing waste (Muda)." },
        { name: "Stakeholder Map", desc: "Identifying champions." },
        { name: "SLA Definition", desc: "Setting clear expectations." }
      ],
      masteryLevel: 90,
      tools: ["Notion", "Linear", "Excel"]
    }
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6 text-green-500" />,
    description: "Measuring Impact",
    tags: ["SQL Basics", "KPI Tracking", "A/B Testing"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-1 bg-gradient-to-br from-green-500/10 via-background to-background border-green-500/20",
    details: {
      philosophy: "Data aims the gun; intuition pulls the trigger.",
      frameworks: [
        { name: "North Star", desc: "Single value indicator." },
        { name: "Cohort Analysis", desc: "Retention by user group." },
        { name: "Funnel Ops", desc: "Identifying drop-offs." }
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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    className: "md:col-span-2 bg-gradient-to-br from-pink-500/10 via-background to-background border-pink-500/20",
    details: {
      philosophy: "I fight for the user's perspective in every discussion.",
      frameworks: [
        { name: "Double Diamond", desc: "Diverge/Converge process." },
        { name: "Jobs to be Done", desc: "Focusing on intent." },
        { name: "Heuristic Eval", desc: "Auditing usability." }
      ],
      masteryLevel: 85,
      tools: ["Figma", "Whimsical", "Maze"]
    }
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skillCategories[0] | null>(null);

  return (
    <section id="skills" className="py-24 px-6 relative bg-background">
      {/* 1. Background Grid Pattern - subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            The T-Shaped Skillset
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My competency matrix. Click on any domain to see my frameworks, philosophy, and tools.
          </p>
        </div>

        {/* 2. The Grid - Removed all animation classes to ensure visibility */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedSkill(category)}
              className={`p-6 rounded-3xl border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between group bg-card ${category.className}`}
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
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
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

      {/* 3. The "Deep Dive" Modal - Reduced Width & Added Image Header */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-lg p-0 border-none shadow-2xl bg-card overflow-hidden">
          
          {/* Modal Image Header */}
          <div className="relative h-32 w-full">
            <img 
              src={selectedSkill?.image} 
              alt={selectedSkill?.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
              <div className="p-2 bg-background/90 rounded-lg backdrop-blur-sm shadow-sm">
                 {selectedSkill?.icon}
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-foreground">{selectedSkill?.title}</DialogTitle>
                <DialogDescription className="text-xs font-medium text-primary">
                  {selectedSkill?.role}
                </DialogDescription>
              </div>
            </div>
            <DialogClose className="absolute top-4 right-4 rounded-full bg-black/20 p-2 hover:bg-black/40 text-white transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>

          <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
            {/* Philosophy Block */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 italic text-muted-foreground relative text-sm">
                <span className="absolute -top-2 -left-1 text-3xl text-primary/20">"</span>
                {selectedSkill?.details.philosophy}
            </div>

            {/* Frameworks List */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Layers className="w-3 h-3" /> Core Frameworks
              </h4>
              <div className="grid gap-2">
                {selectedSkill?.details.frameworks.map((fw, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border/50">
                    <div className="mt-0.5">
                      <Zap className="w-3 h-3 text-yellow-500" />
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
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
                    <Users className="w-3 h-3" /> Mastery
                  </h4>
                  <div className="flex items-center gap-2">
                    <Progress value={selectedSkill?.details.masteryLevel} className="h-1.5" />
                    <span className="text-xs font-bold">{selectedSkill?.details.masteryLevel}%</span>
                  </div>
               </div>
               <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill?.details.tools.map(tool => (
                      <Badge key={tool} variant="secondary" className="text-[10px] px-2 py-0.5 h-6">
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
