import { useState } from "react";
import { ArrowUpRight, Target, Lightbulb, CheckCircle2, Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI-First Web Portfolio",
    category: "Product Engineering",
    period: "2025",
    // Image: Coding/Laptop setup
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop", 
    description: "Designed and deployed a fully responsive web application in under 48 hours using Generative AI.",
    tags: ["React", "Generative AI", "Rapid Prototyping", "Tailwind CSS"],
    caseStudy: {
      problem: "Traditional development cycles create a lag between 'Product Vision' and 'Technical Execution', often requiring manual syntax that slows down iteration.",
      solution: "Leveraged Lovable.dev and natural language prompting to bypass manual coding, translating product requirements directly into production-ready React code.",
      process: [
        "Rapid Prototyping: Deployed a responsive app in under 48 hours.",
        "Iterative Design: Managed AI feedback loops to refine UI/UX components in real-time.",
        "Tech Stack: Built on React, Tailwind CSS, and Vite to ensure scalability and performance."
      ],
      outcome: "Demonstrated the ability to bridge the gap between user needs and technical execution without writing manual syntax."
    }
  },
  {
    title: "SaaS Platform Optimization",
    category: "Product Operations",
    period: "2021 – Present",
    // Image: User Flow/Wireframe abstract
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
    description: "Owned the maintenance and configuration of internal ATS, optimizing it through user feedback loops.",
    tags: ["SaaS Operations", "User Feedback", "Data Integrity", "ATS"],
    caseStudy: {
      problem: "Operational bottlenecks and data inconsistencies were hindering the leadership's ability to make accurate strategic decisions.",
      solution: "Owned the end-to-end maintenance and configuration of the internal SaaS platform (ATS), acting as the bridge between the system and the users (recruiters).",
      process: [
        "Implemented rigorous user feedback loops to identify pain points and enhance user experience.",
        "Created custom metrics within the platform to identify usage trends.",
        "Enforced a 'clean data' environment by auditing process adherence."
      ],
      outcome: "Delivered actionable insights to leadership and ensured a reliable data environment for strategic decision-making."
    }
  },
  {
    title: "Revenue Intelligence Dashboard",
    category: "Data Product",
    period: "2022 – Present",
    // Image: Financial Charts/Analytics
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    description: "Built dynamic revenue reports and growth projections to visualize financial trends and prevent leakage.",
    tags: ["Business Intelligence", "Revenue Ops", "Data Visualization", "Strategy"],
    caseStudy: {
      problem: "Stakeholders lacked visibility into real-time financial trends, leading to undetected revenue leakages and unclear growth trajectories.",
      solution: "Designed and deployed a suite of dynamic revenue reports and growth projection matrices to visualize financial health.",
      process: [
        "Identified key leakage points in the billing and delivery cycle.",
        "Built visualization dashboards to track financial trends against operational output.",
        "Translate complex financial data into a strategic growth roadmap for leadership."
      ],
      outcome: "Enabled stakeholders to clearly identify revenue leakages and operational drawbacks, resulting in immediate corrective actions."
    }
  },
  {
    title: "Gamification & Behavioral Design",
    category: "Product Strategy",
    period: "2021 – Present",
    // Image: Team collaboration/Strategy
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    description: "Developed incentive plans and retention roadmaps to gamify performance and reduce attrition.",
    tags: ["Gamification", "Behavioral Design", "Retention Strategy", "Leadership"],
    caseStudy: {
      problem: "High attrition rates and undefined skill gaps were affecting the team's ability to meet monthly output targets.",
      solution: "Designed and implemented a comprehensive 'Gamification' strategy involving incentive plans and mentorship frameworks.",
      process: [
        "Developed retention roadmaps and reward strategies to boost engagement.",
        "Designed Performance Improvement Plans (PIPs) to transform underperforming members.",
        "Managed capacity planning for a distributed team across India and US markets."
      ],
      outcome: "Significantly reduced attrition and drove higher monthly outputs, transforming the team into productive contributors."
    }
  },
  {
    title: "Talent Pipeline Architecture",
    category: "Supply Chain Ops",
    period: "2021 – Present",
    // Image: Global Network/Connections
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop",
    description: "Orchestrated the creation of scalable candidate pipelines for niche industry domains.",
    tags: ["Pipeline Strategy", "Supply Chain", "Market Analysis", "Sourcing"],
    caseStudy: {
      problem: "Reactive sourcing methods were leading to long lead times and missed opportunities in niche industry domains.",
      solution: "Shifted from 'Just-in-Time' sourcing to a 'Inventory-Based' pipeline strategy, creating a ready-to-deploy talent pool.",
      process: [
        "Analyzed market data to advise on feasibility and reduce requirement churn.",
        "Directed teams to design scalable pipelines for both active and passive talent.",
        "Facilitated cross-functional communication to align execution with broader business goals."
      ],
      outcome: "Ensured continuous availability of talent, reducing time-to-fill and smoothing operational peaks and troughs."
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
            Selected Work & Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of how I translate user needs into scalable solutions.
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-none">
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

          <div className="p-6 md:p-8 space-y-8 bg-background">
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
                  <p className="text-foreground/80 leading-relaxed font-medium">
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
