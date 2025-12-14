import { FileText, ChevronDown, Zap, Brain } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative w-full flex flex-col items-center justify-center pt-28 pb-12 md:pt-40 md:pb-24 px-4 md:px-6 overflow-hidden min-h-screen md:min-h-[90vh]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-600/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-8 md:gap-10">
        
        {/* Status Pill */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-medium text-white/90 uppercase tracking-widest">
              Available for Product Roles
            </span>
          </div>
        </div>

        {/* PROFILE ROW */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 animate-fade-up opacity-0" style={{ animationDelay: '100ms' }}>
          
          {/* Left Badge (Desktop) */}
          <div className="hidden md:flex flex-col items-end">
            <div className="px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform">
               <div className="text-right">
                 <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">Certified</span>
                 <span className="block text-sm font-bold text-white">AI • Agile • PM</span>
               </div>
               <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/10">
                 <Brain className="w-5 h-5" />
               </div>
            </div>
          </div>

          {/* Center: Profile Image (Responsive Size) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-blue-500/10 rounded-full blur-3xl opacity-60" />
            
            {/* Mobile: w-48 | Desktop: w-64 */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-black/40 relative">
                 <img 
                   src={profileImage} 
                   alt="Sanket Tamboli" 
                   className="w-full h-full object-cover scale-105" 
                 />
              </div>
            </div>
          </div>

          {/* Right Badge (Desktop) */}
          <div className="hidden md:flex flex-col items-start">
            <div className="px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform">
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
        <div className="flex md:hidden gap-3 -mt-2 animate-fade-up opacity-0" style={{ animationDelay: '150ms' }}>
           <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Brain className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] font-bold text-white">Certified</span>
           </div>
           <div className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl flex items-center gap-2 backdrop-blur-md">
              <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-bold text-white">9+ Years</span>
           </div>
        </div>

        {/* Headline - Optimized for Mobile Reading */}
        <div className="space-y-4 md:space-y-5 max-w-4xl animate-fade-up opacity-0" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] md:leading-[1.1]">
            Transforming Ambiguity into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-blue-200">
              Scalable Strategy.
            </span>
          </h1>
          <p className="text-base md:text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto px-2">
            I bridge the gap between <strong>User Needs</strong> and <strong>Technical Execution</strong>. 
            A Product Operations Manager specializing in SaaS optimization.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms' }}>
          <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-bold text-sm shadow-lg hover:scale-105 active:scale-95 transition-all text-center">
            View Work
          </a>
          <a href="https://drive.google.com/file/d/1CozgNLDwsi8hUY0Ead2Efa9Ibf5BNKqk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-sm backdrop-blur-md hover:bg-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105">
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-10 animate-bounce text-white/20">
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </section>
  );
};

export default Hero;
