import { FileText, ChevronDown, Zap, Award, Brain, CheckCircle2 } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-start pt-40 pb-24 px-6 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-10">
        
        {/* Status Pill */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-white/90 uppercase tracking-widest">
              Available for Product Roles
            </span>
          </div>
        </div>

        {/* Profile Group */}
        <div className="relative group animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
          {/* Glowing Halo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-2xl transform group-hover:scale-110 transition-transform duration-700" />
          
          {/* Glass Container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-2 bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/20 relative">
               <img 
                 src={profileImage} 
                 alt="Sanket Tamboli" 
                 className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500" 
               />
            </div>
          </div>

          {/* Right Badge: Experience */}
          <div className="absolute -right-6 md:-right-12 top-8 hidden md:flex items-center gap-3 px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-fade-in hover:scale-105 transition-transform cursor-default z-20">
            <div className="p-1.5 rounded-full bg-yellow-500/20 text-yellow-400">
               <Zap className="w-3.5 h-3.5 fill-yellow-400" />
            </div>
            <div className="text-left">
               <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider leading-none mb-0.5">Experience</span>
               <span className="block text-sm font-bold text-white leading-none">9+ Years</span>
            </div>
          </div>

          {/* Left Badge: Certifications (NEW) */}
          <div className="absolute -left-6 md:-left-16 bottom-4 hidden md:flex items-center gap-3 px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl animate-fade-in hover:scale-105 transition-transform cursor-default z-20">
            <div className="p-1.5 rounded-full bg-blue-500/20 text-blue-400">
               <Brain className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
               <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider leading-none mb-0.5">Certified</span>
               <span className="block text-xs font-bold text-white leading-none">AI • Agile • PM</span>
            </div>
          </div>
        </div>

        {/* Headline - Updated to be Quirky & Modern */}
        <div className="space-y-6 max-w-4xl animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Translating <span className="text-white/40 italic font-serif">"Vague Ideas"</span> <br />
            into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300">Shipped Reality.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            I don't just manage products; I engineer the flow. A Product Operations Manager obsessed with SaaS optimization and AI prototyping.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
          <a 
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center justify-center"
          >
            See How I Think
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
