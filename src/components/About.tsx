import { MapPin, GraduationCap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/Reveal";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal className="space-y-6">
            <h2 className="font-display font-semibold text-display-lg text-white">
              About
            </h2>
            <h3 className="text-xl md:text-2xl text-white/80 font-medium leading-tight">
              <span className="text-[hsl(var(--accent))]">Operations to Product</span>
            </h3>
            <div className="space-y-4 text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl">
              <p>
                Director of Delivery at Technocore360. Own end-to-end execution
                for the client-services portfolio across US, Europe, Canada, and
                India, leading an 11-person team to SLA and fulfillment targets.
              </p>
              <p>
                Act as internal product owner for the team's SaaS/ATS workflows
                — gather feedback, prioritize enhancements with vendors,
                validate releases, and enforce clean-data standards that
                improved forecasting accuracy.
              </p>
              <p>
                Delivered ServiceNow SOW engagements (ITSM/ITOM/HRSD/CSM),
                deploying 20+ consultants against fixed acceptance criteria and
                reducing time-to-fill on niche roles from 90 to 15 days.
              </p>
              <p>
                Define delivery KPIs and dashboards (fill rate, ramp time, SLA
                adherence) that surface revenue leakage and inform leadership
                decisions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative group">
            <div className="absolute inset-0 bg-[hsl(var(--accent)/0.10)] rounded-[2rem] blur-3xl opacity-60" />

            <div className="relative surface surface-hover rounded-3xl p-8 md:p-12 backdrop-blur-3xl shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Sanket Tamboli
                  </h3>
                  <p className="text-white/70">Director of Delivery — Client Services</p>
                </div>
                <Globe className="w-6 h-6 text-white/40" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">
                      Location
                    </p>
                    <p className="text-white/90 font-medium">Vadodara, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <GraduationCap className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-bold mb-1">
                      Education
                    </p>
                    <p className="text-white/90 font-medium">Postgraduate in HRM</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-wider font-bold mb-3">
                    Certifications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["AI Product Mgmt", "Lean Six Sigma", "Scrum Master"].map((c) => (
                      <Badge
                        key={c}
                        variant="secondary"
                        className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10 font-medium py-1 px-3"
                      >
                        {c}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
