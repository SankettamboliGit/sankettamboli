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
  <div className="w-full h-full bg-gradient-to-br from-yellow-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
    <div className="grid grid-cols-2 gap-2 transform rotate-3 opacity-80">
      <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
      <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
      <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
      <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-lg shadow-sm backdrop-blur-sm" />
    </div>
    <StickyNote className="w-16 h-16 text-yellow-500/20 absolute -right-2 -bottom-2" />
  </div>
);

const RoadmapVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
    <div className="flex flex-col gap-3 w-32 opacity-80">
      <div className="h-3 w-full bg-blue-500/20 rounded-full" />
      <div className="h-3 w-2/3 bg-blue-500/10 rounded-full ml-8" />
      <div className="h-3 w-3/4 bg-blue-500/10 rounded-full ml-4" />
    </div>
    <Calendar className="w-20 h-20 text-blue-500/20 absolute top-2 right-2 rotate-12" />
  </div>
);

const ResearchVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
    <div className="flex -space-x-4">
      <div className="w-12 h-12 rounded-full border-2 border-white/5 bg-purple-500/20 backdrop-blur-sm" />
      <div className="w-12 h-12 rounded-full border-2 border-white/5 bg-purple-500/10 backdrop-blur-sm" />
      <div className="w-12 h-12 rounded-full border-2 border-white/5 bg-purple-500/5 backdrop-blur-sm" />
    </div>
    <MessageSquare className="w-16 h-16 text-purple-500/20 absolute bottom-2 left-2" />
  </div>
);

const DataVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-transparent flex items-end justify-center pb-6 gap-2 relative overflow-hidden">
    <div className="w-4 h-8 bg-green-500/20 rounded-t" />
    <div className="w-4 h-16 bg-green-500/40 rounded-t" />
    <div className="w-4 h-12 bg-green-500/30 rounded-t" />
    <BarChart3 className="w-24 h-24 text-green-500/10 absolute inset-0 m-auto" />
  </div>
);

const SpecVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
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
  <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-transparent flex items-center justify-center relative overflow-hidden">
    <Network className="w-24 h-24 text-pink-500/20 absolute inset-0 m-auto animate-pulse" />
    <div className="w-3 h-3 bg-pink-500/40 rounded-full absolute top-1/3 left-1/4" />
    <div className="w-2 h-2 bg-pink-500/20 rounded-full absolute bottom-1/3 right-1/4" />
  </div>
);

// --- Data ---
const services = [
  {
    icon: Compass,
    title: "Discovery Workshops",
    description: "Facilitated sessions to uncover user pain points and align stakeholders.",
    visual: <DiscoveryVisual />,
    details: {
      philosophy: "I believe the best products start with a shared understanding of the problem.",
      process: ["Stakeholder Alignment", "Problem Definition (HMW)", "Solution Sketching"],
      tools: ["Miro", "FigJam", "Zoom"],
      artifacts: ["User Journey Map", "Problem Statement Canvas", "Low-Fi Concepts"],
      metric: "Reduction in rework due to misaligned requirements."
    }
  },
  {
    icon: Map,
    title: "Roadmap Planning",
    description: "Strategic roadmaps balancing business goals, user needs, and feasibility.",
    visual: <RoadmapVisual />,
    details: {
      philosophy: "A roadmap is not a release plan; it's a strategic communication tool.",
      process: ["Prioritization (RICE)", "Theme Definition", "Dependency Mapping"],
      tools: ["Jira", "Linear", "Productboard"],
      artifacts: ["Now-Next-Later Roadmap", "Release Plan", "Risk Register"],
      metric: "% of roadmap items linked to strategic OKRs."
    }
  },
  {
    icon: Users,
    title: "User Research",
    description: "Qualitative and quantitative research to validate assumptions.",
    visual: <ResearchVisual />,
    details: {
      philosophy: "Data tells you what is happening; users tell you why.",
      process: ["Persona Recruitment", "JTBD Interviews", "Affinity Mapping"],
      tools: ["Dovetail", "Google Forms", "Hotjar"],
      artifacts: ["User Personas", "Research Insights Report", "Usability Test Recordings"],
      metric: "Increase in user confidence score pre-build."
    }
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description: "Feature prioritization using metrics and business impact analysis.",
    visual: <DataVisual />,
    details: {
      philosophy: "If you can't measure it, you can't improve it.",
      process: ["North Star Metric", "Funnel Analysis", "A/B Testing"],
      tools: ["Mixpanel", "Amplitude", "SQL"],
      artifacts: ["Measurement Plan", "Dashboard Setup", "Experiment Results"],
      metric: "Improvement in feature adoption rates."
    }
  },
  {
    icon: Layers,
    title: "PRDs & Specs",
    description: "Clear user stories that bridge business needs and engineering execution.",
    visual: <SpecVisual />,
    details: {
      philosophy: "Great specs reduce engineering churn. I write for clarity.",
      process: ["User Stories", "Gherkin Acceptance Criteria", "Edge Case Definitions"],
      tools: ["Notion", "Confluence", "Jira"],
      artifacts: ["Product Requirements Doc", "Functional Spec", "QA Checklist"],
      metric: "Decrease in clarification questions during sprint."
    }
  },
  {
    icon: Lightbulb,
    title: "AI Product Strategy",
    description: "Identifying AI/ML opportunities to enhance product value.",
    visual: <AIVisual />,
    details: {
      philosophy: "AI should reduce friction, not just add novelty.",
      process: ["Opportunity Mapping", "Feasibility Check", "Rapid Prototyping"],
      tools: ["OpenAI API", "V0", "Lovable"],
      artifacts: ["AI Use Case Canvas", "Prompt Library", "Feasibility Report"],
      metric: "Time saved per user task via AI automation."
    }
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <Badge variant="outline" className="mb-3 border-white/20 text-white/70 backdrop-blur-md px-3 py-0.5 text-[10px] uppercase tracking-widest">
            Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Product Strategy
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg px-2">
            How I turn ambiguous problems into shipped solutions.
          </p>
        </div>

        {/* 1 Col Mobile, 2 Col Tablet, 3 Col Laptop */}
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
              <div className="h-32 md:h-40 w-full relative overflow-hidden border-b border-white/5">
                 {service.visual}
                 <div className="absolute bottom-3 left-4 md:bottom-4 md:left-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 text-white">
                        <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                 </div>
              </div>

              <div className="p-5 md:p-8 pt-3 md:pt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/30" />
                </div>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Full width on mobile */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-xl w-[95vw] rounded-2xl p-0 border-white/10 bg-black/90 backdrop-blur-3xl text-white [&>button]:hidden">
          <div className="relative h-32 md:h-40 w-full shrink-0 bg-gradient-to-b from-white/5 to-transparent">
            {selectedService?.visual}
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="p-2 bg-black/50 rounded-lg border border-white/10 text-white">
                    {selectedService && <selectedService.icon className="w-5 h-5" />}
                </div>
                <div>
                  <DialogTitle className="text-lg md:text-2xl font-bold text-white">
                      {selectedService?.title}
                  </DialogTitle>
                  <p className="text-white/50 text-xs md:text-sm">Process Framework</p>
                </div>
            </div>
            <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>
          
          <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
            <div className="relative pl-4 border-l-2 border-white/20">
                <p className="text-sm md:text-base text-white/90 italic font-light leading-relaxed">
                  "{selectedService?.details.philosophy}"
                </p>
            </div>
            
            <div>
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                    <Cpu className="w-3 h-3" /> The Process
                </h4>
                <ul className="space-y-3">
                    {selectedService?.details.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 p-1 rounded-full bg-white/5 border border-white/10 text-green-400">
                              <CheckCircle2 className="w-3 h-3" />
                            </div>
                            <span className="text-white/80 text-xs md:text-sm leading-relaxed">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
               <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-2">
                    <FileCheck className="w-3 h-3" /> Key Artifacts
                  </h4>
                  <ul className="space-y-1">
                    {selectedService?.details.artifacts.map((art, i) => (
                      <li key={i} className="text-xs text-white/70">• {art}</li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-3 h-3" /> Success Indicator
                  </h4>
                  <p className="text-xs text-white/80 italic leading-relaxed">
                    "{selectedService?.details.metric}"
                  </p>
               </div>
            </div>

            <div className="pt-4 border-t border-white/10">
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Tools</h4>
                <div className="flex flex-wrap gap-2">
                    {selectedService?.details.tools.map(tool => (
                        <Badge key={tool} variant="secondary" className="px-3 py-1 bg-white/5 text-white/80 border-white/10 font-normal text-[10px]">
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
