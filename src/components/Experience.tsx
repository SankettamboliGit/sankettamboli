import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Manager - Ops",
    company: "Akshar Staffing",
    period: "2021 – Present",
    impact: "Reduced Attrition",
    description: "Owned internal SaaS configuration and gamified team strategies.",
    tags: ["SaaS Ops", "Gamification"],
    color: "border-purple-500"
  },
  {
    role: "Lead Recruitment Exec",
    company: "Diverse Lynx",
    period: "2021",
    impact: "Optimized Time-to-Fill",
    description: "Executed multi-channel sourcing strategies to optimize quality.",
    tags: ["Sourcing", "Stakeholder Mgmt"],
    color: "border-blue-500"
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "2017 – 2021",
    impact: "Fortune 500 Clients",
    description: "Built robust talent pipelines to efficiently match candidates.",
    tags: ["Pipeline", "Negotiation"],
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
          <p className="text-white/50 text-base md:text-lg">9+ years of operational leadership.</p>
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
