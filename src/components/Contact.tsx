import { useState } from "react";
import { Mail, Phone, Copy, Check, Linkedin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

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

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight animate-fade-up">
          Let's Connect
        </h2>
        <p className="text-white/50 text-base mb-12 max-w-xl mx-auto font-light animate-fade-up stagger-1">
          Open to Product Manager, Product Owner, and Product Operations roles. Particularly interested in internal tools, B2B platforms, and workflow-heavy enterprise products.
        </p>

        {/* VERTICAL STACK: Ensures maximum width for long text */}
        <div className="flex flex-col gap-4 mb-16 animate-fade-up stagger-2 w-full max-w-2xl mx-auto">
          
          {/* 1. Email Card - Wide Landscape */}
          <button 
            onClick={handleCopy}
            className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-xl hover:shadow-lg w-full text-left"
          >
            <div className="flex items-center gap-4 md:gap-6 overflow-hidden">
              <div className="p-3 bg-white/5 rounded-xl border border-white/5 shrink-0 group-hover:scale-110 transition-transform">
                {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-purple-300" />}
              </div>
              <div className="min-w-0">
                <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold mb-0.5">Email</p>
                {/* No Wrap, Truncate if screen is tiny, but generally wide enough */}
                <p className="text-white font-medium text-sm md:text-lg truncate tracking-tight font-sans">
                  {email}
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
               <span className="text-xs text-white/70 font-medium">Copy</span>
               <Copy className="w-3 h-3 text-white/50" />
            </div>
          </button>

          {/* 2. LinkedIn Card - Wide Landscape */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 bg-blue-600/5 border border-blue-500/10 rounded-2xl hover:bg-blue-500/10 hover:border-blue-500/20 transition-all backdrop-blur-xl hover:shadow-lg w-full text-left"
          >
            <div className="flex items-center gap-4 md:gap-6">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/10 shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-blue-400/60 text-[10px] uppercase tracking-wider font-bold mb-0.5">Social</p>
                <p className="text-blue-100 font-medium text-sm md:text-lg font-sans">LinkedIn Profile</p>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-blue-400/50 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* 3. Phone Card - Wide Landscape */}
          <a 
            href="tel:+919998271731"
            className="group flex items-center justify-between p-6 bg-green-500/5 border border-green-500/10 rounded-2xl hover:bg-green-500/10 hover:border-green-500/20 transition-all backdrop-blur-xl hover:shadow-lg w-full text-left"
          >
            <div className="flex items-center gap-4 md:gap-6">
              <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/10 shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-green-400/60 text-[10px] uppercase tracking-wider font-bold mb-0.5">Phone</p>
                <p className="text-green-100 font-medium text-sm md:text-lg font-sans tracking-wide">{phone}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/10 group-hover:bg-green-500/20 transition-colors">
               <span className="text-xs text-green-200 font-medium">Call</span>
            </div>
          </a>

        </div>

        <p className="text-white/20 text-xs animate-fade-up stagger-3">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
