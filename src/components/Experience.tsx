import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    role: "Senior Manager - Operations & Delivery",
    company: "Akshar Staffing",
    period: "Oct 2021 – Present",
    metric: "30% Efficiency Boost",
    context: "Owned internal SaaS configuration and gamified team performance.",
    description: [
      "Streamlined ATS workflows and optimized platform configurations.",
      "Applied product thinking to identify pain points and implement user-centric improvements.",
    ],
    tech: ["Ceipal ATS", "Excel", "Data Visualization"]
  },
  {
    role: "Lead Recruitment Executive - Talent Operations",
    company: "Diverse Lynx",
    period: "Apr 2021 – Oct 2021",
    metric: "100% SLA Compliance",
    context: "Managed operational delivery and client-supplier communications.",
    description: [
      "Collaborated cross-functionally to align hiring strategies with business objectives.",
      "Implemented rigorous QA checks for candidate data."
    ],
    tech: ["Vendor Mgmt", "JobDiva", "QA"]
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "Mar 2017 – Apr 2021",
    metric: "$200k+ Revenue Impact",
    context: "Strategic pipeline building for Fortune 500 clients.",
    description: [
      "Developed data-driven approaches to pipeline optimization.",
      "Led stakeholder reporting and requirement gathering."
    ],
    tech: ["Pipeline Strategy", "Stakeholder Mgmt"]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground">Focusing on impact, metrics, and operational excellence.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-1">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative bg-background border border-border rounded-2xl p-6 md:p-8 hover:border-primary/20 transition-all duration-300 opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                
                {/* Left: Role Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{exp.role}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed max-w-2xl">
                    {exp.context}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-xs text-secondary-foreground font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: The North Star Metric */}
                <div className="md:text-right shrink-0">
                  <div className="inline-flex flex-col items-center md:items-end p-4 rounded-xl bg-secondary/30 border border-border/50 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Impact
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-foreground">
                      {exp.metric}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
