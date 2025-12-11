import { ArrowRight, FileText, ChevronDown, Building2, Users, LineChart } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-foreground flex flex-col items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background/10 via-foreground to-foreground opacity-50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Profile Image */}
        <div className="mb-8 opacity-0 animate-fade-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-background/20 to-background/40 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-background/10 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden bg-foreground border-2 border-background/20">
                <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Copy */}
        <div className="opacity-0 animate-fade-up stagger-1 space-y-6 mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-background leading-tight">
            Bridging the Gap Between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-background via-background/80 to-background/50">
              User Needs & Technical Execution.
            </span>
          </h1>
          <p className="text-background/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Product Operations Manager & Strategy Specialist with 9+ years of experience optimizing SaaS platforms and scaling distributed teams.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-up stagger-2">
          <a 
            href="#projects"
            className="inline-flex items-center px-8 py-3 bg-background text-foreground hover:bg-background/90 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-background/20 hover:-translate-y-0.5"
          >
            View Case Studies
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a 
            href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-transparent border border-background/20 text-background hover:bg-background/10 rounded-full text-sm font-medium transition-all backdrop-blur-sm"
          >
            Download Resume
            <FileText className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* Social Proof / Trusted By */}
        <div className="mt-16 pt-8 border-t border-background/10 w-full max-w-xl opacity-0 animate-fade-up stagger-3">
          <p className="text-background/30 text-xs uppercase tracking-widest mb-4">Trusted expertise in</p>
          <div className="flex justify-center items-center gap-8 text-background/40">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">Talent Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <LineChart className="w-5 h-5" />
              <span className="text-sm font-medium">SaaS Strategy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-up stagger-4">
        <a href="#about" className="animate-bounce p-2 text-background/30 hover:text-background transition-colors">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
