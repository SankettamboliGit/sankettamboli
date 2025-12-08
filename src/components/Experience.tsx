const experiences = [
  {
    role: "Operations Manager",
    company: "Akshar Staffing",
    period: "Oct 2021 – Present",
    description: [
      "Managing end-to-end recruitment operations",
      "Overseeing ATS usage (Ceipal) and workflow optimization",
      "Training teams and building data-driven processes",
      "Handling sourcing tool procurement and performance measurement",
    ],
  },
  {
    role: "Lead Recruitment Executive",
    company: "Diverse Lynx",
    period: "2021",
    description: [
      "Full-cycle recruitment for IT roles",
      "ATS handling and stakeholder coordination",
      "Building recruitment pipelines and processes",
    ],
  },
  {
    role: "Lead Recruiter",
    company: "Rang Technologies",
    period: "2020",
    description: [
      "High-volume technical recruiting",
      "JobDiva → Ceipal system usage",
      "Client collaboration and pipeline management",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-card/50">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Professional Journey
          </h2>
        </div>

        {/* Timeline - Centered vertical layout */}
        <div className="relative flex flex-col items-center">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative w-full max-w-md mb-8 last:mb-0 opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-foreground rounded-full top-6 z-10" />

              {/* Content */}
              <div className="bg-card border border-border rounded-xl p-5 sm:p-6 mx-4 sm:mx-8 text-center">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  {exp.period}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mt-1 mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
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
