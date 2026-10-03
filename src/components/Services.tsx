import { useState } from "react";
import {
  Compass,
  Map,
  Users,
  BarChart3,
  Layers,
  Server,
  X,
  ArrowUpRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

// Neutral monochrome visual well
const IconWell = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-white/[0.03] to-transparent">
    <div className="p-4 rounded-full bg-white/5 border border-white/10 text-white/70">
      {children}
    </div>
  </div>
);

const services = [
  {
    title: "Requirements & Scope",
    description:
      "Translating client goals and SOW deliverables into clear, feasible, prioritized requirements.",
    visual: <IconWell><Compass className="w-8 h-8" /></IconWell>,
    details: {
      approach:
        "Shared understanding of scope, acceptance criteria, milestones, and market feasibility reduces churn before delivery begins.",
      process: ["Stakeholder Alignment", "SOW Translation", "Phased Planning"],
      tools: ["ServiceNow Domain", "Excel", "Notion"],
      artifacts: ["Role Requirements", "Hiring Plan", "Acceptance Criteria"],
    },
  },
  {
    title: "Program Delivery",
    description:
      "Cross-functional delivery across teams, clients, and vendors against milestones, SLAs, and outcomes.",
    visual: <IconWell><Map className="w-8 h-8" /></IconWell>,
    details: {
      approach:
        "Delivery becomes predictable when commitments, dependencies, ownership, and escalation paths are explicit.",
      process: ["Capacity Planning", "SLA Management", "Risk Escalation"],
      tools: ["Excel", "ATS Platforms", "Dashboards"],
      artifacts: ["Delivery Plan", "SLA Dashboard", "Risk Register"],
    },
  },
  {
    title: "Internal Product Ownership",
    description:
      "Converting SaaS/ATS user feedback into vendor enhancements, validated releases, and stronger adoption.",
    visual: <IconWell><Users className="w-8 h-8" /></IconWell>,
    details: {
      approach:
        "Internal platforms improve when users, operational data, and vendor delivery stay in one feedback loop.",
      process: ["Feedback Gathering", "Enhancement Prioritization", "Release Validation"],
      tools: ["JobDiva", "Ceipal", "Direct Interviews"],
      artifacts: ["Feature Requests", "Validation Notes", "Data Standards"],
    },
  },
  {
    title: "Metrics & Reporting",
    description:
      "Defining success metrics, building dashboards, delivering actionable insights to stakeholders.",
    visual: <IconWell><BarChart3 className="w-8 h-8" /></IconWell>,
    details: {
      approach:
        "If you can't measure it, you can't improve it. Revenue dashboards that identified leakages.",
      process: ["North Star Definition", "Dashboard Design", "Leakage Identification"],
      tools: ["Microsoft Excel", "ATS Reporting", "Data Analysis"],
      artifacts: ["KPI Dashboard", "Revenue Reports", "Growth Projections"],
    },
  },
  {
    title: "Process Design",
    description:
      "Designing workflows, defining SLAs, optimizing operations to reduce friction.",
    visual: <IconWell><Layers className="w-8 h-8" /></IconWell>,
    details: {
      approach:
        "Good operations make the right action clear, measurable, and repeatable across teams and time zones.",
      process: ["Workflow Mapping", "Data Governance", "Change Management"],
      tools: ["ATS Platforms", "Excel", "Notion"],
      artifacts: ["Process Documentation", "Governance Standards", "Coverage Plan"],
    },
  },
  {
    title: "ServiceNow SOW Delivery",
    description:
      "ServiceNow role scoping and delivery across ITSM, ITOM, GRC, HRSD, CSM, and CMDB workflows.",
    visual: <IconWell><Server className="w-8 h-8" /></IconWell>,
    details: {
      approach:
        "ServiceNow SOW delivery requires translating fixed outcomes into precise role requirements and phased deployment plans.",
      process: ["SOW Scoping", "Role Mapping", "Acceptance Alignment"],
      tools: ["ServiceNow", "ITSM/ITOM/GRC", "Enterprise Workflows"],
      artifacts: ["Technical Requirements", "Deployment Plan", "Acceptance Criteria"],
    },
  },
];

type Service = (typeof services)[number];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 px-6 bg-[#030303] relative">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display font-semibold text-display-lg text-white mb-4">
            How I Add Value
          </h2>
          <p className="text-white/60 text-base md:text-lg">
             Practical leadership across delivery, product operations, and enterprise workflows.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 70}>
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="group relative surface surface-hover rounded-2xl overflow-hidden cursor-pointer w-full text-left h-full"
              >
                <div className="h-24 relative">{service.visual}</div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-base font-semibold text-white">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 max-w-lg p-0 overflow-hidden">
          {selectedService && (
            <>
              <div className="h-28 relative">{selectedService.visual}</div>
              <div className="p-6 space-y-5">
                <div className="flex justify-between items-start">
                  <DialogTitle className="font-display text-xl font-semibold text-white">
                    {selectedService.title}
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
                      {selectedService.details.approach}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Process
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.process.map((step) => (
                        <span
                          key={step}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.tools.map((tool) => (
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

                  <div>
                    <h4 className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">
                      Artifacts
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.artifacts.map((artifact) => (
                        <span
                          key={artifact}
                          className="text-xs px-3 py-1 rounded-full bg-[hsl(var(--accent)/0.10)] text-[hsl(var(--accent))] border border-[hsl(var(--accent)/0.25)]"
                        >
                          {artifact}
                        </span>
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

export default Services;
