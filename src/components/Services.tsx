import { useState } from "react";
import {
  Compass,
  Map,
  Users,
  BarChart3,
  Layers,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Cpu
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Compass,
    title: "Discovery Workshops",
    description: "Facilitated sessions to uncover user pain points and align stakeholders.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
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
        <div className="text-center mb-16 opacity-0 animate-fade-up">
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
              className={`group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300 cursor-pointer opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
            >
              {/* Image Header with Overlay */}
              <div className="h-32 w-full relative overflow-hidden">
                 <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                 <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <service.icon className="w-5 h-5 text-primary" />
                    </div>
                 </div>
              </div>

              <div className="p-6 pt-2">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                    {selectedService && <selectedService.icon className="w-6 h-6 text-primary" />}
                </div>
                <div>
                    <DialogTitle className="text-2xl font-bold">{selectedService?.title}</DialogTitle>
                    <DialogDescription className="text-base">
                        My approach to {selectedService?.title.toLowerCase()}
                    </DialogDescription>
                </div>
            </div>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Philosophy Block */}
            <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 italic text-muted-foreground border-l-4 border-l-primary">
                "{selectedService?.details.philosophy}"
            </div>

            {/* Process List */}
            <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
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
            <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Tools I Use</h4>
                <div className="flex flex-wrap gap-2">
                    {selectedService?.details.tools.map(tool => (
                        <Badge key={tool} variant="outline" className="px-3 py-1">
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
