import { MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-muted/50 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="opacity-0 animate-fade-up">
            <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Building products that remove noise and return focus.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              I care deeply about products that prioritize the user's attention
              and mental clarity. My journey from recruitment operations to
              product thinking has given me unique insights into how systems,
              people, and technology intersect.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Currently exploring the intersection of minimal technology,
              intentional design, and user-first decision making. Inspired by
              the Light Phone's philosophy of calm technology.
            </p>
          </div>

          {/* Info Cards - Glassmorphism style */}
          <div className="space-y-4 opacity-0 animate-fade-up stagger-2">
            {/* Location */}
            <div className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-2xl p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.15)] transition-all duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm flex items-center justify-center border border-accent/20">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Location</span>
              </div>
              <p className="text-lg font-medium">Vadodara, Gujarat</p>
            </div>

            {/* Education */}
            <div className="backdrop-blur-xl bg-card/80 border border-border/50 rounded-2xl p-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.15)] transition-all duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm flex items-center justify-center border border-accent/20">
                  <GraduationCap className="w-4 h-4 text-accent" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Education</span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-sm">PG in Human Resource Management</p>
                  <p className="text-xs text-muted-foreground">
                    M.S. University — 2021
                  </p>
                </div>
                <div className="pt-3 border-t border-border/30">
                  <p className="font-medium text-sm">BE in Electrical Engineering</p>
                  <p className="text-xs text-muted-foreground">
                    S.V.I.T, Vasad — 2017
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
