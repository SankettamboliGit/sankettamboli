import { useState } from "react";
import { 
  Brain, Settings, Database, Users, X, ArrowUpRight, Target, Wrench
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// --- Visuals ---
const ProductVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-500/5 to-transparent">
    <div className="p-3 rounded-full bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.2)] border border-purple-500/20">
      <Brain className="w-8 h-8 text-purple-200" />
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
const ToolsVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-500/5 to-transparent">
    <div className="p-3 rounded-full bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-500/20">
      <Wrench className="w-8 h-8 text-blue-200" />
    </div>
  </div>
);

// --- Data ---
const skillCategories = [
  {
    id: "product",
    title: "Product & Delivery",
    description: "Product lifecycle, backlog management, requirement definition, Agile execution, stakeholder alignment.",
    tags: ["Roadmapping", "Scrum", "RICE", "Backlog"],
    visual: <ProductVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Roadmaps are hypotheses. Prioritize ruthlessly. Defend 'No' as much as 'Yes'.",
      frameworks: [
        { name: "RICE / MoSCoW", desc: "Data-informed prioritization" },
        { name: "Opportunity Solution Tree", desc: "Connecting outcomes to experiments" }
      ],
      insight: "Scrum Master and AI Product Management certified. 9 years of ops taught me when to adapt frameworks.",
      masteryLevel: 90,
      tools: ["Jira", "Linear", "Notion"]
    }
  },
  {
    id: "ops",
    title: "Operations & Systems",
    description: "Workflow design, process optimization, platform ownership, KPI tracking, data quality.",
    tags: ["Six Sigma", "Process Design", "SLAs", "Capacity"],
    visual: <OpsVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Good operations are invisible. If people notice the process, it's broken.",
      frameworks: [
        { name: "Lean Six Sigma", desc: "Eliminating waste systematically" },
        { name: "Capacity Planning", desc: "Matching resources to demand" }
      ],
      insight: "Lean Six Sigma certified. Optimized recruitment pipelines and internal SaaS platforms.",
      masteryLevel: 95,
      tools: ["Excel", "ATS Platforms", "ServiceNow (exposure)"]
    }
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Defining metrics, building dashboards, funnel analysis, data-informed decisions.",
    tags: ["KPIs", "Dashboards", "Revenue Ops"],
    visual: <DataVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "If you can't measure it, you can't improve it. Every decision ties back to a metric.",
      frameworks: [
        { name: "North Star Metric", desc: "Single focus for the team" },
        { name: "Funnel Analysis", desc: "Finding and fixing drop-offs" }
      ],
      insight: "Built revenue dashboards that identified leakages and informed strategic corrections.",
      masteryLevel: 80,
      tools: ["Excel", "Google Sheets", "Tableau"]
    }
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "ServiceNow (platform exposure), Lovable, Figma, Notion, data and reporting tools.",
    tags: ["ServiceNow", "Lovable", "Figma", "Notion"],
    visual: <ToolsVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Tools should amplify execution, not create overhead. Choose based on team context.",
      frameworks: [
        { name: "No-Code/Low-Code", desc: "Rapid prototyping and deployment" },
        { name: "ITSM Familiarity", desc: "ServiceNow ecosystem exposure" }
      ],
      insight: "Platform familiarity through recruiting for ServiceNow ecosystem—ITSM concepts, enterprise workflows, user roles.",
      masteryLevel: 75,
      tools: ["ServiceNow (domain)", "Lovable", "Figma", "Notion"]
    }
  },
];

type SkillCategory = typeof skillCategories[number];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null);

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Expertise</h2>
          <p className="text-white/50 text-base md:text-lg">Competencies clustered for PM / PO roles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className={`group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-all ${skill.className}`}
            >
              <div className="h-28 relative">{skill.visual}</div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">{skill.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 max-w-lg p-0 overflow-hidden">
          {selectedSkill && (
            <>
              <div className="h-32 relative">{selectedSkill.visual}</div>
              <div className="p-6 space-y-5">
                <div className="flex justify-between items-start">
                  <div>
                    <DialogTitle className="text-xl font-bold text-white">{selectedSkill.title}</DialogTitle>
                  </div>
                  <DialogClose className="p-1 rounded-full hover:bg-white/10 transition-colors">
                    <X className="w-4 h-4 text-white/50" />
                  </DialogClose>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Approach</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{selectedSkill.details.philosophy}</p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Frameworks</h4>
                    <div className="space-y-2">
                      {selectedSkill.details.frameworks.map((f) => (
                        <div key={f.name} className="flex items-start gap-2">
                          <Target className="w-3 h-3 text-purple-400 mt-1 shrink-0" />
                          <div>
                            <span className="text-white/90 text-sm font-medium">{f.name}</span>
                            <span className="text-white/50 text-sm"> — {f.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Insight</h4>
                    <p className="text-white/60 text-sm italic leading-relaxed">{selectedSkill.details.insight}</p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Mastery</h4>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: `${selectedSkill.details.masteryLevel}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.details.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="bg-white/5 text-white/70 border-white/10 text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
