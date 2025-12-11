import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner"; // Assuming you have sonner or use-toast

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "sanket.130410111098@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background Image - Abstract Map */}
      <div className="absolute inset-0 opacity-5">
         <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover grayscale"
         />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="opacity-0 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Build Something Scalable?
          </h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto text-lg">
            I'm currently open to <strong>Product Operations</strong> and <strong>Product Management</strong> roles. Let's discuss how I can help optimize your ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 opacity-0 animate-fade-up stagger-2 max-w-2xl mx-auto">
          
          {/* Email Card with Copy Function */}
          <Card className="p-6 hover:border-primary/50 transition-all duration-300 group cursor-pointer relative overflow-hidden" onClick={handleCopy}>
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="p-3 bg-secondary rounded-full group-hover:bg-background transition-colors">
                    {copied ? <Check className="w-5 h-5 text-green-500" /> : <Mail className="w-5 h-5 text-foreground" />}
                </div>
                <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Me</p>
                    <p className="text-sm font-medium break-all">{email}</p>
                </div>
                <div className="absolute top-4 right-4 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <Copy className="w-3 h-3" /> Copy
                </div>
            </div>
          </Card>

          {/* Phone Card */}
          <a href="tel:+919998271731" className="block">
            <Card className="p-6 h-full hover:border-primary/50 transition-all duration-300 group relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="p-3 bg-secondary rounded-full group-hover:bg-background transition-colors">
                        <Phone className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Call Me</p>
                        <p className="text-sm font-medium">+91 9998271731</p>
                    </div>
                </div>
            </Card>
          </a>

        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up stagger-3">
          <Button
            size="lg"
            className="rounded-full px-8 h-12 text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
            asChild
          >
            <a
              href="https://linkedin.com/in/sanket-tamboli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
              <ArrowUpRight className="ml-2 h-4 w-4 opacity-50" />
            </a>
          </Button>
        </div>

        {/* Location Footer */}
        <div className="flex items-center justify-center gap-2 mt-16 text-sm text-muted-foreground opacity-0 animate-fade-up stagger-4">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Based in Vadodara, Gujarat • Open to Remote & Hybrid</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
