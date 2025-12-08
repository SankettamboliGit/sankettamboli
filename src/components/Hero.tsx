import { FileText } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-foreground flex flex-col items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
        {/* Profile Image with creative ring */}
        <div className="mb-10 opacity-0 animate-fade-up">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-br from-accent/40 via-background/20 to-accent/40 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Inner ring with gradient border */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-br from-accent via-background/50 to-accent">
              <div className="w-full h-full rounded-full overflow-hidden bg-foreground">
                <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="opacity-0 animate-fade-up stagger-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-3 text-background">
            SANKET TAMBOLI
          </h1>
          <h2 className="text-lg md:text-xl font-light tracking-widest text-background/40 uppercase mb-8">
            Portfolio
          </h2>
        </div>

        {/* Divider line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-8 opacity-0 animate-fade-up stagger-2" />

        {/* Tagline */}
        <h3 className="text-xl md:text-2xl font-medium mb-4 text-background opacity-0 animate-fade-up stagger-2">
          Hiring, Building, and Everything In Between
        </h3>
        
        {/* Bio */}
        <p className="text-background/60 text-sm md:text-base leading-relaxed mb-8 max-w-md opacity-0 animate-fade-up stagger-3">
          I'm a people-systems thinker with a focus on clarity, simplicity, and
          intentional design. My career has spanned recruitment operations,
          tooling ecosystems, and deep research into minimal technology trends.
        </p>

        {/* CTA Link */}
        <a 
          href="https://drive.google.com/file/d/17tWpdD7qb9ink8-dQ40yBWqVaWSX5afc/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-accent/50 text-accent hover:bg-accent/10 rounded-full text-sm font-medium group transition-all duration-300 opacity-0 animate-fade-up stagger-4"
        >
          Here's how my skills look on paper
          <FileText className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;