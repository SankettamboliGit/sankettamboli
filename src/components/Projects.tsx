import { useState } from "react";
import { ArrowUpRight, X, Target, Lightbulb, CheckCircle2, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "AI-First Web Portfolio",
    category: "Rapid Prototyping",
    period: "2025 – Present",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "Responsive React portfolio designed and deployed in under 48 hours through an AI-assisted feedback loop.",
    tags: ["Lovable", "React", "Tailwind CSS"],
    caseStudy: {
      problem:
        "Traditional development creates lag between product vision and execution. Needed to demonstrate both PM thinking and shipping ability.",
      solution:
        "Used Lovable.dev, React, Tailwind CSS, and Vite to build the portfolio, iterating UI and content through a generative-AI feedback loop.",
      process: [
        "Problem Definition: Portfolio positioning",
        "Information Architecture: Sections and flow",
        "Iteration: 50+ prompt-review-refine cycles",
      ],
      outcome:
        "Working product showcasing systems thinking, prioritization, and execution speed.",
    },
  },
  {
    title: "SaaS/ATS Product Ownership",
    category: "Product Operations",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    description:
      "Internal product ownership spanning user feedback, vendor enhancements, release validation, and data governance.",
    tags: ["Product Operations", "Release Validation", "Data Governance"],
    caseStudy: {
      problem:
        "Operational bottlenecks and data inconsistencies. Users had workarounds bypassing the system.",
      solution:
        "Gathered user feedback, prioritized enhancements with vendors, validated releases, and set data-governance standards.",
      process: [
        "User Feedback: Regular check-ins with recruiters",
        "Data Audit: Fixed inconsistencies",
        "Configuration: Shipped workflow improvements",
      ],
      outcome:
        "Improved forecasting accuracy and created more reliable operational reporting through cleaner workflows and data.",
    },
  },
  {
    title: "Delivery KPI & Revenue Dashboards",
    category: "Data & Analytics",
    period: "2022 – Present",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description:
      "Built delivery and revenue dashboards tracking fill rate, ramp time, SLA adherence, leakage, and growth opportunities.",
    tags: ["Delivery KPIs", "Revenue Analysis", "Leadership Reporting"],
    caseStudy: {
      problem:
        "Stakeholders lacked visibility into real-time trends. Revenue leakages undetected until quarter-end.",
      solution:
        "Defined delivery KPIs and built revenue matrices, growth dashboards, and projection views for leadership.",
      process: ["Leakage Identification", "Dashboard Design", "Strategic Alignment"],
      outcome:
        "Leadership identified leakages in real-time and took corrective actions.",
    },
  },
  {
    title: "ServiceNow SOW Delivery",
    category: "Enterprise Delivery",
    period: "2022 – Present",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    description:
      "Translated fixed SOW outcomes into phased plans for niche ServiceNow roles across major workflow domains.",
    tags: ["ServiceNow", "SOW", "Program Delivery"],
    caseStudy: {
      problem:
        "Niche ServiceNow requirements were taking up to 90 days to fill, creating delivery risk against fixed milestones.",
      solution:
        "Scoped role requirements against deliverables and milestones, then converted scope into prioritized phased hiring plans.",
      process: ["SOW Scoping", "Role Prioritization", "Phased Deployment"],
      outcome: "Deployed 20+ consultants and reduced niche-role time-to-fill from 90 to 15 days.",
    },
  },
];

type Project = (typeof projects)[number];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="font-display font-semibold text-display-lg text-white mb-4">
            Projects
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            Problem → Solution → Outcome framing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 70}>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative surface surface-hover rounded-2xl overflow-hidden cursor-pointer w-full text-left h-full"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
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
                    <h3 className="font-display text-base font-semibold text-white">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
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
                    <span className="text-xs text-white/60 font-medium uppercase tracking-wider">
                      {selectedProject.category} • {selectedProject.period}
                    </span>
                    <DialogTitle className="font-display text-2xl font-semibold text-white mt-1">
                      {selectedProject.title}
                    </DialogTitle>
                  </div>
                  <DialogClose
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Close case study"
                  >
                    <X className="w-4 h-4 text-white/70" />
                  </DialogClose>
                </div>

                <div className="space-y-5">
                  {/* Problem — neutral */}
                  <div className="surface rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-white/70" />
                      <h4 className="text-sm font-semibold text-white">Problem</h4>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {selectedProject.caseStudy.problem}
                    </p>
                  </div>

                  {/* Solution — neutral */}
                  <div className="surface rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-white/70" />
                      <h4 className="text-sm font-semibold text-white">Solution</h4>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {selectedProject.caseStudy.solution}
                    </p>
                  </div>

                  {/* Process — neutral */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-white/70" />
                      <h4 className="text-sm font-semibold text-white">Process</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.caseStudy.process.map((step, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/80 border border-white/10"
                        >
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome — accent (the only place color lands) */}
                  <div className="rounded-xl p-4 bg-[hsl(var(--accent)/0.08)] border border-[hsl(var(--accent)/0.25)]">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-[hsl(var(--accent))]" />
                      <h4 className="text-sm font-semibold text-white">Outcome</h4>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {selectedProject.caseStudy.outcome}
                    </p>
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
