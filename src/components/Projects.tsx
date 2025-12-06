import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ceipal ATS — Product Operations & Continuous Improvement",
    period: "2021 – Present",
    description:
      "Handling Ceipal end to end — configuration, workflow tuning, backend issue reporting, data exports, reporting logic, integrations with job boards, and procurement decisions.",
    tags: ["ATS", "Operations", "Product Thinking"],
  },
  {
    title: "Minimal Technology Research",
    period: "Ongoing",
    description:
      "A global self-driven research initiative analyzing user psychology, hardware trade-offs, distraction-free design philosophies, and emerging minimalist tech adoption across continents.",
    tags: ["Research", "Minimal Tech", "Light Phone"],
  },
  {
    title: 'The "Ultimate Dumb Phone" — Personal Concept',
    period: "Concept",
    description:
      "A self-directed vision study exploring ultra-minimal hardware + software design, physical interfaces, battery architecture, and essential-only features.",
    tags: ["Product Design", "Hardware", "Concept"],
  },
  {
    title: "Tooling Ecosystem Management & Procurement",
    period: "2021 – Present",
    description:
      "Assessing sourcing portals through ROI, usage behavior, conversion metrics, and cost-per-hire analysis; eliminating redundancy and improving efficiency.",
    tags: ["Procurement", "ROI Analysis", "Operations"],
  },
  {
    title: "Vibe Coding & Human Attention Research",
    period: "Ongoing",
    description:
      "Behavioral study on why users choose slow, simple, intentional tech — and how friction becomes a feature, not a flaw.",
    tags: ["Behavioral Research", "UX", "Attention"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Selected Work & Research
          </h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-muted-foreground/30 transition-all duration-300 opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
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
                        className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded"
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
    </section>
  );
};

export default Projects;
