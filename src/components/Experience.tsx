import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Manager - Operations & Delivery",
    company: "Akshar Staffing",
    period: "Oct 2021 – Present",
    impact: "Reduced Team Attrition",
    description: "Owned internal SaaS configuration and gamified team performance strategies.",
    tags: ["SaaS Ops", "Gamification"],
    color: "border-purple-500"
  },
  {
    role: "Lead Recruitment Executive",
    company: "Diverse Lynx",
    period: "Apr 2021 – Oct 2021",
    impact: "Optimized Time-to-Fill",
    description: "Executed multi-channel sourcing strategies to optimize candidate quality.",
    tags: ["Sourcing", "Stakeholder Mgmt"],
    color: "border-blue-500"
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "Mar 2017 – Apr 2021",
    impact: "Fortune 500 Placements",
    description: "Built robust talent pipelines to efficiently match candidates with strategic roles.",
    tags: ["Pipeline", "Negotiation"],
    color: "border-green-500"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-[#030303] relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Professional Journey</h2>
          <p className="text-white/50 text-lg">9+ years of operational leadership.</p>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : ""} animate-fade-up stagger-${index + 1}`}>
              <div className={`absolute left-[29px] md:left-1/2 w-4 h-4 rounded-full bg-[#030303] border-[3px] ${exp.color} md:-translate-x-1/2 mt-8 z-10 shadow-[0_0_15px_currentColor] text-white`} />

              <div className="w-full md:w-[calc(50%-2.5rem)] pl-20 md:pl-0">
                <div className="group relative bg-white/5 border border-white/10 hover:border-white/20 p-8 rounded-3xl backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-white/40 uppercase tracking-wider">{exp.period}</span>
                    <Badge variant="outline" className="border-white/10 text-white/90 text-[10px] bg-white/5 font-medium">
                      <TrendingUp className="w-3 h-3 mr-1" /> {exp.impact}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-purple-300/80 text-sm font-medium mb-4">{exp.company}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{exp.description}</p>
                  <div className="flex gap-2">
                    {exp.tags.map(t => (
                      <span key={t} className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/5 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-full md:w-[calc(50%-2.5rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
