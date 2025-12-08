import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-card/50">
      <div className="w-full max-w-lg mx-auto text-center">
        <div className="opacity-0 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 sm:mb-6">
            Let's Connect
          </h2>
          <p className="text-sm text-muted-foreground mb-10 md:mb-12 max-w-md mx-auto">
            Open to conversations about product management, minimal technology,
            and opportunities to collaborate on meaningful work.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 mb-10 md:mb-12 opacity-0 animate-fade-up stagger-2">
          <a
            href="mailto:sanket.13041011098@gmail.com"
            className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-muted-foreground/30 transition-all group"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-xs sm:text-sm">sanket.13041011098@gmail.com</span>
          </a>
          <a
            href="tel:+919998271731"
            className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-muted-foreground/30 transition-all group"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-xs sm:text-sm">+91 9998271731</span>
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-up stagger-3">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-6 sm:px-8"
            asChild
          >
            <a
              href="https://linkedin.com/in/sanket-tamboli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 text-xs sm:text-sm text-muted-foreground opacity-0 animate-fade-up stagger-4">
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Vadodara, Gujarat, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
