import { ArrowRight, FileText, ChevronDown, CheckCircle2, Zap, LayoutTemplate } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-foreground flex flex-col items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden">
      
      {/* 1. Dynamic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px] opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* 2. Status Badge */}
        <div className="mb-8 opacity-0 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-background/80 tracking-wide uppercase">
              Available for Product & Ops Roles
            </span>
          </div>
        </div>

        {/* 3. Main Profile Visual - Increased Margin to prevent overlap */}
        <div className="relative mb-24 opacity-0 animate-fade-up stagger-1 group">
          {/* Central Image */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-xl">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background/10 relative z-10">
               <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
            </div>
            
            {/* Floating Glass Card - Left (Experience) */}
            <div className="absolute -left-16 md:-left-24 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/10 backdrop-blur-xl border border-white/10 shadow-xl -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 z-20">
               <div className="p-2 bg-background/20 rounded-lg">
                 <Zap className="w-4 h-4 text-yellow-300" />
               </div>
               <div className="text-left">
                 <p className="text-xs text-background/60 font-medium">Experience</p>
                 <p className="text-sm font-bold text-white">9+ Years</p>
               </div>
            </div>

            {/* Floating Glass Card - Right (Certification) */}
            <div className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-background/10 backdrop-blur-xl border border-white/10 shadow-xl translate-x-4 group-hover:translate-x-0 transition-transform duration-500 z-20">
               <div className="p-2 bg-background/20 rounded-lg">
                 <CheckCircle2 className="w-4 h-4 text-green-300" />
               </div>
               <div className="text-left">
                 <p className="text-xs text-background/60 font-medium">Certified</p>
                 <p className="text-sm font-bold text-white">PM & Agile</p>
               </div>
            </div>
          </div>
        </div>

        {/* 4. Power Headline - Size Reduced */}
        <div className="opacity-0 animate-fade-up stagger-2 space-y-6 mb-12 max-w-4xl relative z-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2]">
            Transforming Ambiguity into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200 animate-pulse">
              Scalable Product Strategy
            </span>
          </h1>
          <p className="text-background/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            I bridge the gap between <strong>User Needs</strong> and <strong>Technical Execution</strong>. 
            A Product Operations Manager specializing in SaaS optimization, AI prototyping, and data-driven delivery.
          </p>
        </div>

        {/* 5. Dual High-Contrast CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-up stagger-3 w-full sm:w-auto">
          <a 
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-foreground hover:bg-gray-100 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] hover:-translate-y-1"
          >
            Explore My Work
            <LayoutTemplate className="ml-2 h-4 w-4" />
          </a>
          <a 
            href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full text-sm font-semibold transition-all backdrop-blur-sm"
          >
            Download Resume
            <FileText className="ml-2 h-4 w-4" />
          </a>
        </div>

        {/* 6. Core Competencies Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 w-full max-w-3xl opacity-0 animate-fade-up stagger-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-background/40">
            {["Product Operations", "Generative AI", "SaaS Strategy", "Agile Leadership"].map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                <span className="text-sm font-medium tracking-wide">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-fade-up stagger-5">
        <a href="#about" className="animate-bounce p-3 text-background/20 hover:text-white transition-colors duration-300">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
