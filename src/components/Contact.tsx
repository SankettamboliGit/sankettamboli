import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <div className="opacity-0 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
            Open to conversations about product management, minimal technology,
            and opportunities to collaborate on meaningful work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 opacity-0 animate-fade-up stagger-2">
          <a
            href="mailto:sanket.13041011098@gmail.com"
            className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-muted-foreground/30 transition-all group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-sm">sanket.13041011098@gmail.com</span>
          </a>
          <a
            href="tel:+919998271731"
            className="flex items-center justify-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-muted-foreground/30 transition-all group"
          >
            <Phone className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            <span className="text-sm">+91 9998271731</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
          <Button
            variant="default"
            size="lg"
            className="rounded-full px-8"
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

        <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground opacity-0 animate-fade-up stagger-4">
          <MapPin className="w-4 h-4" />
          <span>Vadodara, Gujarat, India</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
