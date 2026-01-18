import { useState } from "react";
import { 
  Compass, Map, Users, BarChart3, Layers, Server,
  X, ArrowUpRight
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// --- Visual Components ---
const DiscoveryVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-500/5 to-transparent">
    <div className="p-4 rounded-full bg-blue-500/10 border border-blue-500/20">
      <Compass className="w-8 h-8 text-blue-200" />
    </div>
  </div>
);
const RoadmapVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-500/5 to-transparent">
    <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20">
      <Map className="w-8 h-8 text-purple-200" />
    </div>
  </div>
);
const FeedbackVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-green-500/5 to-transparent">
    <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20">
      <Users className="w-8 h-8 text-green-200" />
    </div>
  </div>
);
const MetricsVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-orange-500/5 to-transparent">
    <div className="p-4 rounded-full bg-orange-500/10 border border-orange-500/20">
      <BarChart3 className="w-8 h-8 text-orange-200" />
    </div>
  </div>
);
const ProcessVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-pink-500/5 to-transparent">
    <div className="p-4 rounded-full bg-pink-500/10 border border-pink-500/20">
      <Layers className="w-8 h-8 text-pink-200" />
    </div>
  </div>
);
const PlatformVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-cyan-500/5 to-transparent">
    <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-500/20">
      <Server className="w-8 h-8 text-cyan-200" />
    </div>
  </div>
);

const services = [
  {
    icon: Compass,
    title: "Product Discovery",
    description: "Uncovering user pain points, aligning stakeholders, defining problem statements before solutions.",
    visual: <DiscoveryVisual />,
    details: {
      approach: "Best products start with shared problem understanding. Requirement definition across multi-stakeholder environments.",
      process: ["Stakeholder Interviews", "Problem Definition (HMW)", "Requirement Documentation"],
      tools: ["Miro", "FigJam", "Notion"],
      artifacts: ["User Journey Map", "Problem Statement", "Requirements Doc"]
    }
  },
  {
    icon: Map,
    title: "Roadmap & Prioritization",
    description: "Outcome-focused roadmaps balancing business goals, user needs, and technical constraints.",
    visual: <RoadmapVisual />,
    details: {
      approach: "A roadmap is a strategic communication tool. Aligning leadership, teams, and vendors.",
      process: ["RICE/MoSCoW Prioritization", "Theme Definition", "Dependency Mapping"],
      tools: ["Jira", "Linear", "Excel"],
      artifacts: ["Now-Next-Later Roadmap", "Release Plan", "Risk Register"]
    }
  },
  {
    icon: Users,
    title: "User Feedback Loops",
    description: "Continuous discovery systems to validate assumptions and incorporate user insights.",
    visual: <FeedbackVisual />,
    details: {
      approach: "Data shows what is happening. Users explain why. Feedback loops across users, leadership, and vendors.",
      process: ["User Interviews", "Feedback Collection", "Insight Synthesis"],
      tools: ["Google Forms", "Hotjar", "Direct Interviews"],
      artifacts: ["User Insights Report", "Feature Requests", "Usability Findings"]
    }
  },
  {
    icon: BarChart3,
    title: "Metrics & Reporting",
    description: "Defining success metrics, building dashboards, delivering actionable insights to stakeholders.",
    visual: <MetricsVisual />,
    details: {
      approach: "If you can't measure it, you can't improve it. Revenue dashboards that identified leakages.",
      process: ["North Star Definition", "Dashboard Design", "Leakage Identification"],
      tools: ["Excel", "Tableau", "Google Sheets"],
      artifacts: ["KPI Dashboard", "Revenue Reports", "Growth Projections"]
    }
  },
  {
    icon: Layers,
    title: "Process Design",
    description: "Designing workflows, defining SLAs, optimizing operations to reduce friction.",
    visual: <ProcessVisual />,
    details: {
      approach: "Good ops makes the right thing easy. Processes for teams of 20+ across functions.",
      process: ["Workflow Mapping", "SLA Definition", "Gamification Design"],
      tools: ["ATS Platforms", "Excel", "Notion"],
      artifacts: ["Process Documentation", "SLA Framework", "Incentive Plans"]
    }
  },
  {
    icon: Server,
    title: "Platform & Domain Exposure",
    description: "ServiceNow familiarity via recruiting for ITSM roles. Enterprise workflows, user roles, platform thinking.",
    visual: <PlatformVisual />,
    details: {
      approach: "Recruiting ServiceNow Developers and QA gave hands-on understanding of enterprise workflows, incident/change/service processes.",
      process: ["ITSM Concepts", "Enterprise Workflows", "User Roles Understanding"],
      tools: ["ServiceNow (Domain)", "ITSM Frameworks", "Enterprise Platforms"],
      artifacts: ["Technical Requirements", "Platform Thinking", "Process-Driven Systems"]
    }
  },
];

type Service = typeof services[number];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-24 px-6 bg-[#030303] relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">How I Add Value</h2>
          <p className="text-white/50 text-base md:text-lg">PM / PO competencies applied across operations and product.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="h-24 relative">{service.visual}</div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">{service.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 max-w-lg p-0 overflow-hidden">
          {selectedService && (
            <>
              <div className="h-28 relative">{selectedService.visual}</div>
              <div className="p-6 space-y-5">
                <div className="flex justify-between items-start">
                  <DialogTitle className="text-xl font-bold text-white">{selectedService.title}</DialogTitle>
                  <DialogClose className="p-1 rounded-full hover:bg-white/10 transition-colors">
                    <X className="w-4 h-4 text-white/50" />
                  </DialogClose>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Approach</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{selectedService.details.approach}</p>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Process</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.process.map((step) => (
                        <span key={step} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="bg-white/5 text-white/70 border-white/10 text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">Artifacts</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.details.artifacts.map((artifact) => (
                        <span key={artifact} className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300/80 border border-purple-500/20">
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
