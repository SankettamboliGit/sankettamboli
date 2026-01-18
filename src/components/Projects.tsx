import { useState } from "react";
import { ArrowUpRight, X, Target, Lightbulb, CheckCircle2, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "AI-First Web Portfolio",
    category: "Rapid Prototyping",
    period: "2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", 
    description: "MVP portfolio deployed in 48 hours using AI-assisted development. Demonstrates product thinking and execution speed.",
    tags: ["Lovable", "AI Tools", "Rapid Execution"],
    caseStudy: {
      problem: "Traditional development creates lag between product vision and execution. Needed to demonstrate both PM thinking and shipping ability.",
      solution: "Used Lovable.dev and natural language prompting to build production-ready portfolio. Owned information architecture, content strategy, and iterative refinement.",
      process: ["Problem Definition: Portfolio positioning", "Information Architecture: Sections and flow", "Iteration: 50+ prompt-review-refine cycles"],
      outcome: "Working product showcasing systems thinking, prioritization, and execution speed."
    }
  },
  {
    title: "Internal ATS Platform Ownership",
    category: "Product Operations",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    description: "End-to-end ownership of internal SaaS platform. User feedback loops, KPI definition, workflow optimization.",
    tags: ["Platform Ownership", "Backlog", "Configuration"],
    caseStudy: {
      problem: "Operational bottlenecks and data inconsistencies. Users had workarounds bypassing the system.",
      solution: "Took platform ownership, established feedback mechanisms, defined metrics aligning user behavior with business goals.",
      process: ["User Feedback: Regular check-ins with recruiters", "Data Audit: Fixed inconsistencies", "Configuration: Shipped workflow improvements"],
      outcome: "Reliable data environment. Reduced workarounds by making the system work for users."
    }
  },
  {
    title: "Revenue Intelligence Dashboards",
    category: "Data & Analytics",
    period: "2022 – Present",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "Built revenue reports and growth projections identifying leakages. Enabled proactive decision-making.",
    tags: ["Dashboards", "KPIs", "Business Intelligence"],
    caseStudy: {
      problem: "Stakeholders lacked visibility into real-time trends. Revenue leakages undetected until quarter-end.",
      solution: "Designed dynamic revenue reports with clear visualizations. Created projection matrices for proactive decisions.",
      process: ["Leakage Identification", "Dashboard Design", "Strategic Alignment"],
      outcome: "Leadership identified leakages in real-time and took corrective actions."
    }
  },
  {
    title: "Team Gamification & Retention",
    category: "Behavioral Design",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    description: "Designed incentive plans and retention roadmaps. Reduced attrition and drove performance metrics.",
    tags: ["Gamification", "Retention", "Capacity Planning"],
    caseStudy: {
      problem: "High attrition affecting team stability and output targets. Traditional incentives ineffective.",
      solution: "Designed gamification strategy with reward structures, performance plans, and capacity planning.",
      process: ["Behavioral Analysis", "Incentive Design", "Implementation and Measurement"],
      outcome: "Reduced attrition and improved team engagement through aligned incentives."
    }
  },
  {
    title: "Talent Pipeline Architecture",
    category: "Supply Chain Ops",
    period: "2017 – 2021",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    description: "Built proactive talent pipelines for enterprise clients including ServiceNow ecosystem roles.",
    tags: ["Pipeline Design", "ServiceNow", "Enterprise"],
    caseStudy: {
      problem: "Reactive hiring caused delays for niche enterprise roles. Scaling delivery was unpredictable.",
      solution: "Built proactive pipelines with forecasting. Gained ServiceNow platform familiarity through ITSM recruiting.",
      process: ["Demand Forecasting", "Pipeline Development", "Platform Exposure"],
      outcome: "Faster time-to-fill and scalable delivery for Fortune 500 clients."
    }
  },
];

type Project = typeof projects[number];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Projects</h2>
          <p className="text-white/50 text-base md:text-lg">Problem → Solution → Outcome framing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-white/20 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] px-3 py-1 rounded-full bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-white">{project.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#0a0a0a]/95 backdrop-blur-xl border-white/10 max-w-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <div className="aspect-video relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              <div className="p-6 space-y-6 -mt-16 relative z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-purple-400 font-medium">{selectedProject.category} • {selectedProject.period}</span>
                    <DialogTitle className="text-2xl font-bold text-white mt-1">{selectedProject.title}</DialogTitle>
                  </div>
                  <DialogClose className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                    <X className="w-4 h-4 text-white/70" />
                  </DialogClose>
                </div>

                <div className="space-y-5">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-red-400" />
                      <h4 className="text-sm font-bold text-white">Problem</h4>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{selectedProject.caseStudy.problem}</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                      <h4 className="text-sm font-bold text-white">Solution</h4>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{selectedProject.caseStudy.solution}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <h4 className="text-sm font-bold text-white">Process</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.caseStudy.process.map((step, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-purple-400" />
                      <h4 className="text-sm font-bold text-white">Outcome</h4>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">{selectedProject.caseStudy.outcome}</p>
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
