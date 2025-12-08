import {
  Search,
  BarChart3,
  Workflow,
  FileSearch,
  Users,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Product Research & Competitive Analysis",
    description:
      "Deep dives into markets, competitors, and emerging trends to inform product decisions.",
  },
  {
    icon: BarChart3,
    title: "Market Research (Tech + Behavioral)",
    description:
      "Understanding user psychology and market dynamics in the technology space.",
  },
  {
    icon: Lightbulb,
    title: "AI Product Use-Case Analysis",
    description:
      "Identifying and evaluating AI integration opportunities for products and workflows.",
  },
  {
    icon: Workflow,
    title: "Workflow Optimization",
    description:
      "Streamlining processes and eliminating friction in operational systems.",
  },
  {
    icon: FileSearch,
    title: "ATS / Operations Systems Setup",
    description:
      "Configuration and optimization of applicant tracking and HR systems.",
  },
  {
    icon: Users,
    title: "User Needs Discovery & Documentation",
    description:
      "Uncovering and articulating user requirements for product development.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            How I Can Help
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card border border-border rounded-xl p-5 sm:p-6 hover:border-muted-foreground/30 transition-all duration-300 opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)} text-center`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
