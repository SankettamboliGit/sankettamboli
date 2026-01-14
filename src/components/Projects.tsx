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
    category: "Rapid Prototyping",
    period: "2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", 
    description: "Designed and deployed this fully responsive portfolio in under 48 hours using AI-assisted development tools, demonstrating my ability to move from idea to working product without traditional development cycles.",
    tags: ["Lovable", "AI Tools", "Rapid Execution"],
    caseStudy: {
      problem: "Traditional development creates a lag between product vision and technical execution. As a PM candidate, I needed to demonstrate both product thinking and the ability to ship.",
      solution: "Used Lovable.dev and natural language prompting to build a production-ready portfolio. Owned the entire process: information architecture, content strategy, and iterative refinement.",
      process: ["Problem Definition: What should my portfolio communicate?", "Information Architecture: Sections, flow, and hierarchy", "Iterative Development: Prompt, review, refine across 50+ iterations"],
      outcome: "A working product that showcases PM skills (systems thinking, prioritization, user focus) while demonstrating technical fluency and execution speed."
    }
  },
  {
    title: "Internal ATS Platform Ownership",
    category: "Product Operations",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
    description: "Owned end-to-end maintenance and configuration of internal SaaS platform (ATS). Ran user feedback loops, defined custom metrics, and shipped workflow improvements that directly impacted team output.",
    tags: ["Platform Ownership", "User Feedback", "Configuration"],
    caseStudy: {
      problem: "Operational bottlenecks and data inconsistencies were hindering strategic decisions. Users (recruiters) had workarounds that bypassed the system.",
      solution: "Took ownership of platform configuration, established feedback mechanisms, and defined metrics that aligned user behavior with business goals.",
      process: ["User Feedback Collection: Regular check-ins with recruiters", "Data Audit: Identified and fixed inconsistencies", "Configuration Changes: Shipped workflow improvements"],
      outcome: "Delivered reliable data environment and actionable insights to leadership. Reduced workarounds by making the system work for users, not against them."
    }
  },
  {
    title: "Revenue Intelligence Dashboards",
    category: "Data & Analytics",
    period: "2022 – Present",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    description: "Built revenue reports and growth projection dashboards that identified leakages and informed strategic corrections at leadership level.",
    tags: ["Dashboards", "Revenue Ops", "Business Intelligence"],
    caseStudy: {
      problem: "Stakeholders lacked visibility into real-time financial trends. Revenue leakages went undetected until end-of-quarter reviews.",
      solution: "Designed and deployed dynamic revenue reports with clear visualizations. Created growth projection matrices that enabled proactive decision-making.",
      process: ["Leakage Identification: Where is money falling through?", "Dashboard Design: What do stakeholders need to see?", "Strategic Alignment: How do metrics tie to business goals?"],
      outcome: "Enabled leadership to identify revenue leakages in real-time and take corrective actions before they compounded."
    }
  },
  {
    title: "Team Gamification & Retention",
    category: "Product Strategy",
    period: "2021 – Present",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    description: "Designed and implemented gamification strategies including incentive plans and retention roadmaps to reduce attrition and drive performance.",
    tags: ["Gamification", "Behavioral Design", "Retention"],
    caseStudy: {
      problem: "High attrition rates were affecting team stability and monthly output targets. Traditional incentives weren't moving the needle.",
      solution: "Designed a comprehensive gamification strategy with clear reward structures, performance improvement plans, and capacity planning to match workload to team size.",
      process: ["Behavioral Analysis: Why are people leaving?", "Incentive Design: What motivates this team?", "Implementation: Roll out and measure"],
      outcome: "Reduced attrition significantly and drove higher monthly outputs. Created a playbook that could be replicated across teams."
    }
  },
  {
    title: "Talent Pipeline Architecture",
    category: "Supply Chain Ops",
    period: "2017 – 2021",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    description: "Shifted from reactive sourcing to proactive pipeline building, creating scalable candidate inventories for niche enterprise roles including ServiceNow ecosystem positions.",
    tags: ["Pipeline Strategy", "Enterprise Ops", "ServiceNow"],
    caseStudy: {
      problem: "Reactive 'Just-in-Time' sourcing led to long lead times and missed opportunities with Fortune 500 clients.",
      solution: "Designed an 'Inventory-Based' pipeline strategy—building talent pools before demand rather than scrambling after. Included ServiceNow Developer and QA roles.",
      process: ["Market Analysis: What roles will be needed?", "Pipeline Design: How do we maintain warm relationships?", "Cross-Functional Comms: Aligning sales, delivery, and sourcing"],
      outcome: "Reduced time-to-fill and ensured continuous availability of qualified candidates. Gained working familiarity with ITSM and enterprise platform concepts."
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
