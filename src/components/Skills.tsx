import { useState } from "react";
import { 
  Brain, Code2, Settings, Database, LayoutTemplate, 
  ChevronRight, Layers, Zap, Users, X, 
  ArrowUpRight
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

// --- Simple, Glowing Visuals ---

const StrategyVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-500/10 to-transparent">
    <div className="p-4 rounded-full bg-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
      <Brain className="w-12 h-12 text-purple-200" />
    </div>
  </div>
);

const TechVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-500/10 to-transparent">
    <div className="p-4 rounded-full bg-blue-500/20 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
      <Code2 className="w-12 h-12 text-blue-200" />
    </div>
  </div>
);

const OpsVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-orange-500/10 to-transparent">
    <div className="p-4 rounded-full bg-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.4)]">
      <Settings className="w-12 h-12 text-orange-200" />
    </div>
  </div>
);

const DataVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-green-500/10 to-transparent">
    <div className="p-4 rounded-full bg-green-500/20 shadow-[0_0_40px_rgba(34,197,94,0.4)]">
      <Database className="w-12 h-12 text-green-200" />
    </div>
  </div>
);

const DesignVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-pink-500/10 to-transparent">
    <div className="p-4 rounded-full bg-pink-500/20 shadow-[0_0_40px_rgba(236,72,153,0.4)]">
      <LayoutTemplate className="w-12 h-12 text-pink-200" />
    </div>
  </div>
);

// --- Data Structure ---

const skillCategories = [
  {
    id: "strategy",
    title: "Product Strategy",
    role: "The Brain",
    description: "Turning ambiguity into clear, executable roadmaps.",
    tags: ["Discovery", "Roadmapping", "GTM"],
    visual: <StrategyVisual />,
    className: "md:col-span-2",
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
    role: "The Hands",
    description: "Prototyping ideas to validate feasibility.",
    tags: ["React", "AI Engineering", "API Design"],
    visual: <TechVisual />,
    className: "md:col-span-1",
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
    role: "The Backbone",
    description: "Optimizing the 'Machine' that builds the product.",
    tags: ["Process Design", "Stakeholder Mgmt"],
    visual: <OpsVisual />,
    className: "md:col-span-1",
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
    description: "Measuring Impact",
    tags: ["SQL Basics", "KPI Tracking"],
    visual: <DataVisual />,
    className: "md:col-span-1",
    role: "The Compass",
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
    description: "User Centricity",
    tags: ["Figma", "User Journey", "Wireframing"],
    visual: <DesignVisual />,
    role: "The Empathy",
    className: "md:col-span-2",
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
    <section id="skills" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-up">
          <Badge variant="outline" className="mb-4 border-white/20 text-white/70 backdrop-blur-md px-4 py-1">
            Competency Matrix
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            The T-Shaped Skillset
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Combining deep operational expertise with broad technical strategy. <br className="hidden md:block"/> Click any card to explore my frameworks.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedSkill(category)}
              className={`
                group relative overflow-hidden rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] hover:-translate-y-1
                ${category.className}
              `}
            >
              {/* Visual Header */}
              <div className="h-40 w-full relative overflow-hidden border-b border-white/5">
                 {category.visual}
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-sm font-medium text-white/60 leading-relaxed mb-6">
                   {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-lg text-white/50 group-hover:text-white/80 transition-colors"
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
        <DialogContent className="max-w-xl p-0 border-white/10 bg-black/80 backdrop-blur-3xl shadow-2xl overflow-hidden rounded-[2rem] text-white">
          
          {/* Modal Header Visual */}
          <div className="relative h-32 w-full shrink-0 bg-gradient-to-b from-white/5 to-transparent">
            {selectedSkill?.visual}
            
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
              <div className="p-2 bg-black/50 rounded-lg backdrop-blur-sm shadow-sm border border-white/10 text-white">
                 <LayoutTemplate className="w-5 h-5" /> 
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-white tracking-tight">{selectedSkill?.title}</DialogTitle>
                <DialogDescription className="text-xs font-medium text-white/50">
                  {selectedSkill?.role}
                </DialogDescription>
              </div>
            </div>
            <DialogClose className="absolute top-4 right-4 rounded-full bg-white/10 p-2 hover:bg-white/20 text-white transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>

          {/* Scrollable Content Area */}
          <div className="p-8 space-y-8 overflow-y-auto max-h-[60vh]">
            {/* Philosophy Block */}
            <div className="relative pl-6 border-l-2 border-white/20">
                <p className="text-lg text-white/90 italic font-light leading-relaxed">
                  "{selectedSkill?.details.philosophy}"
                </p>
            </div>

            {/* Frameworks List */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                <Layers className="w-3 h-3" /> Core Frameworks
              </h4>
              <div className="grid gap-3">
                {selectedSkill?.details.frameworks.map((fw, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group">
                    <div className="mt-0.5 p-1 rounded bg-white/5 text-purple-400">
                      <Zap className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{fw.name}</p>
                      <p className="text-xs text-white/50 leading-relaxed mt-0.5">{fw.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proficiency & Tools */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                    <Users className="w-3 h-3" /> Mastery
                  </h4>
                  <div className="flex items-center gap-3">
                    <Progress value={selectedSkill?.details.masteryLevel} className="h-1.5 flex-1 bg-white/10" />
                    <span className="text-xs font-bold text-white">{selectedSkill?.details.masteryLevel}%</span>
                  </div>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                    Tools Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill?.details.tools.map(tool => (
                      <Badge key={tool} variant="secondary" className="text-[10px] px-3 py-1 bg-white/5 text-white/70 border-white/5 hover:bg-white/10 font-normal">
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
