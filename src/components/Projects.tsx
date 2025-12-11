import { useState } from "react";
import { ArrowUpRight, Target, Lightbulb, CheckCircle2, Trophy, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// Updated Data Structure with Case Studies
const projects = [
  {
    title: "AI-First Web Portfolio",
    category: "Product Engineering",
    period: "2025",
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
    category: "Product Operations",
    period: "2021 – Present",
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
    category: "Strategy & Procurement",
    period: "2021 – Present",
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Selected Work & Research
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A deep dive into how I solve problems, bridge gaps, and deliver value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-300 cursor-pointer opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
            >
              {/* Card Image */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="backdrop-blur-md bg-background/80">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1" />
                </div>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Screen Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          <DialogHeader className="p-0">
            {/* Modal Hero Image */}
            <div className="relative w-full h-48 md:h-64 bg-muted">
               <img 
                  src={selectedProject?.image} 
                  alt={selectedProject?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="mb-3">{selectedProject?.category}</Badge>
                  <DialogTitle className="text-3xl md:text-4xl font-bold text-foreground">
                    {selectedProject?.title}
                  </DialogTitle>
                </div>
            </div>
            <DialogDescription className="sr-only">
              Case study details for {selectedProject?.title}
            </DialogDescription>
          </DialogHeader>

          <div className="p-6 md:p-8 space-y-8">
            {selectedProject && (
              <>
                {/* Intro */}
                <div>
                   <h4 className="text-lg font-medium mb-2">Project Overview</h4>
                   <p className="text-muted-foreground leading-relaxed">
                     {selectedProject.description}
                   </p>
                   <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                   </div>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/20 p-5 rounded-lg border border-border/50">
                    <div className="flex items-center gap-2 mb-3 text-red-500/80">
                      <Target className="w-5 h-5" />
                      <h5 className="font-semibold text-foreground">The Challenge</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>
                  <div className="bg-secondary/20 p-5 rounded-lg border border-border/50">
                    <div className="flex items-center gap-2 mb-3 text-blue-500/80">
                      <Lightbulb className="w-5 h-5" />
                      <h5 className="font-semibold text-foreground">The Solution</h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Process */}
                <div>
                  <h5 className="font-semibold mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    Key Process Steps
                  </h5>
                  <ul className="space-y-3">
                    {selectedProject.caseStudy.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary/60 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <Trophy className="w-5 h-5" />
                    <h5 className="font-semibold">The Outcome</h5>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {selectedProject.caseStudy.outcome}
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
