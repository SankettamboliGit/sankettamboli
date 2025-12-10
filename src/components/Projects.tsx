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
    description:
      "Designed and built a minimal, responsive portfolio using AI-assisted vibe coding — leveraging Lovable, prompt engineering, and iterative refinement.",
    tags: ["AI", "Web Development", "Product Design"],
    fullDescription: `A personal project showcasing the intersection of AI tools and product thinking.

**Approach:**
• Leveraged Lovable for AI-assisted development
• Applied prompt engineering for iterative design refinement
• Built with React, TypeScript, and Tailwind CSS
• Focused on minimal, responsive, and accessible design

**Outcome:**
A clean, professional portfolio that demonstrates the potential of AI-first development workflows.`,
  },
  {
    title: "Ceipal ATS — Product Operations",
    period: "2021 – Present",
    description:
      "End-to-end ATS configuration, workflow tuning, backend issue reporting, data exports, and integration management with job boards.",
    tags: ["ATS", "Operations", "Product Thinking"],
    fullDescription: `Complete lifecycle management of Ceipal ATS implementation and optimization.

**Key Responsibilities:**
• End-to-end ATS configuration and workflow tuning
• Backend issue identification and reporting
• Custom data exports and reporting logic
• Integration management with major job boards

**Impact:**
Deep insight into recruitment technology from user and admin perspectives, informing product thinking approach.`,
  },
  {
    title: "Tooling Ecosystem & Procurement",
    period: "2021 – Present",
    description:
      "Strategic assessment of sourcing tools through ROI analysis, usage tracking, and cost-per-hire metrics to optimize the recruitment tech stack.",
    tags: ["Procurement", "ROI Analysis", "Strategy"],
    fullDescription: `Strategic optimization of the recruitment tooling ecosystem.

**Methodology:**
• ROI analysis for each sourcing portal
• Usage behavior tracking and optimization
• Conversion metrics and cost-per-hire analysis
• Vendor negotiation and relationship management

**Results:**
Data-driven framework for evaluating recruitment tools balancing cost, efficiency, and adoption.`,
  },
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
            <div className="prose prose-sm max-w-none text-foreground">
              {selectedProject?.fullDescription.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <h4 key={i} className="font-semibold text-foreground mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
                }
                if (line.startsWith('• ')) {
                  return <p key={i} className="text-muted-foreground ml-4 mb-1">{line}</p>;
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