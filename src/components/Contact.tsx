import { useState } from "react";
import { Mail, Phone, Copy, Check, Linkedin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "sanket.130410111098@gmail.com";
  const phone = "+91 9998271731";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const cardClasses =
    "group flex items-center justify-between p-6 surface surface-hover rounded-2xl backdrop-blur-xl w-full text-left";

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="font-display font-semibold text-display-lg text-white mb-6">
            Let's Connect
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-white/70 text-base mb-12 max-w-xl mx-auto font-light">
            Currently Director of Delivery at Technocore360. Open to Product
            Manager, Product Owner, and Product Operations roles — internal
            tools, B2B platforms, ServiceNow and workflow-heavy enterprise
            products.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 mb-16 w-full max-w-2xl mx-auto">
          <Reveal delay={180}>
            <button onClick={handleCopy} className={cardClasses}>
              <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0 text-white/70 group-hover:scale-105 transition-transform">
                  {copied ? (
                    <Check className="w-6 h-6 text-[hsl(var(--accent))]" />
                  ) : (
                    <Mail className="w-6 h-6" />
                  )}
                </div>
                <div className="min-w-0">
                  <p className="text-white/50 text-[10px] uppercase tracking-wider font-bold mb-0.5">
                    Email
                  </p>
                  <p className="text-white font-medium text-sm md:text-lg truncate tracking-tight">
                    {email}
                  </p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <span className="text-xs text-white/80 font-medium">Copy</span>
                <Copy className="w-3 h-3 text-white/60" />
              </div>
            </button>
          </Reveal>

          <Reveal delay={260}>
            <a
              href="https://linkedin.com/in/sanket-tamboli"
              target="_blank"
              rel="noopener noreferrer"
              className={cardClasses}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0 text-white/70 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider font-bold mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-white font-medium text-sm md:text-lg">
                    linkedin.com/in/sanket-tamboli
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Reveal>

          <Reveal delay={340}>
            <a href="tel:+919998271731" className={cardClasses}>
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0 text-white/70 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider font-bold mb-0.5">
                    Phone
                  </p>
                  <p className="text-white font-medium text-sm md:text-lg">{phone}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
