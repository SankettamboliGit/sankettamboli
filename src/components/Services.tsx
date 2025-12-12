import { useState } from "react";
import {
  Compass, Map, Users, BarChart3, Layers, Lightbulb, 
  ArrowRight, CheckCircle2, Cpu, X,
  StickyNote, Calendar, MessageSquare, FileText, Network
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

// --- Custom Visual Components (CSS-Based) ---

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

// --- Data Structure ---

const services = [
  {
    icon: Compass,
    title: "Discovery Workshops",
    description: "Facilitated sessions to uncover user pain points and align stakeholders.",
    visual: <DiscoveryVisual />,
    details: {
      philosophy: "I believe the best products start with a shared understanding of the problem.",
      process: [
        "Stakeholder Alignment: Miro sessions to map business goals.",
        "Problem Definition: 'How Might We' exercises to reframe constraints.",
        "Solution Sketching: Rapid low-fidelity wireframing."
      ],
      tools: ["Miro", "FigJam", "Zoom Whiteboard"]
    }
  },
  {
    icon: Map,
    title: "Roadmap Planning",
    description: "Strategic roadmaps balancing business goals, user needs, and feasibility.",
    visual: <RoadmapVisual />,
    details: {
      philosophy: "A roadmap is not a release plan; it's a strategic communication tool.",
      process: [
        "Prioritization: RICE or MoSCoW frameworks to rank features.",
        "Theme Definition: Grouping features into quarterly strategic buckets.",
        "Dependency Mapping: identifying technical risks early."
      ],
      tools: ["Jira", "Linear", "Productboard"]
    }
  },
  {
    icon: Users,
    title: "User Research",
    description: "Qualitative and quantitative research to validate assumptions.",
    visual: <ResearchVisual />,
    details: {
      philosophy: "Data tells you what is happening; users tell you why.",
      process: [
        "Recruitment: Sourcing targeted user personas.",
        "Interviewing: Jobs-to-be-Done (JTBD) style questioning.",
        "Synthesis: Affinity mapping to find common pain point themes."
      ],
      tools: ["Dovetail", "Google Forms", "Zoom"]
    }
  },
  {
    icon: BarChart3,
    title: "Data-Driven Strategy",
    description: "Feature prioritization using metrics and business impact analysis.",
    visual: <DataVisual />,
    details: {
      philosophy: "If you can't measure it, you can't improve it.",
      process: [
        "KPI Definition: Setting North Star metrics before building.",
        "Funnel Analysis: Identifying drop-off points in the user journey.",
        "A/B Testing: Validating hypotheses with live traffic."
      ],
      tools: ["Mixpanel", "Amplitude", "Excel/SQL"]
    }
  },
  {
    icon: Layers,
    title: "PRDs & Specs",
    description: "Clear user stories that bridge business needs and engineering execution.",
    visual: <SpecVisual />,
    details: {
      philosophy: "Great specs reduce engineering churn and ambiguity.",
      process: [
        "User Stories: 'As a [user], I want to [action], so that [benefit]'.",
        "Acceptance Criteria: Gherkin syntax (Given/When/Then).",
        "Edge Cases: Defining error states and empty states upfront."
      ],
      tools: ["Notion", "Confluence", "Jira"]
    }
  },
  {
    icon: Lightbulb,
    title: "AI Product Strategy",
    description: "Identifying AI/ML opportunities to enhance product value.",
    visual: <AIVisual />,
    details: {
      philosophy: "AI should reduce friction, not just add novelty.",
      process: [
        "Opportunity Mapping: Where can AI automate manual user tasks?",
        "Feasibility Check: Cost vs. Benefit of LLM integration.",
        "Prototyping: Using tools like Lovable to test AI flows quickly."
      ],
      tools: ["OpenAI API", "V0", "Lovable"]
    }
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 border-white/20 text-white/70 backdrop-blur-md px-4 py-1">
            Methodology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
            My Product Process
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            How I turn ambiguous problems into shipped solutions. <br className="hidden md:block"/> Click a card to see my framework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`
                group relative overflow-hidden rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] hover:-translate-y-1
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

      {/* Methodology Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-xl p-0 border-white/10 bg-black/80 backdrop-blur-3xl shadow-2xl overflow-hidden rounded-[2rem] text-white">
          
          {/* Modal Header Visual */}
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
          
          {/* Scrollable Content */}
          <div className="p-8 space-y-8 overflow-y-auto max-h-[60vh]">
            {/* Philosophy Block */}
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
