import { useState } from "react";
import {
  Compass, Map, Users, BarChart3, Layers, Lightbulb, 
  ArrowRight, CheckCircle2, Cpu, X,
  StickyNote, Calendar, MessageSquare, FileText, Network,
  FileCheck, TrendingUp
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// --- Visual Components ---
const DiscoveryVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent flex items-center justify-center relative overflow-hidden group-hover:from-yellow-500/20 transition-colors duration-500">
    <div className="grid grid-cols-2 gap-2 transform rotate-3 opacity-80">
      <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
      <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
      <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
      <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
    </div>
    <StickyNote className="w-16 h-16 text-yellow-500/20 absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform duration-500" />
  </div>
);

const RoadmapVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center relative overflow-hidden group-hover:from-blue-500/20 transition-colors duration-500">
    <div className="flex flex-col gap-3 w-32 opacity-80">
      <div className="h-3 w-full bg-blue-500/20 rounded-full" />
      <div className="h-3 w-2/3 bg-blue-500/10 rounded-full ml-8" />
      <div className="h-3 w-3/4 bg-blue-500/10 rounded-full ml-4" />
    </div>
    <Calendar className="w-20 h-20 text-blue-500/20 absolute top-2 right-2 group-hover:rotate-12 transition-transform duration-500" />
  </div>
);

const ResearchVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent flex items-center justify-center relative overflow-hidden group-hover:from-purple-500/20 transition-colors duration-500">
    <div className="flex -space-x-4">
      <div className="w-12 h-12 rounded-full border-2 border-white/5 bg-purple-500/20 backdrop-blur-sm" />
      <div className="w-12 h-12 rounded-full border-2 border-white/5 bg-purple-500/10 backdrop-blur-sm" />
      <div className="w-12 h-12 rounded-full border-2 border-white/5 bg-purple-500/5 backdrop-blur-sm" />
    </div>
    <MessageSquare className="w-16 h-16 text-purple-500/20 absolute bottom-2 left-2" />
  </div>
);

const DataVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-transparent flex items-end justify-center pb-6 gap-2 relative overflow-hidden group-hover:from-green-500/20 transition-colors duration-500">
    <div className="w-4 h-8 bg-green-500/20 rounded-t group-hover:h-12 transition-all duration-500" />
    <div className="w-4 h-16 bg-green-500/40 rounded-t group-hover:h-20 transition-all duration-500 delay-75" />
    <div className="w-4 h-12 bg-green-500/30 rounded-t group-hover:h-16 transition-all duration-500 delay-150" />
    <BarChart3 className="w-24 h-24 text-green-500/10 absolute inset-0 m-auto" />
  </div>
);

const SpecVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent flex items-center justify-center relative overflow-hidden group-hover:from-orange-500/20 transition-colors duration-500">
    <div className="w-24 h-32 border-2 border-orange-500/10 bg-white/5 backdrop-blur-sm rounded-lg p-3 space-y-2 transform -rotate-6">
      <div className="h-2 w-1/2 bg-orange-500/30 rounded" />
      <div className="h-2 w-full bg-orange-500/10 rounded" />
      <div className="h-2 w-full bg-orange-500/10 rounded" />
      <div className="h-2 w-3/4 bg-orange-500/10 rounded" />
    </div>
    <FileText className="w-20 h-20 text-orange-500/20 absolute -right-4 -top-4" />
  </div>
);

const AIVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-transparent flex items-center justify-center relative overflow-hidden group-hover:from-pink-500/20 transition-colors duration-500">
    <Network className="w-24 h-24 text-pink-500/20 absolute inset-0 m-auto animate-pulse" />
    <div className="w-3 h-3 bg-pink-500/40 rounded-full absolute top-1/3 left-1/4" />
    <div className="w-2 h-2 bg-pink-500/20 rounded-full absolute bottom-1/3 right-1/4" />
    <svg className="absolute inset-0 w-full h-full opacity-20">
      <line x1="25%" y1="33%" x2="75%" y2="66%" stroke="currentColor" strokeWidth="1" className="text-pink-500" />
    </svg>
  </div>
);

// --- Data ---
const services = [
  {
    icon: Compass,
    title: "Discovery & Requirements",
    description: "Facilitating sessions to uncover user pain points, align stakeholders, and define clear problem statements before jumping to solutions.",
    visual: <DiscoveryVisual />,
    details: {
      philosophy: "The best products start with a shared understanding of the problem, not a list of features. I've spent years gathering requirements across complex multi-stakeholder environments.",
      process: ["Stakeholder Interviews", "Problem Definition (HMW)", "Requirement Documentation"],
      tools: ["Miro", "FigJam", "Notion"],
      artifacts: ["User Journey Map", "Problem Statement Canvas", "Requirements Doc"],
      metric: "Reduction in rework due to misaligned requirements."
    }
  },
  {
    icon: Map,
    title: "Roadmap & Prioritization",
    description: "Creating outcome-focused roadmaps that balance business goals, user needs, and technical constraints.",
    visual: <RoadmapVisual />,
    details: {
      philosophy: "A roadmap is a strategic communication tool, not a release plan. I've built and maintained roadmaps that aligned leadership, teams, and vendors.",
      process: ["Prioritization (RICE/MoSCoW)", "Theme Definition", "Dependency Mapping"],
      tools: ["Jira", "Linear", "Excel"],
      artifacts: ["Now-Next-Later Roadmap", "Release Plan", "Risk Register"],
      metric: "% of roadmap items linked to measurable outcomes."
    }
  },
  {
    icon: Users,
    title: "User Feedback Loops",
    description: "Setting up continuous discovery systems to validate assumptions and incorporate user insights into product decisions.",
    visual: <ResearchVisual />,
    details: {
      philosophy: "Data tells you what is happening; users tell you why. I've run feedback loops across recruiters, candidates, and leadership to drive platform improvements.",
      process: ["User Interviews", "Feedback Collection", "Insight Synthesis"],
      tools: ["Google Forms", "Hotjar", "Direct Interviews"],
      artifacts: ["User Insights Report", "Feature Requests Backlog", "Usability Findings"],
      metric: "Increase in user satisfaction scores post-implementation."
    }
  },
  {
    icon: BarChart3,
    title: "Metrics & Reporting",
    description: "Defining success metrics, building dashboards, and delivering actionable insights to stakeholders.",
    visual: <DataVisual />,
    details: {
      philosophy: "If you can't measure it, you can't improve it. I've built revenue dashboards that identified leakages and informed strategic corrections.",
      process: ["North Star Metric Definition", "Dashboard Design", "Leakage Identification"],
      tools: ["Excel", "Tableau", "Google Sheets"],
      artifacts: ["KPI Dashboard", "Revenue Reports", "Growth Projections"],
      metric: "Revenue leakages identified and corrected."
    }
  },
  {
    icon: Layers,
    title: "Process Design & Ops",
    description: "Designing workflows, defining SLAs, and optimizing operations to reduce friction and improve efficiency.",
    visual: <SpecVisual />,
    details: {
      philosophy: "Good ops makes the right thing easy. I've designed and implemented processes for teams of 20+ across multiple functions.",
      process: ["Workflow Mapping", "SLA Definition", "Gamification Design"],
      tools: ["ATS Platforms", "Excel", "Notion"],
      artifacts: ["Process Documentation", "SLA Framework", "Incentive Plans"],
      metric: "Reduction in process cycle time and attrition."
    }
  },
  {
    icon: Lightbulb,
    title: "ServiceNow Domain Exposure",
    description: "Working familiarity with ITSM, enterprise workflows, and platform-driven product thinking through recruiting for ServiceNow ecosystem roles.",
    visual: <AIVisual />,
    details: {
      philosophy: "Recruiting for ServiceNow Developers and QA professionals gave me hands-on understanding of enterprise workflows, incident/change/service processes, and platform-based products.",
      process: ["ITSM Concepts", "Enterprise Workflows", "User Roles Understanding"],
      tools: ["ServiceNow (Domain Knowledge)", "ITSM Frameworks", "Enterprise Platforms"],
      artifacts: ["Technical Requirements Understanding", "Platform Thinking", "Process-Driven Systems"],
      metric: "This is domain familiarity, not developer experience—but it informs my product thinking for enterprise tools."
    }
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          {/* TITLE CHANGED HERE */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            How I Add Value
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg px-2">
            Practical capabilities built through years of owning systems and delivering outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`
                group relative overflow-hidden rounded-2xl md:rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                active:scale-95
                animate-fade-up stagger-${Math.min(index + 1, 5)}
              `}
            >
              {/* Visual Header */}
              <div className="h-40 w-full relative overflow-hidden border-b border-white/5">
                 {service.visual}
                 
                 {/* Icon Badge */}
                 <div className="absolute bottom-4 left-6">
                    <div className="w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 text-white">
                        <service.icon className="w-6 h-6" />
                    </div>
                 </div>
              </div>

              <div className="p-8 pt-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Full width on mobile */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-xl w-[95vw] rounded-3xl p-0 border-white/10 bg-black/90 backdrop-blur-3xl text-white [&>button]:hidden">
          <div className="relative h-40 w-full shrink-0 bg-gradient-to-b from-white/5 to-transparent">
            {selectedService?.visual}
            <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="p-3 bg-black/50 rounded-xl backdrop-blur-md border border-white/10 text-white shadow-xl">
                    {selectedService && <selectedService.icon className="w-6 h-6" />}
                </div>
                <div>
                  <DialogTitle className="text-2xl font-bold text-white tracking-tight">
                      {selectedService?.title}
                  </DialogTitle>
                  <p className="text-white/50 text-sm">Process Framework</p>
                </div>
            </div>
            <DialogClose className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white">
              <X className="w-5 h-5" />
            </DialogClose>
          </div>
          
          <div className="p-8 space-y-8 overflow-y-auto max-h-[60vh]">
            <div className="relative pl-6 border-l-2 border-white/20">
                <p className="text-lg text-white/90 italic font-light leading-relaxed">
                  "{selectedService?.details.philosophy}"
                </p>
            </div>
            
            {/* Process List */}
            <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4" /> The Process
                </h4>
                <ul className="space-y-4">
                    {selectedService?.details.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                            <div className="mt-1 p-1 rounded-full bg-white/5 border border-white/10 text-green-400 group-hover:bg-green-400/10 transition-colors">
                              <CheckCircle2 className="w-3 h-3" />
                            </div>
                            <span className="text-white/80 text-sm leading-relaxed">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Artifacts & Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4" /> Key Artifacts
                  </h4>
                  <ul className="space-y-2">
                    {selectedService?.details.artifacts.map((art, i) => (
                      <li key={i} className="text-xs text-white/70">• {art}</li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Success Indicator
                  </h4>
                  <p className="text-xs text-white/80 italic leading-relaxed">
                    "{selectedService?.details.metric}"
                  </p>
               </div>
            </div>

            {/* Tools */}
            <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Tools Stack</h4>
                <div className="flex flex-wrap gap-2">
                    {selectedService?.details.tools.map(tool => (
                        <Badge key={tool} variant="secondary" className="px-4 py-1.5 bg-white/5 hover:bg-white/10 text-white border-white/5 font-normal">
                            {tool}
                        </Badge>
                    ))}
                </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
