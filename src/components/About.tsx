import { MapPin, GraduationCap, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 animate-fade-up">
            <span className="text-purple-400 font-medium tracking-widest text-xs uppercase">The Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Building systems that work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">for people</span>.
            </h2>
            <div className="space-y-6 text-base md:text-lg text-white/50 font-light leading-relaxed">
              <p>
                I am an <strong className="text-white">Operations & Product Professional</strong> with 9 years of experience. My career has been defined by one core obsession: <em>Efficiency without losing Empathy.</em>
              </p>
            </div>
          </div>

          <div className="relative group animate-fade-up stagger-2">
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Sanket Tamboli</h3>
                  <p className="text-white/60">Product Operations Manager</p>
                </div>
                <Globe className="w-6 h-6 text-white/40" />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <p className="text-white/90">Vadodara, Gujarat (Remote Ready)</p>
                </div>
                <div className="flex items-center gap-4">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  <p className="text-white/90">Postgraduate in HRM (2021)</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  {["AI Product Mgmt", "Lean Six Sigma", "Scrum Master"].map((c) => (
                    <Badge key={c} variant="secondary" className="bg-white/5 text-white/80 border-white/10">
                      {c}
                    </Badge>
                  ))}
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
