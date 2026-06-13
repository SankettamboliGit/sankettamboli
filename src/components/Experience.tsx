import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Director of Delivery — Client Services",
    company: "Technocore360",
    period: "Apr 2026 – Present",
    impact: "Portfolio Owner",
    description: "Own end-to-end delivery across IT, healthcare, pharma, and technical-functional domains for local to Fortune 200 clients. Lead an 11-person team across India and US to SLA and fulfillment targets. Delivered ServiceNow SOW engagements (ITSM/ITOM/HRSD/CSM), cutting time-to-fill on niche roles from 90 to 15 days. Act as internal product owner for the team's SaaS/ATS workflows.",
    tags: ["Portfolio Ownership", "ServiceNow SOW", "KPI & Dashboards"],
    color: "border-purple-500"
  },
  {
    role: "Senior Manager — Operations & Delivery",
    company: "Technocore360",
    period: "Apr 2025 – Jun 2026",
    impact: "Platform Owner",
    description: "Ran daily operations and capacity planning for a 5–7 person team across India and US. Built revenue matrices and growth dashboards that surfaced leakages for leadership. Audited ATS process adherence, enforced clean-data standards, and led requirement gathering with hiring managers to reduce requirement churn.",
    tags: ["Backlog Ownership", "Revenue Dashboards", "Process Design"],
    color: "border-blue-500"
  },
  {
    role: "Associate Delivery Manager",
    company: "Technocore360",
    period: "Apr 2022 – Mar 2025",
    impact: "Team Lead",
    description: "Led US IT hiring for Fortune 500 clients and start-ups, managing a 10-member team. Owned recruitment metrics, modified procedures to resolve bottlenecks, and partnered with department heads to forecast hiring needs.",
    tags: ["Team Leadership", "Metrics Ownership", "Stakeholder Planning"],
    color: "border-cyan-500"
  },
  {
    role: "Lead Recruitment Executive",
    company: "Diverse Lynx",
    period: "Apr 2021 – Oct 2021",
    impact: "Cross-Functional Execution",
    description: "Owned the full recruitment lifecycle for the US Delivery Center. Collaborated with leadership and hiring managers on a strategic recruiting process; used JobDiva to manage workflow tracking and ensure data accuracy across the funnel.",
    tags: ["Lifecycle Ownership", "Stakeholder Alignment", "ATS Workflows"],
    color: "border-pink-500"
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "Mar 2017 – Apr 2021",
    impact: "Enterprise Delivery",
    description: "Owned end-to-end delivery on Direct, VMS, and MSP client accounts. Built proactive candidate pipelines, defined requirements with BDMs, and gained platform familiarity through ServiceNow ecosystem recruiting — ITSM concepts, enterprise workflows, and user roles.",
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
