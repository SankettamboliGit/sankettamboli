import { MapPin, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Text Content */}
          <div className="opacity-0 animate-fade-up">
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Building systems that work for people, not against them.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Operations and talent-tech professional with 9 years of experience improving workflows, managing stakeholder expectations, and partnering with teams. I've successfully bridged the gap between user needs and technical execution, specifically optimizing SaaS platforms like ATS through rigorous user feedback loops and system enhancements.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Skilled in strategic negotiation, resource planning, and Agile methodologies. I translate complex needs into clear, actionable strategies — ensuring initiatives are not only viable but also scalable and efficient.
            </p>
          </div>

          {/* Info Cards - Glassmorphism style */}
          <div className="space-y-4 opacity-0 animate-fade-up stagger-2">
            {/* Location */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-foreground" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Location</span>
              </div>
              <p className="text-lg font-medium">Vadodara, Gujarat</p>
            </div>

            {/* Education */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-foreground" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Education</span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-sm">Postgraduate in HRM</p>
                  <p className="text-xs text-muted-foreground">
                    M.S. University of Baroda — 2021
                  </p>
                </div>
                <div className="pt-3 border-t border-border/30">
                  <p className="font-medium text-sm">BE in Electronics & Communications</p>
                  <p className="text-xs text-muted-foreground">
                    S.V.P.I.T, Vasad — 2017
                  </p>
                </div>
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-card border border-border rounded-xl p-6 hover:border-foreground/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="w-4 h-4 text-foreground" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Certificates</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Lean Six Sigma White Belt", "AI Product Management", "Agile Scrum Master", "Product Management"].map((cert) => (
                  <span key={cert} className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full border border-border">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
