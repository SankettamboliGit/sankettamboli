import { ArrowDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-up">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-border bg-secondary">
            <img
              src={profileImage}
              alt="Sanket Tamboli"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Sanket Tamboli
        </h1>

        {/* Bio */}
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
          I'm a people-systems thinker with a focus on clarity, simplicity, and
          intentional design. My career has spanned recruitment operations,
          tooling ecosystems, and deep research into minimal technology trends.
          As I transition into product management, I bring structured thinking,
          cross-functional empathy, and a modern minimalist mindset.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <a href="#projects">
              View Portfolio
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            asChild
          >
            <a href="#contact">
              <FileText className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in stagger-5">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
