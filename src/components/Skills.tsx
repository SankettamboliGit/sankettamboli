import { useState } from "react";
import { 
  Brain, Code2, Settings, Database, LayoutTemplate, 
  ChevronRight, Layers, Zap, Users, X, ArrowUpRight
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

const skillCategories = [
  {
    id: "strategy",
    title: "Product Strategy",
    icon: <Brain className="w-6 h-6" />,
    role: "The Brain",
    description: "Turning ambiguity into clear, winning roadmaps.",
    tags: ["Discovery", "Roadmapping", "GTM"],
    // Purple Ambient Gradient
    gradient: "from-purple-500/20 via-purple-500/5 to-transparent",
    orbColor: "bg-purple-500",
    className: "md:col-span-2",
    details: {
      philosophy: "Strategy without execution is hallucination. I focus on 'Viable' over 'Visionary'.",
      frameworks: [
        { name: "Opportunity Tree", desc: "Mapping outcomes to opportunities, not just features." },
        { name: "RICE Scoring", desc: "Quantifying prioritization to remove bias." },
        { name: "Lean Canvas", desc: "Validating business models fast." }
      ],
      masteryLevel: 95,
      tools: ["Productboard", "Miro", "Jira Discovery"]
    }
  },
  {
    id: "tech",
    title: "Technical Literacy",
    icon: <Code2 className="w-6 h-6" />,
    role: "The Hands",
    description: "Prototyping with code to validate feasibility.",
    tags: ["React", "AI Engineering"],
    // Blue Ambient Gradient
    gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
    orbColor: "bg-blue-500",
    className: "md:col-span-1",
    details: {
      philosophy: "A PM should know enough to empathize with engineers, not enough to write prod code.",
      frameworks: [
        { name: "Rapid Prototyping", desc: "Using Lovable/v0 for 'throwaway' MVPs." },
        { name: "Prompt Engineering", desc: "Structuring LLM contexts." },
        { name: "Component Thinking", desc: "Atomic UI systems." }
      ],
      masteryLevel: 75,
      tools: ["VS Code", "Lovable", "GitHub"]
    }
  },
  {
    id: "ops",
    title: "Operational Excellence",
    icon: <Settings className="w-6 h-6" />,
    role: "The Backbone",
    description: "Optimizing the 'Machine' that builds the product.",
    tags: ["Process Design", "Stakeholder Mgmt"],
    // Orange Ambient Gradient
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
    orbColor: "bg-orange-500",
    className: "md:col-span-1",
    details: {
      philosophy: "Process should be a guardrail, not a gate. Good ops makes the right thing easy.",
      frameworks: [
        { name: "Six Sigma (Lean)", desc: "Removing waste (Muda)." },
        { name: "Stakeholder Mapping", desc: "identifying champions early." },
        { name: "SLA Definition", desc: "Setting clear delivery expectations." }
      ],
      masteryLevel: 90,
      tools: ["Notion", "Linear", "Excel (Advanced)"]
    }
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <Database className="w-6 h-6" />,
    description: "Measuring Impact",
    role: "The Compass",
    tags: ["SQL Basics", "KPI Tracking"],
    // Green Ambient Gradient
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    orbColor: "bg-emerald-500",
    className: "md:col-span-1",
    details: {
      philosophy: "Data aims the gun; intuition pulls the trigger.",
      frameworks: [
        { name: "North Star Metric", desc: "Aligning features to value." },
        { name: "Cohort Analysis", desc: "Retention by user join date." },
        { name: "Funnel Optimization", desc: "Fixing drop-offs." }
      ],
      masteryLevel: 80,
      tools: ["Mixpanel", "Amplitude", "Tableau"]
    }
  },
  {
    id: "design",
    title: "Design & UX",
    icon: <LayoutTemplate className="w-6 h-6" />,
    description: "User Centricity",
    role: "The Empathy",
    tags: ["Figma", "User Journey"],
    // Pink Ambient Gradient
    gradient: "from-pink-500/20 via-pink-500/5 to-transparent",
    orbColor: "bg-pink-500",
    className: "md:col-span-2",
    details: {
      philosophy: "You are not the user. I fight for the user's perspective.",
      frameworks: [
        { name: "Double Diamond", desc: "Diverging and converging." },
        { name: "Jobs to be Done", desc: "Focusing on intent." },
        { name: "Heuristic Evaluation", desc: "Auditing interfaces." }
      ],
      masteryLevel: 85,
      tools: ["Figma", "Whimsical", "Maze"]
    }
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skillCategories[0] | null>(null);

  return (
    <section id="skills" className="py-32 px-6 relative bg-foreground overflow-hidden">
      
      {/* 1. Global Ambient Light (The "Liquid" Background) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 border-white/20 text-white/70 backdrop-blur-md px-4 py-1">
            Competency Matrix
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            The T-Shaped Skillset
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Combining deep operational expertise with broad technical strategy. <br className="hidden md:block" />
            Click any card to explore my frameworks.
          </p>
        </div>

        {/* 2. The Liquid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedSkill(category)}
              className={`
                group relative overflow-hidden rounded-[2rem] 
                bg-white/5 backdrop-blur-2xl 
                border border-white/10 hover:border-white/20
                transition-all duration-500 ease-out
                hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]
                hover:-translate-y-1 cursor-pointer
                ${category.className}
              `}
            >
              {/* Internal Ambient Orb (Fills the "Empty" space) */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 ${category.orbColor} opacity-20 blur-[80px] group-hover:opacity-30 transition-opacity duration-700`} />
              
              {/* Content Container */}
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                
                {/* Header: Icon & Arrow */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  <div className="p-2 rounded-full bg-white/5 text-white/50 group-hover:text-white group-hover:bg-white/20 transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Body Text */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-white/60 uppercase tracking-widest">
                    {category.role}
                  </p>
                  <p className="text-base text-white/80 leading-relaxed line-clamp-2">
                    {category.description}
                  </p>
                </div>

                {/* Footer: Glass Pills */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-white/90 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover sheen effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* 3. The "Glass Sheet" Modal */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-xl p-0 border-white/10 bg-black/80 backdrop-blur-3xl shadow-2xl overflow-hidden rounded-[2rem] text-white">
          
          {/* Modal Header Area */}
          <div className={`relative h-40 w-full bg-gradient-to-br ${selectedSkill?.gradient}`}>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                   {selectedSkill?.icon}
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                    {selectedSkill?.title}
                  </DialogTitle>
                  <p className="text-white/60 font-medium">{selectedSkill?.role}</p>
                </div>
              </div>
            </div>
            <DialogClose className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white">
              <X className="w-5 h-5" />
            </DialogClose>
          </div>

          <div className="p-8 space-y-8 overflow-y-auto max-h-[60vh]">
            
            {/* Philosophy */}
            <div className="relative pl-6 border-l-2 border-white/20">
              <p className="text-lg text-white/90 italic font-light leading-relaxed">
                "{selectedSkill?.details.philosophy}"
              </p>
            </div>

            {/* Frameworks Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Core Frameworks
              </h4>
              <div className="space-y-3">
                {selectedSkill?.details.frameworks.map((fw, i) => (
                  <div key={i} className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="mt-1 p-1.5 rounded-lg bg-white/5 text-white/80 group-hover:text-yellow-400 group-hover:bg-yellow-400/10 transition-colors">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{fw.name}</p>
                      <p className="text-xs text-white/50 mt-0.5">{fw.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mastery & Tools Split */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
               {/* Mastery Bar */}
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Mastery
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${selectedSkill?.orbColor} opacity-80`} 
                        style={{ width: `${selectedSkill?.details.masteryLevel}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-white/80">{selectedSkill?.details.masteryLevel}%</span>
                  </div>
               </div>

               {/* Tools Badges */}
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill?.details.tools.map(tool => (
                      <Badge key={tool} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-transparent text-[10px] px-3">
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
