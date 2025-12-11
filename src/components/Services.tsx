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
  <div className="w-full h-full bg-gradient-to-br from-yellow-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-yellow-500/20 transition-colors duration-500">
    <div className="grid grid-cols-2 gap-2 transform rotate-3 opacity-80">
      <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/30 rounded-lg shadow-sm" />
      <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-lg shadow-sm" />
      <div className="w-12 h-12 bg-pink-500/20 border border-pink-500/30 rounded-lg shadow-sm" />
      <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-lg shadow-sm" />
    </div>
    <StickyNote className="w-16 h-16 text-yellow-500/10 absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform duration-500" />
  </div>
);

const RoadmapVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-blue-500/20 transition-colors duration-500">
    <div className="flex flex-col gap-3 w-32 opacity-80">
      <div className="h-3 w-full bg-blue-500/30 rounded-full" />
      <div className="h-3 w-2/3 bg-blue-500/20 rounded-full ml-8" />
      <div className="h-3 w-3/4 bg-blue-500/20 rounded-full ml-4" />
    </div>
    <Calendar className="w-20 h-20 text-blue-500/10 absolute top-2 right-2 group-hover:rotate-12 transition-transform duration-500" />
  </div>
);

const ResearchVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-purple-500/20 transition-colors duration-500">
    <div className="flex -space-x-4">
      <div className="w-12 h-12 rounded-full border-2 border-background bg-purple-500/30" />
      <div className="w-12 h-12 rounded-full border-2 border-background bg-purple-500/20" />
      <div className="w-12 h-12 rounded-full border-2 border-background bg-purple-500/10" />
    </div>
    <MessageSquare className="w-16 h-16 text-purple-500/10 absolute bottom-2 left-2" />
  </div>
);

const DataVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-background flex items-end justify-center pb-6 gap-2 relative overflow-hidden group-hover:from-green-500/20 transition-colors duration-500">
    <div className="w-4 h-8 bg-green-500/30 rounded-t group-hover:h-12 transition-all duration-500" />
    <div className="w-4 h-16 bg-green-500/50 rounded-t group-hover:h-20 transition-all duration-500 delay-75" />
    <div className="w-4 h-12 bg-green-500/40 rounded-t group-hover:h-16 transition-all duration-500 delay-150" />
    <BarChart3 className="w-24 h-24 text-green-500/5 absolute inset-0 m-auto" />
  </div>
);

const SpecVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-orange-500/20 transition-colors duration-500">
    <div className="w-24 h-32 border-2 border-orange-500/20 bg-background/50 rounded-lg p-3 space-y-2 transform -rotate-6">
      <div className="h-2 w-1/2 bg-orange-500/40 rounded" />
      <div className="h-2 w-full bg-orange-500/20 rounded" />
      <div className="h-2 w-full bg-orange-500/20 rounded" />
      <div className="h-2 w-3/4 bg-orange-500/20 rounded" />
    </div>
    <FileText className="w-20 h-20 text-orange-500/10 absolute -right-4 -top-4" />
  </div>
);

const AIVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-background flex items-center justify-center relative overflow-hidden group-hover:from-pink-500/20 transition-colors duration-500">
    <Network className="w-24 h-24 text-pink-500/10 absolute inset-0 m-auto animate-pulse" />
    <div className="w-3 h-3 bg-pink-500/50 rounded-full absolute top-1/3 left-1/4" />
    <div className="w-2 h-2 bg-pink-500/30 rounded-full absolute bottom-1/3 right-1/4" />
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
    <section id="services" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            My Product Methodology
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How I turn ambiguous problems into shipped solutions. Click a card to see my process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              {/* Visual Header */}
              <div className="h-36 w-full relative overflow-hidden border-b border-border/50">
                 {service.visual}
                 
                 {/* Icon Badge */}
                 <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm border border-border">
                        <service.icon className="w-5 h-5 text-primary" />
                    </div>
                 </div>
              </div>

              <div className="p-6 pt-3">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Modal - Sized for Laptops */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-lg p-0 border-none shadow-2xl bg-card overflow-hidden max-h-[90vh] flex flex-col">
          
          {/* Modal Header Visual */}
          <div className="relative h-32 w-full shrink-0">
            {selectedService?.visual}
            
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="p-2 bg-background/90 rounded-lg backdrop-blur-sm shadow-sm border border-border">
                    {selectedService && <selectedService.icon className="w-5 h-5 text-primary" />}
                </div>
                <DialogTitle className="text-xl font-bold text-foreground drop-shadow-md">
                    {selectedService?.title}
                </DialogTitle>
            </div>
            
            <DialogClose className="absolute top-4 right-4 rounded-full bg-black/20 p-2 hover:bg-black/40 text-white transition-colors">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>
          
          {/* Scrollable Content */}
          <div className="p-6 space-y-6 overflow-y-auto">
            {/* Philosophy Block */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 italic text-muted-foreground border-l-4 border-l-primary text-sm">
                "{selectedService?.details.philosophy}"
            </div>

            {/* Process List */}
            <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider text-muted-foreground">
                    <Cpu className="w-4 h-4" /> The Process
                </h4>
                <ul className="space-y-3">
                    {selectedService?.details.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <span className="text-foreground/80">{step}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tools */}
            <div className="pt-4 border-t border-border/50">
                <h4 className="font-semibold mb-3 text-xs uppercase tracking-wider text-muted-foreground">Tools I Use</h4>
                <div className="flex flex-wrap gap-2">
                    {selectedService?.details.tools.map(tool => (
                        <Badge key={tool} variant="secondary" className="px-3 py-1 font-normal">
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
