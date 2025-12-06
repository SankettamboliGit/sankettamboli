import { MapPin, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="opacity-0 animate-fade-up">
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Building products that remove noise and return focus.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I care deeply about products that prioritize the user's attention
              and mental clarity. My journey from recruitment operations to
              product thinking has given me unique insights into how systems,
              people, and technology intersect.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently exploring the intersection of minimal technology,
              intentional design, and user-first decision making. Inspired by
              the Light Phone's philosophy of calm technology.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4 opacity-0 animate-fade-up stagger-2">
            {/* Location */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Location</span>
              </div>
              <p className="text-lg font-medium">Vadodara, Gujarat</p>
            </div>

            {/* Education */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-sm text-muted-foreground">Education</span>
              </div>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">PG in Human Resource Management</p>
                  <p className="text-sm text-muted-foreground">
                    M.S. University — 2021
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="font-medium">BE in Electrical Engineering</p>
                  <p className="text-sm text-muted-foreground">
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
