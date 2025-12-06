import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";
const Hero = () => {
  return <section id="home" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Dark Panel */}
      <div className="lg:w-1/2 bg-foreground text-background flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0 min-h-[50vh] lg:min-h-screen">
        <div className="opacity-0 animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none mb-4">
            ​SANNKET
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none text-muted-foreground/40">
            Portfolio
          </h1>
        </div>
      </div>

      {/* Right Light Panel */}
      <div className="lg:w-1/2 bg-background flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 lg:py-0">
        <div className="max-w-md opacity-0 animate-fade-up stagger-2">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border border-border bg-secondary">
              <img src={profileImage} alt="Sanket Tamboli" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Name & Title */}
          <h2 className="text-xl font-medium mb-2">I craft interfaces</h2>
          
          {/* Bio */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            I'm a people-systems thinker with a focus on clarity, simplicity, and
            intentional design. My career has spanned recruitment operations,
            tooling ecosystems, and deep research into minimal technology trends.
          </p>

          {/* CTA Link */}
          <a href="#projects" className="inline-flex items-center text-accent hover:underline text-sm font-medium group">
            Take me to the magic land
            <ArrowDown className="ml-1 h-3 w-3 -rotate-90 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Selected Projects Preview */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">Selected projects</h3>
            
            <div className="space-y-4">
              <a href="#projects" className="block group">
                <p className="text-xs text-muted-foreground">2024 - present</p>
                <p className="font-medium text-sm group-hover:text-accent transition-colors">Ceipal ATS — Product Operations</p>
              </a>
              <a href="#projects" className="block group">
                <p className="text-xs text-muted-foreground">Research</p>
                <p className="font-medium text-sm group-hover:text-accent transition-colors">Minimal Technology Research</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;