import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Ceipal ATS — Product Operations & Continuous Improvement",
    period: "2021 – Present",
    description:
      "Handling Ceipal end to end — configuration, workflow tuning, backend issue reporting, data exports, reporting logic, integrations with job boards, and procurement decisions.",
    tags: ["ATS", "Operations", "Product Thinking"],
    fullDescription: `As Operations Manager at Akshar Staffing, I've been responsible for the complete lifecycle of Ceipal ATS implementation and optimization.

**Key Responsibilities:**
• End-to-end ATS configuration and workflow tuning
• Backend issue identification and reporting to Ceipal support
• Custom data exports and reporting logic development
• Integration management with major job boards
• Procurement decisions for sourcing tools

**Impact:**
This hands-on experience has given me deep insight into how recruitment technology products work from a user and admin perspective, informing my product thinking approach.`,
  },
  {
    title: "Minimal Technology Research",
    period: "Ongoing",
    description:
      "A global self-driven research initiative analyzing user psychology, hardware trade-offs, distraction-free design philosophies, and emerging minimalist tech adoption across continents.",
    tags: ["Research", "Minimal Tech", "Light Phone"],
    fullDescription: `A comprehensive research initiative exploring the growing movement toward intentional, distraction-free technology.

**Research Areas:**
• User psychology behind choosing minimal devices
• Hardware trade-offs in dumb phone design
• Distraction-free design philosophies
• Global adoption patterns of minimalist tech
• The Light Phone ecosystem and alternatives

**Key Insights:**
Understanding why users deliberately choose friction and limitations has shaped my perspective on product design and the value of intentional constraints.`,
  },
  {
    title: 'The "Ultimate Dumb Phone" — Personal Concept',
    period: "Concept",
    description:
      "A self-directed vision study exploring ultra-minimal hardware + software design, physical interfaces, battery architecture, and essential-only features.",
    tags: ["Product Design", "Hardware", "Concept"],
    fullDescription: `A personal product concept study imagining the ideal minimal mobile device.

**Design Exploration:**
• Ultra-minimal hardware form factor
• E-ink and physical interface considerations
• Battery architecture for week-long usage
• Essential-only feature set definition
• Software UX for intentional interactions

**Philosophy:**
The concept centers on the question: "What is the minimum viable phone?" — exploring how constraints can enhance rather than limit the user experience.`,
  },
  {
    title: "Tooling Ecosystem Management & Procurement",
    period: "2021 – Present",
    description:
      "Assessing sourcing portals through ROI, usage behavior, conversion metrics, and cost-per-hire analysis; eliminating redundancy and improving efficiency.",
    tags: ["Procurement", "ROI Analysis", "Operations"],
    fullDescription: `Strategic assessment and optimization of the recruitment tooling ecosystem.

**Methodology:**
• ROI analysis for each sourcing portal
• Usage behavior tracking and optimization
• Conversion metrics and cost-per-hire analysis
• Redundancy elimination across tools
• Vendor negotiation and relationship management

**Results:**
Developed a data-driven framework for evaluating recruitment tools that balances cost, efficiency, and team adoption.`,
  },
  {
    title: "Vibe Coding & Human Attention Research",
    period: "Ongoing",
    description:
      "Behavioral study on why users choose slow, simple, intentional tech — and how friction becomes a feature, not a flaw.",
    tags: ["Behavioral Research", "UX", "Attention"],
    fullDescription: `An ongoing behavioral research project exploring the intersection of technology and human attention.

**Research Questions:**
• Why do users deliberately choose slower technology?
• How does friction enhance rather than hinder UX?
• What role does intentionality play in tech satisfaction?
• How can products leverage constraints positively?

**Applications:**
This research informs product design decisions around simplicity, intentionality, and the counterintuitive value of limitations.`,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-secondary/30">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Selected Work & Research
          </h2>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 cursor-pointer opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)} text-center`}
            >
              <span className="text-xs sm:text-sm text-muted-foreground">
                {project.period}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1 mb-3 group-hover:text-foreground transition-colors inline-flex items-center justify-center gap-2 flex-wrap">
                {project.title}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl mx-auto">
                {project.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-lg sm:max-w-xl md:max-w-2xl max-h-[80vh] overflow-y-auto mx-4">
          <DialogHeader>
            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                {selectedProject?.period}
              </span>
              <DialogTitle className="text-xl sm:text-2xl font-semibold mt-1">
                {selectedProject?.title}
              </DialogTitle>
            </div>
          </DialogHeader>
          <DialogDescription className="sr-only">
            Details about {selectedProject?.title}
          </DialogDescription>
          <div className="mt-4">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {selectedProject?.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="prose prose-sm max-w-none text-foreground text-center">
              {selectedProject?.fullDescription.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <h4 key={i} className="font-semibold text-foreground mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
                }
                if (line.startsWith('• ')) {
                  return <p key={i} className="text-muted-foreground mb-1">{line}</p>;
                }
                if (line.trim() === '') {
                  return <br key={i} />;
                }
                return <p key={i} className="text-muted-foreground mb-2">{line}</p>;
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
