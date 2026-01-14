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
                 <span className="block text-sm font-bold text-white">AI • Agile • PM</span>
               </div>
               <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                 <Brain className="w-5 h-5" />
               </div>
            </div>
          </div>

          {/* Center: EXTRA LARGE Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/10 rounded-full blur-3xl transform group-hover:scale-105 transition-transform duration-700 opacity-60" />
            
            {/* Increased Size: w-64 (mobile) / w-80 (desktop) */}
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
                 <span className="block text-sm font-bold text-white">9+ Years</span>
               </div>
            </div>
          </div>
        </div>

        {/* Mobile Badges Row */}
        <div className="flex md:hidden gap-3 -mt-4 animate-fade-up opacity-0" style={{ animationDelay: '150ms' }}>
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-white">Certified</span>
           </div>
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-white">9+ Years</span>
           </div>
        </div>

        {/* Headline - REDUCED SIZE */}
        {/* text-3xl (mobile) / text-5xl (desktop) - Much cleaner */}
        <div className="space-y-5 max-w-3xl animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Operations Leader <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-blue-200">
              Transitioning to Product.
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl mx-auto">
            9 years building scalable workflows, optimizing internal platforms, and translating business needs into executable systems. Now bringing that execution mindset to <strong>Product Manager</strong> and <strong>Product Owner</strong> roles.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
          <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-bold text-xs uppercase tracking-wide hover:bg-gray-200 transition-all shadow-lg hover:scale-105 flex items-center justify-center">
            View Projects
          </a>
          <a href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xs uppercase tracking-wide hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:scale-105">
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce text-white/20">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
