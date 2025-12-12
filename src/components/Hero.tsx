import { FileText, ChevronDown, Zap, Brain } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-start pt-40 pb-24 px-6 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-12">
        
        {/* Status Pill */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-medium text-white/90 uppercase tracking-widest">
              Available for Product Roles
            </span>
          </div>
        </div>

        {/* PROFILE GROUP - Perfectly Balanced */}
        <div className="relative group animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
          
          {/* Glowing Halo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-700" />
          
          {/* Center: Profile Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl z-10">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/20 relative">
               <img 
                 src={profileImage} 
                 alt="Sanket Tamboli" 
                 className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" 
               />
            </div>
          </div>

          {/* LEFT BADGE: Certifications (Pushed far left) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-48 hidden md:flex items-center gap-3 px-4 py-2 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-fade-in hover:scale-105 transition-transform cursor-default z-20">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
               <Brain className="w-4 h-4" />
            </div>
            <div className="text-left">
               <span className="block text-[10px] text-white/40 uppercase font-bold tracking-wider leading-none mb-1">Certified</span>
               <span className="block text-xs font-bold text-white leading-none">AI • Agile • PM</span>
            </div>
          </div>

          {/* RIGHT BADGE: Experience (Pushed far right) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-40 hidden md:flex items-center gap-3 px-4 py-2 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-fade-in hover:scale-105 transition-transform cursor-default z-20">
            <div className="p-2 rounded-xl bg-yellow-500/10 text-yellow-400">
               <Zap className="w-4 h-4 fill-yellow-400" />
            </div>
            <div className="text-left">
               <span className="block text-[10px] text-white/40 uppercase font-bold tracking-wider leading-none mb-1">Experience</span>
               <span className="block text-xs font-bold text-white leading-none">9+ Years</span>
            </div>
          </div>
        </div>

        {/* Mobile Badges (Stacked below image for small screens) */}
        <div className="flex md:hidden gap-3 -mt-6 animate-fade-up opacity-0" style={{ animationDelay: '150ms' }}>
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-white">Certified</span>
           </div>
           <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Zap className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-bold text-white">9+ Years</span>
           </div>
        </div>

        {/* Headline - Classy & Modern */}
        <div className="space-y-6 max-w-4xl animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Transforming Ambiguity into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-blue-200">
              Scalable Product Strategy.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            I bridge the gap between <strong>User Needs</strong> and <strong>Technical Execution</strong>. 
            A Product Operations Manager specializing in SaaS optimization and data-driven delivery.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center justify-center"
          >
            View Work
          </a>
          <a 
            href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 backdrop-blur-md transition-all flex items-center justify-center gap-2 hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce text-white/20">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
