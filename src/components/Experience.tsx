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
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Professional Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-1/2 w-3 h-3 bg-foreground rounded-full md:-translate-x-1/2 top-1.5`}
                />

                {/* Content */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-1 mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <ul
                    className={`space-y-2 text-sm text-muted-foreground ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
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
