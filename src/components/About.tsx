import { MapPin, GraduationCap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-up">
            {/* BADGE REMOVED */}
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              About
            </h2>
            <h3 className="text-xl md:text-2xl text-white/80 font-medium">
              Building systems that work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">for people</span>.
            </h3>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white/50 font-light leading-relaxed">
              <p>
                I am an <strong className="text-white">Operations & Product Professional</strong> with 9 years of experience. My career has been defined by one core obsession: <em>Efficiency without losing Empathy.</em>
              </p>
              <p>
                Whether optimizing high-volume recruitment pipelines or configuring complex SaaS workflows, I bridge the gap between <strong>human needs</strong> and <strong>technical execution</strong>.
              </p>
            </div>
          </div>

          {/* Glass Card */}
          <div className="relative group animate-fade-up stagger-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50" />
            
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 md:p-10 hover:border-white/20 transition-colors shadow-2xl">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Sanket Tamboli</h3>
                  <p className="text-white/60 text-sm md:text-base">Product Operations Manager</p>
                </div>
                <div className="p-2 md:p-3 bg-white/5 rounded-full border border-white/10">
                   <Globe className="w-5 h-5 md:w-6 md:h-6 text-white/40" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="text-white/90 font-medium text-sm md:text-base">Vadodara, Gujarat</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Education</p>
                    <p className="text-white/90 font-medium text-sm md:text-base">Postgraduate in HRM</p>
                  </div>
                </div>

                <div className="pt-6 md:pt-8 border-t border-white/10">
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-bold mb-3">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {["AI Product Mgmt", "Lean Six Sigma", "Scrum Master"].map((c) => (
                      <Badge key={c} variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10 font-medium py-1 px-2 text-[10px] md:text-xs">
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
