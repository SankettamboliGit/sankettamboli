import { FileText, ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-foreground flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-24 relative overflow-hidden">
      {/* Abstract background - liquid glass inspired */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-accent/8 to-transparent rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-gradient-to-tl from-background/10 to-transparent rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-radial from-accent/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto text-center flex flex-col items-center">
        {/* Profile Image with liquid glass ring */}
        <div className="mb-8 md:mb-10 opacity-0 animate-fade-up">
          <div className="relative group mx-auto">
            {/* Outer glow - liquid effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-background/10 to-accent/20 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110" />
            {/* Glass ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-background/30 via-accent/20 to-background/30 rounded-full backdrop-blur-sm" />
            {/* Inner ring with gradient border */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full p-[2px] bg-gradient-to-br from-accent/60 via-background/40 to-accent/60 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden bg-foreground backdrop-blur-xl">
                <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="opacity-0 animate-fade-up stagger-1 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.02em] leading-none mb-2 text-background">
            SANKET TAMBOLI
          </h1>
          <h2 className="text-[10px] sm:text-xs md:text-sm font-light tracking-[0.3em] text-background/30 uppercase mb-6 md:mb-8">
            Portfolio
          </h2>
        </div>

        {/* Divider line - glass effect */}
        <div className="w-16 md:w-20 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent mb-6 md:mb-8 opacity-0 animate-fade-up stagger-2 mx-auto" />

        {/* Tagline */}
        <h3 className="text-base sm:text-lg md:text-xl font-light mb-4 text-background/90 tracking-wide opacity-0 animate-fade-up stagger-2 px-4">
          Hiring, Building, and Everything In Between
        </h3>
        
        {/* Bio */}
        <p className="text-background/50 text-xs sm:text-sm leading-relaxed mb-8 md:mb-10 max-w-sm mx-auto opacity-0 animate-fade-up stagger-3 px-4">
          I'm a people-systems thinker with a focus on clarity, simplicity, and
          intentional design. My career has spanned recruitment operations,
          tooling ecosystems, and deep research into minimal technology trends.
        </p>

        {/* CTA Link - glass button */}
        <a 
          href="https://drive.google.com/file/d/17tWpdD7qb9ink8-dQ40yBWqVaWSX5afc/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-xl bg-background/10 border border-background/20 text-background/80 hover:text-background hover:bg-background/20 hover:border-background/30 rounded-full text-xs font-medium group transition-all duration-500 opacity-0 animate-fade-up stagger-4 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.4)]"
        >
          Here's how my skills look on paper
          <FileText className="ml-2 h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <a href="#about" className="flex flex-col items-center text-background/30 hover:text-background/50 transition-colors duration-300">
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] mb-2">Scroll</span>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" style={{ animationDuration: '2s' }} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
