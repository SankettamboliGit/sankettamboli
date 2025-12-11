import { useState } from "react";
import { ArrowUpRight, Target, Lightbulb, ListChecks, TrendingUp, CheckCircle2, X } from "lucide-react";
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Selected Work & Research
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing product thinking, strategic operations, and technical execution.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/20 hover:shadow-xl transition-all duration-500 cursor-pointer opacity-0 animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full border border-border/50">
                  {project.category}
                </span>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-xs text-muted-foreground font-medium">
                  {project.period}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-2 group-hover:text-foreground transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2.5 py-1 text-xs bg-secondary text-muted-foreground rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Full Case Study Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {/* Hero Image Banner */}
          {selectedProject && (
            <>
              <div className="relative w-full aspect-[21/9] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Category Badge on Image */}
                <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full border border-border/50">
                  {selectedProject.category}
                </span>
              </div>

              {/* Content */}
              <div className="px-6 md:px-10 pb-10">
                {/* Header */}
                <DialogHeader className="pt-6 pb-4 border-b border-border">
                  <span className="text-sm text-muted-foreground font-medium">
                    {selectedProject.period}
                  </span>
                  <DialogTitle className="text-2xl md:text-3xl font-bold mt-1">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base text-muted-foreground mt-2">
                    {selectedProject.description}
                  </DialogDescription>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </DialogHeader>

                {/* Case Study Sections */}
                <div className="mt-8 space-y-8">
                  {/* The Challenge */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary rounded-lg">
                        <Target className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">The Challenge</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-12">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary rounded-lg">
                        <Lightbulb className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">The Solution</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-12">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>

                  {/* Key Process */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary rounded-lg">
                        <ListChecks className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Key Process</h4>
                    </div>
                    <ul className="space-y-3 pl-12">
                      {selectedProject.caseStudy.process.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-foreground/70 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* The Outcome */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-secondary rounded-lg">
                        <TrendingUp className="w-5 h-5 text-foreground" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">The Outcome</h4>
                    </div>
                    <div className="ml-12 p-4 bg-foreground/5 border border-foreground/10 rounded-xl">
                      <p className="text-foreground font-medium leading-relaxed">
                        {selectedProject.caseStudy.outcome}
                      </p>
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

export default Projects;
