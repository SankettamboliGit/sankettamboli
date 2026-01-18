import { FileText, ChevronDown, Zap, Brain } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden min-h-[90vh]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-8 md:gap-12">
        
        {/* Status Pill */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-medium text-white/90 uppercase tracking-widest">
              Open to PM / PO Roles
            </span>
          </div>
        </div>

        {/* PROFILE ROW */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
          
          {/* Left Badge: Certifications */}
          <div className="hidden md:flex flex-col items-end">
            <div className="px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
               <div className="text-right">
                 <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">Certified</span>
                 <span className="block text-sm font-bold text-white">AI PM • Agile • Scrum</span>
               </div>
               <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                 <Brain className="w-5 h-5" />
               </div>
            </div>
          </div>

          {/* Center: Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/10 rounded-full blur-3xl transform group-hover:scale-105 transition-transform duration-700 opacity-60" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-black/40 relative">
                 <img 
                   src={profileImage} 
                   alt="Sanket Tamboli" 
                   className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" 
                 />
              </div>
            </div>
          </div>

          {/* Right Badge: Experience */}
          <div className="hidden md:flex flex-col items-start">
            <div className="px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform cursor-default">
               <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/10">
                 <Zap className="w-5 h-5 fill-yellow-400" />
               </div>
               <div>
                 <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">Experience</span>
                 <span className="block text-sm font-bold text-white">9+ Years Ops</span>
               </div>
            </div>
          </div>
        </div>

        {/* Mobile Badges Row */}
        <div className="flex md:hidden gap-3 -mt-4 animate-fade-up opacity-0" style={{ animationDelay: '150ms' }}>
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-white">AI PM • Agile</span>
           </div>
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-white">9+ Years</span>
           </div>
        </div>

        {/* Headline */}
        <div className="space-y-5 max-w-2xl animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Product-Focused Operator
          </h1>
          <p className="text-base md:text-lg text-white/50 font-light max-w-lg mx-auto leading-relaxed">
            9 years owning workflows, internal tools, and cross-functional execution across US and India markets. Transitioning to PM / PO roles.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
          <a 
            href="#projects" 
            className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            View Work
          </a>
          <a 
            href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white/90 font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>

        {/* Scroll Cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown className="w-5 h-5 text-white/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
