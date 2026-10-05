import { TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

const experiences = [
  {
    role: "Delivery Director",
    company: "Technocore360",
    period: "Apr 2026 – Present",
    impact: "Portfolio Owner",
    description:
      "Own end-to-end client-services delivery, leading a global India/U.S. team to SLA and fulfillment targets for clients up to Fortune 200 enterprises. Scope ServiceNow SOW roles across ITSM, ITOM, GRC, HRSD, and CSM; deployed 20+ consultants and cut niche-role time-to-fill from 90 to 15 days. Define delivery KPIs, manage executive stakeholders and vendors, and mentor team leads.",
    tags: ["ServiceNow SOW", "Portfolio Leadership", "KPIs & Governance"],
    current: true,
  },
  {
    role: "Senior Manager — Operations & Delivery",
    company: "Technocore360",
    period: "Apr 2025 – Mar 2026",
    impact: "Operations Leader",
    description:
      "Managed daily operations and capacity planning for a 5–7 person India/U.S. team with 24/7 coverage. Built revenue matrices and growth dashboards, owned ATS configuration and data standards, advised hiring managers on requirement feasibility, and designed retention and mentorship frameworks.",
    tags: ["Capacity Planning", "Revenue Dashboards", "ATS Governance"],
  },
  {
    role: "Associate Delivery Manager",
    company: "Technocore360",
    period: "Apr 2022 – Mar 2025",
    impact: "Team Lead",
    description:
      "Led delivery for Fortune 500 clients and start-ups across ServiceNow SOW, IT, non-IT, healthcare, pharma, and life sciences roles, managing a 10-member team. Acted as internal product owner for SaaS/ATS workflows by gathering feedback, prioritizing vendor enhancements, validating releases, and setting data-governance standards.",
    tags: ["Internal Product Owner", "Release Validation", "Team Leadership"],
  },
  {
    role: "Team Lead Recruitment",
    company: "Technocore360",
    period: "Oct 2021 – Mar 2022",
    impact: "Resourcing Lead",
    description:
      "Led business-aligned resourcing professionals across ServiceNow SOW and broader technology and life-sciences roles. Tracked time-to-hire and cost-per-hire, introduced sourcing methods, evaluated recruitment software, and forecast hiring needs with department managers.",
    tags: ["Resource Planning", "Hiring Analytics", "Software Evaluation"],
  },
  {
    role: "Lead Recruitment Executive",
    company: "Diverse Lynx",
    period: "Apr 2021 – Oct 2021",
    impact: "Cross-Functional Execution",
    description:
      "Ran full-lifecycle recruiting for the U.S. Delivery Center in a hyper-growth environment. Partnered with leadership, HR, and hiring managers; sourced IT professionals across technical and functional roles; and kept funnel data accurate in JobDiva.",
    tags: ["Lifecycle Ownership", "Stakeholder Alignment", "ATS Workflows"],
  },
  {
    role: "Talent Acquisition Lead",
    company: "Rang Technologies",
    period: "Apr 2019 – Mar 2021",
    impact: "Award-Winning Lead",
    description:
      "Trained and mentored recruiters, deployed resources across client requirements, and partnered with Business Development on assigned client relationships. Earned the Striker Award 2019 for cracking the company's largest revenue-generating client and a Loyalty Award.",
    tags: ["Mentoring", "Client Relationships", "Striker Award"],
  },
  {
    role: "Talent Acquisition Specialist",
    company: "Rang Technologies Inc",
    period: "Mar 2017 – Apr 2019",
    impact: "Top Performer",
    description:
      "Managed full-lifecycle U.S. recruiting across IT, non-IT, healthcare, Salesforce, and insurance for enterprise clients including Horizon, Deloitte, and Verizon. Earned the Flare 2018 Money Maker Award runner-up for the company's second-highest gross profit.",
    tags: ["Enterprise Recruiting", "Offer Negotiation", "Revenue Performance"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#030303] relative">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-20">
          <h2 className="font-display font-semibold text-display-lg text-white mb-4">
            Experience
          </h2>
          <p className="text-white/60 text-base md:text-lg">
            9+ years leading delivery, aligning stakeholders, and improving systems under
            constraints.
          </p>
        </Reveal>

        <div className="relative space-y-10 md:space-y-16">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <Reveal
              key={index}
              delay={index * 80}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot — monochrome, accent ring only on current role */}
              <div
                className={`absolute left-[19px] md:left-1/2 w-4 h-4 rounded-full bg-[#030303] border-[3px] md:-translate-x-1/2 mt-6 z-10 ${
                  exp.current
                    ? "border-[hsl(var(--accent))] shadow-[0_0_0_4px_hsl(var(--accent)/0.15)]"
                    : "border-white/30"
                }`}
              />

              <div className="w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0">
                <div className="group surface surface-hover p-6 md:p-8 rounded-2xl backdrop-blur-md">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider">
                      {exp.period}
                    </span>
                    <Badge
                      variant="outline"
                      className="border-white/10 text-white/90 text-[10px] bg-white/5 font-medium"
                    >
                      <TrendingUp className="w-3 h-3 mr-1" /> {exp.impact}
                    </Badge>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-white/60 text-sm font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-full md:w-[calc(50%-3rem)]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
