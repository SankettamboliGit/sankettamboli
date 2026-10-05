import { useState } from "react";
import { Brain, Settings, Database, Wrench, X, ArrowUpRight, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

// --- Visuals: neutral, monochrome ---
const IconWell = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent">
    <div className="p-3 rounded-full bg-white/5 border border-white/10 text-white/70">
      {children}
    </div>
  </div>
);

const skillCategories = [
  {
    id: "product",
    title: "Product Operations & Agile",
    description:
      "Internal product ownership, requirement prioritization, feedback loops, release validation, Agile execution.",
    tags: ["Product Ownership", "Scrum", "Kanban", "Release Validation"],
    visual: <IconWell><Brain className="w-8 h-8" /></IconWell>,
    details: {
      philosophy:
        "Turn operational needs into prioritized requirements, validated releases, and workflows people trust.",
      frameworks: [
        { name: "Scrum / Kanban", desc: "Structured, adaptable execution" },
        { name: "Feedback Loops", desc: "Connecting user needs to enhancements" },
      ],
      insight:
        "Owned SaaS/ATS feedback, enhancement prioritization, vendor coordination, release validation, and data governance.",
      masteryLevel: 90,
      tools: ["ATS Platforms", "Figma", "Notion", "Lovable"],
    },
  },
  {
    id: "ops",
    title: "Delivery & Program Leadership",
    description:
      "Program delivery, SLA management, capacity planning, change management, and cross-functional leadership.",
    tags: ["Program Delivery", "SLAs", "Capacity", "Change Management"],
    visual: <IconWell><Settings className="w-8 h-8" /></IconWell>,
    details: {
      philosophy:
        "Reliable delivery starts with clear scope, measurable commitments, and accountable ownership.",
      frameworks: [
        { name: "SLA Management", desc: "Connecting commitments to delivery controls" },
        { name: "Capacity Planning", desc: "Matching global coverage to demand" },
      ],
      insight:
        "Leads a global India/U.S. team and mentors team leads while managing stakeholders and vendor partners.",
      masteryLevel: 95,
      tools: ["Excel", "JobDiva", "Ceipal", "ServiceNow"],
    },
  },
  {
    id: "data",
    title: "Governance & Analytics",
    description:
      "Delivery KPIs, dashboards, data governance, forecasting, and data-informed decisions.",
    tags: ["KPIs", "Dashboards", "Data Governance", "Forecasting"],
    visual: <IconWell><Database className="w-8 h-8" /></IconWell>,
    details: {
      philosophy:
        "If you can't measure it, you can't improve it. Every decision ties back to a metric.",
      frameworks: [
        { name: "Delivery KPIs", desc: "Fill rate, ramp time, and SLA adherence" },
        { name: "Revenue Analysis", desc: "Finding leakages and bottlenecks" },
      ],
      insight:
        "Built revenue dashboards that identified leakages and informed strategic corrections.",
      masteryLevel: 80,
      tools: ["Microsoft Excel", "ATS Reporting", "Data Analysis"],
    },
  },
  {
    id: "tools",
    title: "ServiceNow & AI Platforms",
    description:
      "ServiceNow enterprise workflows, Salesforce Agentforce, ATS ecosystems, and generative AI tools.",
    tags: ["ServiceNow", "Agentforce", "ATS", "Generative AI"],
    visual: <IconWell><Wrench className="w-8 h-8" /></IconWell>,
    details: {
      philosophy:
        "Platform knowledge matters when it improves requirements, delivery decisions, and user workflows.",
      frameworks: [
        { name: "Enterprise Workflow", desc: "ITSM, ITOM, GRC, HRSD, CSM, and CMDB" },
        { name: "Agentic AI", desc: "Agentforce Builder and Prompt Builder learning" },
      ],
      insight:
        "Holds 18 ServiceNow micro/suite certifications and 36 Salesforce Trailhead badges as Agentblazer Champion 2026.",
      masteryLevel: 75,
      tools: ["ServiceNow", "Salesforce Agentforce", "JobDiva", "Ceipal", "Lovable"],
    },
  },
];

type SkillCategory = (typeof skillCategories)[number];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null);

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display font-semibold text-display-lg text-white mb-4">
            Expertise
          </h2>
          <p className="text-white/60 text-base md:text-lg">
             Delivery, product operations, governance, and enterprise platform expertise.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((skill, i) => (
            <Reveal key={skill.id} delay={i * 80}>
              <button
                type="button"
                onClick={() => setSelectedSkill(skill)}
                className="group relative surface surface-hover rounded-2xl overflow-hidden cursor-pointer w-full text-left"
              >
                <div className="h-28 relative">{skill.visual}</div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-white">
                      {skill.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                  </div>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 max-w-lg p-0 overflow-hidden">
          {selectedSkill && (
            <>
              <div className="h-32 relative">{selectedSkill.visual}</div>
              <div className="p-6 space-y-5">
                <div className="flex justify-between items-start">
                  <DialogTitle className="font-display text-xl font-semibold text-white">
                    {selectedSkill.title}
                  </DialogTitle>
                  <DialogClose className="p-1 rounded-full hover:bg-white/10 transition-colors" aria-label="Close">
                    <X className="w-4 h-4 text-white/60" />
                  </DialogClose>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Approach
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {selectedSkill.details.philosophy}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Frameworks
                    </h4>
                    <div className="space-y-2">
                      {selectedSkill.details.frameworks.map((f) => (
                        <div key={f.name} className="flex items-start gap-2">
                          <Target className="w-3 h-3 text-white/60 mt-1 shrink-0" />
                          <div>
                            <span className="text-white/90 text-sm font-medium">
                              {f.name}
                            </span>
                            <span className="text-white/60 text-sm"> — {f.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Insight
                    </h4>
                    <p className="text-white/70 text-sm italic leading-relaxed">
                      {selectedSkill.details.insight}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Mastery
                    </h4>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[hsl(var(--accent))]"
                        style={{ width: `${selectedSkill.details.masteryLevel}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.details.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="secondary"
                          className="bg-white/5 text-white/80 border-white/10 text-xs"
                        >
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
