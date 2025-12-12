import { MapPin, GraduationCap, Award, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#030303] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Typography */}
          <div className="space-y-8">
            <span className="text-purple-400 font-medium tracking-widest text-xs uppercase">The Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Building systems that work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">for people</span>.
            </h2>
            <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
              <p>
                I am an <strong className="text-white">Operations & Product Professional</strong> with 9 years of experience. My career has been defined by one core obsession: <em>Efficiency without losing Empathy.</em>
              </p>
              <p>
                Whether optimizing high-volume recruitment pipelines or configuring complex SaaS workflows, I bridge the gap between <strong>human needs</strong> and <strong>technical execution</strong>.
              </p>
            </div>
          </div>

          {/* Right: Glass Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50" />
            
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Sanket Tamboli</h3>
                  <p className="text-white/60">Product Operations Manager</p>
                </div>
                <Globe className="w-6 h-6 text-white/40" />
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Location</p>
                    <p className="text-white/90">Vadodara, Gujarat (Remote Ready)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Education</p>
                    <p className="text-white/90">Postgraduate in HRM (2021)</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-3">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {["AI Product Mgmt", "Lean Six Sigma", "Scrum Master"].map((c) => (
                      <Badge key={c} variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10 font-normal">
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
