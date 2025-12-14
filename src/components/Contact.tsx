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
    <section id="contact" className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-up">
          {/* BADGE REMOVED */}
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Contact
          </h2>
        </div>
        
        <p className="text-white/50 text-base md:text-lg mb-12 max-w-2xl mx-auto font-light animate-fade-up stagger-1">
          Ready to optimize? Open to Product Operations and Product Management roles.
        </p>

        {/* WIDE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 animate-fade-up stagger-2 max-w-6xl mx-auto">
          
          {/* Email Card */}
          <button 
            onClick={handleCopy}
            className="group flex flex-col items-center justify-center py-10 px-4 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 w-full"
          >
            <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform mb-4 border border-white/5 shadow-inner">
              {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-purple-300" />}
            </div>
            
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 font-medium text-base md:text-lg mb-2 break-all md:whitespace-nowrap overflow-visible">
              {email}
            </p>
            <p className="text-purple-400/60 text-[10px] uppercase tracking-widest font-bold group-hover:text-purple-300 transition-colors">Click to Copy</p>
          </button>

          {/* LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center py-10 px-4 bg-blue-600/5 border border-blue-500/10 rounded-3xl hover:bg-blue-500/10 hover:border-blue-500/20 transition-all backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 w-full"
          >
            <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform mb-4 border border-blue-500/10 shadow-inner">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <p className="text-blue-100 font-medium text-base md:text-lg whitespace-nowrap">LinkedIn Profile</p>
              <ArrowUpRight className="w-4 h-4 text-blue-400 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-blue-400/60 text-[10px] uppercase tracking-widest font-bold group-hover:text-blue-300 transition-colors">Connect</p>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+919998271731"
            className="group flex flex-col items-center justify-center py-10 px-4 bg-green-500/5 border border-green-500/10 rounded-3xl hover:bg-green-500/10 hover:border-green-500/20 transition-all backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 w-full"
          >
            <div className="p-3 bg-green-500/10 rounded-2xl group-hover:scale-110 transition-transform mb-4 border border-green-500/10 shadow-inner">
              <Phone className="w-6 h-6 text-green-400" />
            </div>
            
            <p className="text-green-50 font-medium text-base md:text-lg mb-2 tracking-wide whitespace-nowrap">{phone}</p>
            <p className="text-green-400/60 text-[10px] uppercase tracking-widest font-bold group-hover:text-green-300 transition-colors">Call Me</p>
          </a>

        </div>

        <p className="text-white/20 text-xs animate-fade-up stagger-3">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
