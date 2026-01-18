import { MapPin, GraduationCap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              About
            </h2>
            <h3 className="text-xl md:text-3xl text-white/80 font-medium leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Operations to Product</span>
            </h3>
            <div className="space-y-4 text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl">
              <p>
                Owned internal SaaS platforms and workflow systems across US and India staffing operations.
              </p>
              <p>
                Translated business problems into executable workflows. Defined requirements, managed backlogs, and shipped process improvements.
              </p>
              <p>
                Worked cross-functionally with leadership, delivery teams, and vendors. Applied Scrum and Lean to drive execution under constraints.
              </p>
              <p>
                Used data and user feedback to identify bottlenecks and measure outcomes. Built dashboards for stakeholder visibility.
              </p>
            </div>
          </div>

          <div className="relative group animate-fade-up stagger-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-3xl opacity-40" />
            
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-colors shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Sanket Tamboli</h3>
                  <p className="text-white/60">Product Manager / Owner</p>
                </div>
                <Globe className="w-6 h-6 text-white/40" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="text-white/90 font-medium">Vadodara, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <GraduationCap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Education</p>
                    <p className="text-white/90 font-medium">Postgraduate in HRM</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-3">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {["AI Product Mgmt", "Lean Six Sigma", "Scrum Master"].map((c) => (
                      <Badge key={c} variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10 font-medium py-1 px-3">
                        {c}
                      </Badge>
                    ))}
                  </div>
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
