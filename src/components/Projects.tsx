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
    title: "AI-First Web Portfolio",
    period: "2025",
    category: "Product Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop",
    description: "Designed and built a minimal, responsive portfolio using AI-assisted vibe coding.",
    tags: ["React", "Generative AI", "Product Design", "Tailwind"],
    caseStudy: {
      problem: "Traditional portfolio development is slow and often requires heavy manual coding, creating a barrier between design intent and final product.",
      solution: "Leveraged Lovable and natural language prompting to bridge the gap between 'Product Vision' and 'Technical Execution' in under 48 hours.",
      process: [
        "Defined core user journey for hiring managers (Scan -> Read -> Contact).",
        "Utilized iterative prompting to refine UI components without writing manual CSS.",
        "Implemented a 'clean data' structure to ensure easy content updates."
      ],
      outcome: "A fully responsive, accessible, and aesthetic portfolio deployed in record time, demonstrating technical literacy and AI-native workflow mastery."
    }
  },
  {
    title: "SaaS Platform Optimization",
    period: "2021 – Present",
    category: "Product Operations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    description: "End-to-end ATS configuration and workflow tuning for high-volume recruitment teams.",
    tags: ["SaaS Operations", "Workflow Automation", "User Research", "Data Analysis"],
    caseStudy: {
      problem: "The recruitment team faced 24/7 operational bottlenecks due to rigid ATS configurations and lack of data visibility.",
      solution: "Owned the complete configuration of the internal SaaS platform (Ceipal), treating internal recruiters as 'users' to optimize their daily workflows.",
      process: [
        "Conducted user interviews with 5-7 recruiters to identify friction points.",
        "Redesigned backend workflow reporting to flag issues automatically.",
        "Built custom data export logic to integrate with external job boards."
      ],
      outcome: "Reduced time-to-fill metrics and significantly improved data integrity, creating a scalable system for distributed teams."
    }
  },
  {
    title: "Tooling Ecosystem Strategy",
    period: "2021 – Present",
    category: "Strategy & Procurement",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    description: "Strategic ROI assessment of sourcing tools to optimize the recruitment tech stack.",
    tags: ["ROI Analysis", "Vendor Management", "Strategy", "Procurement"],
    caseStudy: {
      problem: "The organization lacked a data-driven framework for evaluating the effectiveness of expensive sourcing tools (Monster, LinkedIn, etc.).",
      solution: "Developed a rigorous 'Cost-Per-Hire' and 'Usage ROI' framework to validate tool effectiveness.",
      process: [
        "Tracked usage behavior across all vendor platforms.",
        "Analyzed conversion metrics vs. subscription costs.",
        "Negotiated vendor contracts based on actual utilization data."
      ],
      outcome: "Optimized the recruitment tech stack, balancing cost efficiency with user adoption and maximizing ROI."
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Selected Work & Research
          </h2>
        </div>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 cursor-pointer opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span className="text-sm text-muted-foreground">
                    {project.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 mb-3 group-hover:text-foreground transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm text-muted-foreground">
                  {selectedProject?.period}
                </span>
                <DialogTitle className="text-2xl font-semibold mt-1">
                  {selectedProject?.title}
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>
          <DialogDescription className="sr-only">
            Details about {selectedProject?.title}
          </DialogDescription>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject?.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            {selectedProject?.caseStudy && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">The Problem</h4>
                  <p className="text-muted-foreground">{selectedProject.caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">The Solution</h4>
                  <p className="text-muted-foreground">{selectedProject.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Process</h4>
                  <ul className="space-y-2">
                    {selectedProject.caseStudy.process.map((step, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-foreground/60">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                  <p className="text-muted-foreground">{selectedProject.caseStudy.outcome}</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;