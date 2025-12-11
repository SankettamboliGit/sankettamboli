import { Briefcase, TrendingUp, Users, Clock, Database, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    role: "Senior Manager - Operations & Delivery",
    company: "Akshar Staffing",
    period: "Oct 2021 – Present",
    location: "Vadodara, GJ",
    // Primary Impact Metric
    impact: "Reduced Team Attrition",
    impactIcon: <Users className="w-4 h-4 text-green-500" />,
    // Detailed Metrics from Resume
    metrics: [
      { label: "Coverage", value: "24/7 Global Ops" },
      { label: "Data Quality", value: "100% 'Clean Data'" },
      { label: "Team Size", value: "5-7 Recruiters" }
    ],
    description: [
      "Owned the maintenance and configuration of internal ATS, optimizing it through rigorous user feedback loops.",
      "Developed comprehensive incentive plans that significantly reduced attrition and drove higher monthly outputs.",
      "Managed capacity planning for distributed teams across India and US markets.",
    ],
    skills: ["SaaS Ops", "Gamification", "Capacity Planning"]
  },
  {
    role: "Lead Recruitment Executive - Talent Operations",
    company: "Diverse Lynx",
    period: "Apr 2021 – Oct 2021",
    impact: "Optimized Time-to-Fill",
    impactIcon: <Clock className="w-4 h-4 text-blue-500" />,
    metrics: [
      { label: "Delivery", value: "100% SLA Adherence" },
      { label: "Sourcing", value: "Multi-Channel" }
    ],
    description: [
      "Executed multi-channel sourcing strategies to optimize candidate quality and reduce time-to-fill for critical roles.",
      "Collaborated cross-functionally to align hiring strategies with business objectives.",
    ],
    skills: ["Sourcing Strategy", "Stakeholder Mgmt", "JobDiva"]
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "Mar 2017 – Apr 2021",
    impact: "Fortune 500 Placements",
    impactIcon: <Globe className="w-4 h-4 text-purple-500" />,
    metrics: [
      { label: "Pipeline", value: "Inventory-Based" },
      { label: "Clients", value: "Direct/VMS/MSP" }
    ],
    description: [
      "Built robust talent pipelines to efficiently match candidates with strategic roles.",
      "Developed data-driven approaches to pipeline optimization and stakeholder reporting.",
    ],
    skills: ["Pipeline Architecture", "Negotiation", "Market Analysis"]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-secondary/30 -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
             9+ years of operational leadership, measured by impact and efficiency.
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-border md:-translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-8 opacity-0 animate-fade-up stagger-${index + 1} ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 z-10 hidden md:block border-4 border-background shadow-sm" />

              {/* Content Card */}
              <div className="w-full md:w-[calc(50%-2rem)]">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-muted/60">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-col gap-1 mb-4">
                      <div className="flex justify-between items-start">
                         <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                           <Briefcase className="w-3 h-3" /> {exp.period}
                         </span>
                         {/* Mobile Impact Badge */}
                         <Badge variant="outline" className="flex gap-1 items-center bg-primary/5 text-primary border-primary/20">
                            {exp.impactIcon} {exp.impact}
                         </Badge>
                      </div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                        {exp.metrics.map((m, i) => (
                          <div key={i} className="bg-secondary/50 rounded-lg p-2 border border-border/50">
                             <p className="text-[10px] uppercase text-muted-foreground font-semibold">{m.label}</p>
                             <p className="text-sm font-bold text-foreground">{m.value}</p>
                          </div>
                        ))}
                    </div>

                    {/* Skills Footer */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {exp.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Spacer for the other side of the timeline */}
              <div className="w-full md:w-[calc(50%-2rem)] hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
