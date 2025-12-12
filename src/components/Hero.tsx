import { FileText, ChevronDown, Zap } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Cinematic Ambient Background */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[600px] bg-blue-600/10 rounded-[100%] blur-[120px] pointer-events-none opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] hover:bg-white/10 transition-colors cursor-default animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[11px] font-medium text-white/80 uppercase tracking-widest">
            Available for Product Roles
          </span>
        </div>

        {/* Profile Visual */}
        <div className="mb-12 relative inline-block group animate-fade-up stagger-1">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl">
            <img 
              src={profileImage} 
              alt="Sanket Tamboli" 
              className="w-full h-full object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </div>
          
          {/* Floating Glass Badge */}
          <div className="absolute -right-12 top-8 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 shadow-2xl animate-fade-in hidden md:flex hover:scale-105 transition-transform">
            <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-xs font-bold text-white">9+ Years Exp.</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up stagger-2 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[1.1]">
          Bridging the gap between <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-blue-200">
            Vision & Execution.
          </span>
        </h1>

        <p className="animate-fade-up stagger-3 text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Product Operations Manager specializing in SaaS optimization, AI prototyping, and data-driven delivery strategies.
        </p>

        {/* Glass Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-4">
          <a 
            href="#projects"
            className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95"
          >
            View Selected Work
          </a>
          <a 
            href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>

      </div>

      <div className="absolute bottom-10 animate-bounce text-white/20">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
