import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    role: "Senior Manager - Operations & Delivery",
    company: "Akshar Staffing",
    period: "Oct 2021 – Present",
    // Use the exact metric from resume: "significantly reducing attrition" -> "Reduced Attrition"
    metric: "Reduced Team Attrition", 
    context: "Strategic capacity planning and SaaS platform ownership.",
    description: [
      "Owned the maintenance and configuration of internal SaaS platform, optimizing it through rigorous user feedback loops.",
      "Developed comprehensive incentive plans that significantly reduced attrition and drove higher monthly outputs.",
      "Managed daily operations for a team of 5-7 recruiters, ensuring 24/7 coverage.",
    ],
    tech: ["Ceipal ATS", "Gamification Strategy", "Data Analytics"]
  },
  {
    role: "Lead Recruitment Executive - Talent Operations",
    company: "Diverse Lynx",
    period: "Apr 2021 – Oct 2021",
    // Metric from resume: "reduce time-to-fill"
    metric: "Optimized Time-to-Fill", 
    context: "Operational delivery and multi-channel sourcing strategy.",
    description: [
      "Executed multi-channel sourcing strategies to optimize candidate quality and reduce time-to-fill for critical roles.",
      "Led operational delivery and client-supplier communications, ensuring strict adherence to timelines.",
    ],
    tech: ["Sourcing Strategy", "JobDiva", "Stakeholder Mgmt"]
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "Mar 2017 – Apr 2021",
    // Metric from resume: "smooth delivery and successful placements" -> "High Placement Success"
    metric: "High Placement Success",
    context: "Full lifecycle management for Fortune 500 clients.",
    description: [
      "Directed the full recruitment lifecycle for contract and direct placement roles.",
      "Built robust talent pipelines to efficiently match candidates with strategic roles.",
    ],
    tech: ["Pipeline Building", "VMS/MSP", "Negotiation"]
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
          <p className="text-muted-foreground">
            A timeline of operational leadership and strategic delivery.
          </p>
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

                {/* Right: The North Star Metric (Authentic) */}
                <div className="md:text-right shrink-0">
                  <div className="inline-flex flex-col items-center md:items-end p-4 rounded-xl bg-secondary/30 border border-border/50 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> Impact
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-foreground">
                      {exp.metric}
                    </span>
                  </div>
                </div>

              </div>
              
              {/* Description Bullets */}
              <div className="mt-6 pl-4 border-l-2 border-border/50">
                <ul className="space-y-2 text-muted-foreground text-sm">
                   {exp.description.map((item, i) => (
                     <li key={i}>{item}</li>
                   ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
