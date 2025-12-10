import {
  Compass,
  Map,
  Users,
  BarChart3,
  Layers,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Discovery Workshops",
    description:
      "Facilitated sessions to uncover user pain points, define problems, and align stakeholders on product vision.",
  },
  {
    icon: Map,
    title: "Product Roadmap Planning",
    description:
      "Strategic roadmap development balancing business goals, user needs, and technical feasibility.",
  },
  {
    icon: Users,
    title: "User Research & Interviews",
    description:
      "Qualitative and quantitative research to validate assumptions and inform product decisions.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Prioritization",
    description:
      "Framework-based feature prioritization using metrics, user feedback, and business impact analysis.",
  },
  {
    icon: Layers,
    title: "Product Requirements & Specs",
    description:
      "Clear PRDs, user stories, and acceptance criteria that bridge business needs and engineering execution.",
  },
  {
    icon: Lightbulb,
    title: "AI Product Strategy",
    description:
      "Identifying AI/ML integration opportunities to enhance product value and user experience.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How I Can Help
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-card border border-border rounded-xl p-6 hover:border-muted-foreground/30 transition-all duration-300 opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
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
