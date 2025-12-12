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

// --- Compact Visuals ---

const StrategyVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-500/5 to-transparent">
    <div className="p-3 rounded-full bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.2)] border border-purple-500/20">
      <Brain className="w-8 h-8 text-purple-200" />
    </div>
  </div>
);

const TechVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-500/5 to-transparent">
    <div className="p-3 rounded-full bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-500/20">
      <Code2 className="w-8 h-8 text-blue-200" />
    </div>
  </div>
);

const OpsVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-orange-500/5 to-transparent">
    <div className="p-3 rounded-full bg-orange-500/10 shadow-[0_0_30px_rgba(249,115,22,0.2)] border border-orange-500/20">
      <Settings className="w-8 h-8 text-orange-200" />
    </div>
  </div>
);

const DataVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-green-500/5 to-transparent">
    <div className="p-3 rounded-full bg-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.2)] border border-green-500/20">
      <Database className="w-8 h-8 text-green-200" />
    </div>
  </div>
);

const DesignVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-pink-500/5 to-transparent">
    <div className="p-3 rounded-full bg-pink-500/10 shadow-[0_0_30px_rgba(236,72,153,0.2)] border border-pink-500/20">
      <LayoutTemplate className="w-8 h-8 text-pink-200" />
    </div>
  </div>
);

// --- Data Structure ---

const skillCategories = [
  {
    id: "strategy",
    title: "Product Strategy",
    role: "The Brain",
    description: "Turning ambiguity into clear roadmaps.",
    tags: ["Discovery", "Roadmapping"],
    visual: <StrategyVisual />,
    className: "md:col-span-1", // Compact Grid
    details: {
      philosophy: "Strategy without execution is hallucination.",
      frameworks: [
        { name: "Opportunity Tree", desc: "Mapping outcomes." },
        { name: "RICE Scoring", desc: "Quantifying priority." }
      ],
      masteryLevel: 95,
      tools: ["Productboard", "Miro"]
    }
  },
  {
    id: "tech",
    title: "Tech Literacy",
    role: "The Hands",
    description: "Prototyping to validate feasibility.",
    tags: ["React", "AI Engineering"],
    visual: <TechVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Know enough to challenge estimates.",
      frameworks: [
        { name: "Rapid Prototyping", desc: "Throwaway MVPs." },
        { name: "Prompt Eng.", desc: "LLM Context." }
      ],
      masteryLevel: 75,
      tools: ["VS Code", "Lovable"]
    }
  },
  {
    id: "ops",
    title: "Ops Excellence",
    role: "The Backbone",
    description: "Optimizing the build machine.",
    tags: ["Process Design", "Agile"],
    visual: <OpsVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Good ops makes the right thing easy.",
      frameworks: [
        { name: "Six Sigma", desc: "Removing waste." },
        { name: "SLA Definition", desc: "Clear expectations." }
      ],
      masteryLevel: 90,
      tools: ["Linear", "Excel"]
    }
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Measuring Impact.",
    tags: ["SQL Basics", "KPIs"],
    visual: <DataVisual />,
    className: "md:col-span-1",
    role: "The Compass",
    details: {
      philosophy: "Data aims the gun; intuition pulls the trigger.",
      frameworks: [
        { name: "North Star", desc: "Key Value Indicator." },
        { name: "Funnel Ops", desc: "Fixing drop-offs." }
      ],
      masteryLevel: 80,
      tools: ["Mixpanel", "Tableau"]
    }
  },
  {
    id: "design",
    title: "Design & UX",
    description: "User Centricity.",
    tags: ["Figma", "User Journey"],
    visual: <DesignVisual />,
    role: "The Empathy",
    className: "md:col-span-2", // Feature Card
    details: {
      philosophy: "I fight for the user's perspective.",
      frameworks: [
        { name: "Jobs to be Done", desc: "Focusing on intent." },
        { name: "Heuristic Eval", desc: "Auditing usability." }
      ],
      masteryLevel: 85,
      tools: ["Figma", "Maze"]
    }
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skillCategories[0] | null>(null);

  return (
    <section id="skills" className="py-24 px-6 bg-[#030303] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <Badge variant="outline" className="mb-3 border-white/20 text-white/70 backdrop-blur-md px-3 py-0.5 text-[10px] uppercase tracking-widest">
            Competency Matrix
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
            The T-Shaped Skillset
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base">
            Deep operational expertise combined with broad technical strategy.
          </p>
        </div>

        {/* The Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedSkill(category)}
              className={`
                group relative overflow-hidden rounded-2xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                hover:shadow-lg hover:-translate-y-0.5
                ${category.className}
              `}
            >
              {/* Visual Header - Compact */}
              <div className="h-28 w-full relative overflow-hidden border-b border-white/5">
                 {category.visual}
              </div>

              {/* Card Content - Compact */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs font-medium text-white/60 leading-relaxed mb-4 line-clamp-2">
                   {category.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-md text-white/50 group-hover:text-white/80 transition-colors"
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

      {/* The Modal */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-lg p-0 border-white/10 bg-black/90 backdrop-blur-3xl shadow-2xl overflow-hidden rounded-2xl text-white">
          <div className="relative h-28 w-full shrink-0 bg-gradient-to-b from-white/5 to-transparent">
            {selectedSkill?.visual}
            <DialogClose className="absolute top-4 right-4 rounded-full bg-white/10 p-1.5 hover:bg-white/20 text-white transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>
          <div className="p-6 space-y-6">
            <DialogTitle className="text-xl font-bold">{selectedSkill?.title}</DialogTitle>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 italic text-white/70 text-sm">
                "{selectedSkill?.details.philosophy}"
            </div>
            {/* ... rest of modal content ... */}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
