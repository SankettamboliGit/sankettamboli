import { useState } from "react";
import { 
  Brain, Code2, Settings, Database, LayoutTemplate, 
  ChevronRight, Layers, Zap, Users, X, 
  Terminal, BarChart, Workflow, PenTool, Target
} from "lucide-react";
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

// --- Custom Visual Components for Card Headers ---

const StrategyVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-purple-500/20 transition-colors duration-500">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />
    <Target className="w-16 h-16 text-purple-500/40 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform duration-500" />
    <div className="flex gap-4">
      <div className="w-8 h-8 rounded-full border-2 border-purple-500/30 animate-pulse" />
      <div className="w-8 h-8 rounded-full border-2 border-purple-500/30 animate-pulse delay-75" />
      <div className="w-8 h-8 rounded-full border-2 border-purple-500/30 animate-pulse delay-150" />
    </div>
  </div>
);

const TechVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-blue-500/20 transition-colors duration-500">
    <Terminal className="w-20 h-20 text-blue-500/10 absolute top-2 right-2" />
    <div className="space-y-2 p-4 w-full opacity-60">
      <div className="h-2 w-2/3 bg-blue-500/30 rounded animate-pulse" />
      <div className="h-2 w-3/4 bg-blue-500/20 rounded delay-75" />
      <div className="h-2 w-1/2 bg-blue-500/20 rounded delay-150" />
    </div>
  </div>
);

const OpsVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-orange-500/20 transition-colors duration-500">
    <Workflow className="w-24 h-24 text-orange-500/10 absolute -left-4 -top-4 group-hover:rotate-12 transition-transform duration-700" />
    <div className="relative z-10 flex gap-1">
      <div className="w-3 h-12 bg-orange-500/20 rounded-full" />
      <div className="w-3 h-16 bg-orange-500/30 rounded-full" />
      <div className="w-3 h-10 bg-orange-500/20 rounded-full" />
    </div>
  </div>
);

const DataVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-background flex items-end justify-center pb-4 gap-2 relative overflow-hidden group-hover:from-green-500/20 transition-colors duration-500">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e1a_1px,transparent_1px),linear-gradient(to_bottom,#22c55e1a_1px,transparent_1px)] bg-[size:14px_14px]" />
    <div className="w-4 h-8 bg-green-500/30 rounded-t-sm group-hover:h-12 transition-all duration-500" />
    <div className="w-4 h-12 bg-green-500/40 rounded-t-sm group-hover:h-16 transition-all duration-500 delay-75" />
    <div className="w-4 h-16 bg-green-500/50 rounded-t-sm group-hover:h-10 transition-all duration-500 delay-100" />
    <div className="w-4 h-10 bg-green-500/30 rounded-t-sm group-hover:h-14 transition-all duration-500 delay-150" />
  </div>
);

const DesignVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-pink-500/20 transition-colors duration-500">
    <PenTool className="w-16 h-16 text-pink-500/10 absolute bottom-2 right-2" />
    <div className="flex gap-4 items-center">
      <div className="w-10 h-10 border-2 border-pink-500/30 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-500" />
      <div className="w-12 h-12 bg-pink-500/20 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-500" />
    </div>
  </div>
);

// --- Data Structure ---

const skillCategories = [
  {
    id: "strategy",
    title: "Product Strategy",
    icon: <Brain className="w-5 h-5 text-purple-500" />,
    role: "The 'Brain'",
    description: "Translating ambiguous goals into executable roadmaps.",
    tags: ["Discovery", "Roadmapping", "GTM"],
    visual: <StrategyVisual />,
    className: "md:col-span-2 bg-card border-purple-500/20 hover:border-purple-500/50",
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
    icon: <Code2 className="w-5 h-5 text-blue-500" />,
    role: "The 'Hands'",
    description: "Prototyping ideas to validate feasibility.",
    tags: ["React", "AI Engineering", "API Design"],
    visual: <TechVisual />,
    className: "md:col-span-1 bg-card border-blue-500/20 hover:border-blue-500/50",
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
    icon: <Settings className="w-5 h-5 text-orange-500" />,
    role: "The 'Backbone'",
    description: "Optimizing the 'Machine' that builds the product.",
    tags: ["Process Design", "Stakeholder Mgmt"],
    visual: <OpsVisual />,
    className: "md:col-span-1 bg-card border-orange-500/20 hover:border-orange-500/50",
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
    icon: <Database className="w-5 h-5 text-green-500" />,
    description: "Measuring Impact",
    tags: ["SQL Basics", "KPI Tracking"],
    visual: <DataVisual />,
    className: "md:col-span-1 bg-card border-green-500/20 hover:border-green-500/50",
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
    icon: <LayoutTemplate className="w-5 h-5 text-pink-500" />,
    description: "User Centricity",
    tags: ["Figma", "User Journey", "Wireframing"],
    visual: <DesignVisual />,
    className: "md:col-span-2 bg-card border-pink-500/20 hover:border-pink-500/50",
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
      {/* Background Pattern */}
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

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedSkill(category)}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer group hover:shadow-xl hover:-translate-y-1 ${category.className}`}
            >
              {/* Animated CSS Header */}
              <div className="h-32 w-full relative overflow-hidden border-b border-border/50">
                {category.visual}
                
                {/* Icon Badge */}
                <div className="absolute bottom-3 left-6">
                   <div className="p-2 bg-background/90 backdrop-blur-sm rounded-xl border border-border shadow-sm">
                      {category.icon}
                   </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-4">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                     {category.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-secondary/50 border border-border/50 rounded-md text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The "Deep Dive" Modal */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-lg p-0 border-none shadow-2xl bg-card overflow-hidden max-h-[90vh] flex flex-col">
          
          {/* Modal Header with Visual */}
          <div className="relative h-32 w-full shrink-0">
            {selectedSkill?.visual}
            
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
              <div className="p-2 bg-background/90 rounded-lg backdrop-blur-sm shadow-sm border border-border">
                 {selectedSkill?.icon}
              </div>
              <div className="bg-background/50 backdrop-blur-md px-3 py-1 rounded-lg">
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

          {/* Scrollable Content Area */}
          <div className="p-6 space-y-6 overflow-y-auto">
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
