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

const projects = [
  {
    title: "AI-First Web Portfolio",
    category: "Product Engineering",
    period: "2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", 
    description: "Designed and deployed a fully responsive web application in under 48 hours using Generative AI.",
    tags: ["React", "Generative AI", "Rapid Prototyping"],
    caseStudy: {
      problem: "Traditional development cycles create a lag between 'Product Vision' and 'Technical Execution'.",
      solution: "Leveraged Lovable.dev and natural language prompting to bypass manual coding.",
      process: ["Rapid Prototyping", "Iterative Design", "Tech Stack: React/Vite"],
      outcome: "Bridge the gap between user needs and technical execution without writing manual syntax."
    }
  },
  {
    title: "SaaS Platform Optimization",
    category: "Product Operations",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    description: "Owned the maintenance and configuration of internal ATS, optimizing it through user feedback loops.",
    tags: ["SaaS Operations", "User Feedback", "Data Integrity"],
    caseStudy: {
      problem: "Operational bottlenecks and data inconsistencies were hindering strategic decisions.",
      solution: "Owned the end-to-end maintenance and configuration of the internal SaaS platform (ATS).",
      process: ["User Feedback Loops", "Custom Metrics", "Data Audit"],
      outcome: "Delivered actionable insights to leadership and ensured a reliable data environment."
    }
  },
  {
    title: "Revenue Intelligence Dashboard",
    category: "Data Product",
    period: "2022 – Present",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "Built dynamic revenue reports and growth projections to visualize financial trends.",
    tags: ["Business Intelligence", "Revenue Ops", "Data Visualization"],
    caseStudy: {
      problem: "Stakeholders lacked visibility into real-time financial trends, leading to undetected revenue leakages.",
      solution: "Designed and deployed a suite of dynamic revenue reports and growth projection matrices.",
      process: ["Leakage Identification", "Visualization Dashboards", "Strategic Growth Roadmap"],
      outcome: "Enabled stakeholders to clearly identify revenue leakages and take corrective actions."
    }
  },
  {
    title: "Gamification Strategy",
    category: "Product Strategy",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    description: "Developed incentive plans and retention roadmaps to gamify performance and reduce attrition.",
    tags: ["Gamification", "Behavioral Design", "Retention"],
    caseStudy: {
      problem: "High attrition rates were affecting the team's ability to meet monthly output targets.",
      solution: "Designed and implemented a comprehensive 'Gamification' strategy involving incentive plans.",
      process: ["Retention Roadmaps", "Performance Improvement Plans", "Capacity Planning"],
      outcome: "Significantly reduced attrition and drove higher monthly outputs."
    }
  },
  {
    title: "Talent Pipeline Architecture",
    category: "Supply Chain Ops",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    description: "Orchestrated the creation of scalable candidate pipelines for niche industry domains.",
    tags: ["Pipeline Strategy", "Supply Chain", "Market Analysis"],
    caseStudy: {
      problem: "Reactive sourcing methods were leading to long lead times.",
      solution: "Shifted from 'Just-in-Time' sourcing to a 'Inventory-Based' pipeline strategy.",
      process: ["Market Analysis", "Pipeline Design", "Cross-Functional Comms"],
      outcome: "Ensured continuous availability of talent and reduced time-to-fill."
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          {/* REMOVED BADGE HERE */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Projects
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Real-world examples of how I translate user needs into scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`
                group relative overflow-hidden rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                active:scale-95
                animate-fade-up stagger-${Math.min(index + 1, 5)}
              `}
            >
              {/* Card Image */}
              <div className="aspect-video md:aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="backdrop-blur-xl bg-black/50 text-white border-white/10 hover:bg-black/70">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 relative -mt-12">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-white/60 text-sm line-clamp-2 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/5 text-white/50 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal - FIXED: [&>button]:hidden removes the double X */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl w-[95vw] p-0 border-white/10 bg-black/90 backdrop-blur-3xl rounded-2xl text-white [&>button]:hidden">
          <DialogHeader className="p-0">
            <div className="relative w-full h-56 md:h-72">
               <img 
                  src={selectedProject?.image} 
                  alt={selectedProject?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8">
                  <Badge className="mb-3 bg-white/10 text-white hover:bg-white/20 border-transparent">{selectedProject?.category}</Badge>
                  <DialogTitle className="text-xl md:text-4xl font-bold text-white leading-tight">
                    {selectedProject?.title}
                  </DialogTitle>
                </div>
                <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors text-white">
                  <X className="w-5 h-5" />
                </DialogClose>
            </div>
            <DialogDescription className="sr-only">Details about {selectedProject?.title}</DialogDescription>
          </DialogHeader>

          <div className="p-6 md:p-8 space-y-6 md:space-y-8 max-h-[60vh] overflow-y-auto bg-black/50">
            {selectedProject && (
              <>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3 text-red-400">
                      <Target className="w-4 h-4" />
                      <h5 className="font-bold text-xs uppercase tracking-wide">The Challenge</h5>
                    </div>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 md:p-5 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-3 mb-3 text-blue-400">
                      <Lightbulb className="w-4 h-4" />
                      <h5 className="font-bold text-xs uppercase tracking-wide">The Solution</h5>
                    </div>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="font-bold text-white mb-4 flex items-center gap-3 text-sm uppercase tracking-wide">
                    Execution Strategy
                  </h5>
                  <ul className="space-y-3">
                    {selectedProject.caseStudy.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 md:gap-4 group">
                        <div className="mt-1 p-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                           <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span className="text-white/80 leading-relaxed text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-2xl p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-2 text-green-400">
                    <Trophy className="w-4 h-4" />
                    <h5 className="font-bold uppercase tracking-wider text-xs">The Outcome</h5>
                  </div>
                  <p className="text-white text-base font-medium leading-relaxed">
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
