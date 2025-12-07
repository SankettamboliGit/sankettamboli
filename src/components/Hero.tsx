import { ArrowDown, FileText } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Dark Panel */}
      <div className="lg:w-1/2 bg-foreground text-background flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-24 lg:py-0 min-h-[50vh] lg:min-h-screen">
        <div className="opacity-0 animate-fade-up text-center mt-8 lg:mt-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-4">
            SANKET TAMBOLI
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none text-muted-foreground/40">
            Portfolio
          </h1>
        </div>
      </div>

      {/* Right Light Panel */}
      <div className="lg:w-1/2 bg-background flex flex-col items-center justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-0">
        <div className="max-w-md opacity-0 animate-fade-up stagger-2 text-center flex flex-col items-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-border bg-secondary">
              <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name & Title */}
          <h2 className="text-xl font-medium mb-2">Hiring, Building, and Everything In Between</h2>
          
          {/* Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            I'm a people-systems thinker with a focus on clarity, simplicity, and
            intentional design. My career has spanned recruitment operations,
            tooling ecosystems, and deep research into minimal technology trends.
          </p>

          {/* CTA Link */}
          <a 
            href="https://drive.google.com/file/d/17tWpdD7qb9ink8-dQ40yBWqVaWSX5afc/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:underline text-sm font-medium group"
          >
            Here's how my skills look on paper
            <FileText className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;