import { FileText, ChevronDown, Zap, Brain } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-screen overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-10">
        
        {/* Status Pill */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-medium text-white/90 uppercase tracking-widest">
              Available for Product Roles
            </span>
          </div>
        </div>

        {/* Profile Row - Locked Spacing */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
          
          {/* Left Badge */}
          <div className="hidden md:flex flex-col items-end">
            <div className="px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg flex items-center gap-3">
               <div className="text-right">
                 <span className="block text-[9px] text-white/50 uppercase font-bold tracking-wider">Certified</span>
                 <span className="block text-xs font-bold text-white">AI • Agile • PM</span>
               </div>
               <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/10">
                 <Brain className="w-4 h-4" />
               </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/10 rounded-full blur-2xl opacity-60" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-black/40">
                 <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Right Badge */}
          <div className="hidden md:flex flex-col items-start">
            <div className="px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg flex items-center gap-3">
               <div className="p-1.5 rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/10">
                 <Zap className="w-4 h-4 fill-yellow-400" />
               </div>
               <div>
                 <span className="block text-[9px] text-white/50 uppercase font-bold tracking-wider">Experience</span>
                 <span className="block text-xs font-bold text-white">9+ Years</span>
               </div>
            </div>
          </div>
        </div>

        {/* Headline - Standardized Size */}
        <div className="space-y-4 max-w-4xl animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Transforming Ambiguity into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300">
              Scalable Strategy.
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            I bridge the gap between User Needs and Technical Execution.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
          <a href="#projects" className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all">
            View Work
          </a>
          <a href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 animate-bounce text-white/20">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
