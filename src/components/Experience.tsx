import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Manager – Operations",
    company: "Akshar Staffing",
    period: "2021 – Present",
    impact: "Platform Owner",
    description: "Owned configuration and optimization of internal ATS. Defined KPIs, ran user feedback loops, and shipped workflow improvements. Built dashboards for revenue tracking and gamification systems to drive team performance.",
    tags: ["Backlog Ownership", "KPI Definition", "Process Design"],
    color: "border-purple-500"
  },
  {
    role: "Lead – Delivery Operations",
    company: "Diverse Lynx",
    period: "2021",
    impact: "Cross-Functional Execution",
    description: "Managed multi-stakeholder delivery pipelines. Defined requirements, reduced cycle time, and ensured SLA compliance across clients, vendors, and internal teams.",
    tags: ["Stakeholder Alignment", "SLA Management", "Delivery Ops"],
    color: "border-blue-500"
  },
  {
    role: "Lead – Talent Operations",
    company: "Rang Technologies",
    period: "2017 – 2021",
    impact: "Enterprise Delivery",
    description: "Built scalable pipelines for Fortune 500 clients. Gained platform familiarity through ServiceNow ecosystem recruiting—understanding ITSM concepts, enterprise workflows, and user roles.",
    tags: ["Pipeline Architecture", "ServiceNow Exposure", "Enterprise Ops"],
    color: "border-green-500"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#030303] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-white/50 text-base md:text-lg">9 years owning systems, aligning stakeholders, and delivering under constraints.</p>
        </div>

        <div className="relative space-y-10 md:space-y-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} animate-fade-up stagger-${index + 1}`}>
              
              {/* Dot */}
              <div className={`absolute left-[19px] md:left-1/2 w-4 h-4 rounded-full bg-[#030303] border-[3px] ${exp.color} md:-translate-x-1/2 mt-6 z-10`} />

              {/* Content Card */}
              <div className="w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0">
                <div className="group relative bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">{exp.period}</span>
                    <Badge variant="outline" className="border-white/10 text-white/90 text-[10px] bg-white/5 font-medium">
                      <TrendingUp className="w-3 h-3 mr-1" /> {exp.impact}
                    </Badge>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-purple-300/80 text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(t => (
                      <span key={t} className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-full md:w-[calc(50%-3rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
