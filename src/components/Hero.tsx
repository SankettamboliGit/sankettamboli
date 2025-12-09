import { FileText, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-foreground flex flex-col items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden">
      {/* Abstract background - liquid glass inspired */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-background/10 to-transparent rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto text-center flex flex-col items-center justify-center">
        {/* Profile Image with liquid glass ring */}
        <div className="mb-10 opacity-0 animate-fade-up">
          <div className="relative group">
            {/* Outer glow - liquid effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-background/10 to-accent/20 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110" />
            {/* Glass ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-background/30 via-accent/20 to-background/30 rounded-full backdrop-blur-sm" />
            {/* Inner ring with gradient border */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full p-[2px] bg-gradient-to-br from-accent/60 via-background/40 to-accent/60">
              <div className="w-full h-full rounded-full overflow-hidden bg-foreground backdrop-blur-xl">
                <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="opacity-0 animate-fade-up stagger-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.02em] leading-none mb-2 text-background">
            SANKET TAMBOLI
          </h1>
          <h2 className="text-xs md:text-sm font-light tracking-[0.3em] text-background/30 uppercase mb-8">
            Portfolio
          </h2>
        </div>

        {/* Divider line - glass effect */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-8 opacity-0 animate-fade-up stagger-2" />

        {/* Tagline */}
        <h3 className="text-lg md:text-xl font-light mb-4 text-background/90 tracking-wide opacity-0 animate-fade-up stagger-2">
          Operations · Talent Tech · Product Thinking
        </h3>
        
        {/* Bio */}
        <p className="text-background/50 text-sm leading-relaxed mb-10 max-w-md mx-auto opacity-0 animate-fade-up stagger-3">
          9+ years bridging user needs and technical execution. From optimizing SaaS platforms to building data-driven recruitment operations — I turn complex workflows into scalable systems.
        </p>

        {/* CTA Link - glass button */}
        <div className="w-full flex justify-center opacity-0 animate-fade-up stagger-4">
          <a 
            href="https://drive.google.com/file/d/17tWpdD7qb9ink8-dQ40yBWqVaWSX5afc/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 backdrop-blur-xl bg-background/10 border border-background/20 text-background/80 hover:text-background hover:bg-background/20 hover:border-background/30 rounded-full text-xs font-medium group transition-all duration-500 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)]"
          >
            Here's how my skills look on paper
            <FileText className="ml-2 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Scroll indicator - properly centered */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 animate-fade-up stagger-5">
        <a href="#about" className="flex flex-col items-center text-background/30 hover:text-background/50 transition-colors duration-300">
          <span className="text-[10px] uppercase tracking-[0.2em] mb-1">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2s' }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;