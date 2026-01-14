import { useState } from "react";
import { 
  Brain, Code2, Settings, Database, LayoutTemplate, 
  Layers, Zap, Users, X, ArrowUpRight, Target
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// --- Visuals ---
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

// --- Data ---
const skillCategories = [
  {
    id: "strategy",
    title: "Product & Agile",
    role: "The Brain",
    description: "Roadmapping, prioritization, and outcome-focused planning. I translate business goals into actionable backlogs.",
    tags: ["Roadmapping", "Scrum", "RICE"],
    visual: <StrategyVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "A roadmap is a hypothesis, not a promise. I prioritize ruthlessly and defend 'No' as much as 'Yes'.",
      frameworks: [{ name: "Opportunity Solution Tree", desc: "Connecting outcomes to experiments" }, { name: "RICE / MoSCoW", desc: "Data-informed prioritization" }],
      insight: "My Scrum Master and AI Product Management certifications give me structured frameworks, but 9 years of ops taught me when to adapt them.",
      masteryLevel: 90,
      tools: ["Jira", "Linear", "Productboard"]
    }
  },
  {
    id: "ops",
    title: "Operations & Systems",
    role: "The Backbone",
    description: "Process design, SLA definition, and workflow optimization. I make the right thing easy to do.",
    tags: ["Six Sigma", "Process Design", "SLAs"],
    visual: <OpsVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Good operations are invisible. If people notice the process, it's broken.",
      frameworks: [{ name: "Lean Six Sigma", desc: "Eliminating waste systematically" }, { name: "Capacity Planning", desc: "Matching resources to demand" }],
      insight: "My Lean Six Sigma certification complements hands-on experience optimizing recruitment pipelines and internal SaaS platforms.",
      masteryLevel: 95,
      tools: ["Excel", "ATS Platforms", "ServiceNow (exposure)"]
    }
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Defining metrics, building dashboards, and making data-backed decisions. I measure what matters.",
    tags: ["KPIs", "Dashboards", "SQL Basics"],
    visual: <DataVisual />,
    className: "md:col-span-1",
    role: "The Compass",
    details: {
      philosophy: "If you can't measure it, you can't improve it. Every decision should tie back to a metric.",
      frameworks: [{ name: "North Star Metric", desc: "Single focus for the team" }, { name: "Funnel Analysis", desc: "Finding and fixing drop-offs" }],
      insight: "I've built revenue dashboards that identified leakages and informed strategic corrections at leadership level.",
      masteryLevel: 80,
      tools: ["Excel", "Tableau", "Google Sheets"]
    }
  },
  {
    id: "tech",
    title: "Tools & Platforms",
    role: "The Hands",
    description: "Configuring SaaS platforms, rapid prototyping, and understanding technical constraints without being a developer.",
    tags: ["SaaS Config", "ATS", "AI Tools"],
    visual: <TechVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Know enough to challenge estimates and prototype ideas. I don't need a translator for dev teams.",
      frameworks: [{ name: "Rapid Prototyping", desc: "Validate before you build" }, { name: "Platform Thinking", desc: "Configuration over custom code" }],
      insight: "I built this portfolio using AI-assisted tools (Lovable) in under 48 hours—demonstrating my ability to move from idea to working product.",
      masteryLevel: 75,
      tools: ["Lovable", "V0", "Figma", "Notion"]
    }
  },
  {
    id: "design",
    title: "Collaboration & Leadership",
    description: "Aligning stakeholders, running feedback loops, and communicating across functions.",
    tags: ["Stakeholder Mgmt", "Cross-Functional"],
    visual: <DesignVisual />,
    role: "The Connector",
    className: "md:col-span-2",
    details: {
      philosophy: "The best product work happens at the intersection of business, users, and technology. I've spent 9 years navigating that intersection.",
      frameworks: [{ name: "User Feedback Loops", desc: "Continuous discovery" }, { name: "Stakeholder Mapping", desc: "Knowing who to align and when" }],
      insight: "From vendors to C-suite, I've managed relationships across the entire value chain—and I bring that connector mindset to product work.",
      masteryLevel: 90,
      tools: ["Slack", "Zoom", "Miro"]
    }
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skillCategories[0] | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          {/* BADGE REMOVED */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Expertise
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg">
            Product-relevant skills built through 9 years of operational leadership.
          </p>
        </div>

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
                active:scale-95
                ${category.className}
              `}
            >
              <div className="h-32 w-full relative overflow-hidden border-b border-white/5">
                 {category.visual}
              </div>

              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6 line-clamp-2">
                   {category.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-lg text-white/50"
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

      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="max-w-lg w-[95vw] rounded-3xl p-0 border-white/10 bg-black/90 backdrop-blur-3xl text-white [&>button]:hidden">
          <div className="relative h-32 w-full shrink-0 bg-gradient-to-b from-white/5 to-transparent">
            {selectedSkill?.visual}
            <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>
          <div className="p-6 md:p-8 space-y-6 overflow-y-auto max-h-[60vh]">
            <div className="flex justify-between items-start">
               <DialogTitle className="text-xl md:text-2xl font-bold">{selectedSkill?.title}</DialogTitle>
               <Badge variant="outline" className="border-white/10 text-white/50">{selectedSkill?.role}</Badge>
            </div>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 italic text-white/70 text-sm">
                "{selectedSkill?.details.philosophy}"
            </div>
            
            <div className="grid gap-3">
                {selectedSkill?.details.frameworks.map((fw, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5">
                    <div className="mt-0.5">
                      <Zap className="w-4 h-4 text-yellow-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{fw.name}</p>
                      <p className="text-xs text-white/50">{fw.desc}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <Target className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <p className="text-sm text-white/80">
                   <span className="font-bold text-blue-400">Why it matters:</span> {selectedSkill?.details.insight}
                </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/80" style={{ width: `${selectedSkill?.details.masteryLevel}%` }} />
                </div>
                <span className="text-sm font-bold text-white">{selectedSkill?.details.masteryLevel}% Mastery</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
