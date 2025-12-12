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
      {/* Ambient Footer Glow - Reduced size for cleaner look */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/20 blur-[100px] pointer-events-none rounded-full opacity-40" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-up">
          Ready to optimize?
        </h2>
        <p className="text-white/50 text-base mb-12 max-w-lg mx-auto font-light animate-fade-up stagger-1">
          Open to Product Operations and Product Management roles.
        </p>

        {/* COMPACT GRID: Smaller cards, smaller text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-fade-up stagger-2 max-w-4xl mx-auto">
          
          {/* 1. Email Copy Button */}
          <button 
            onClick={handleCopy}
            className="group flex flex-col items-center justify-center gap-3 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md hover:shadow-lg hover:-translate-y-1"
          >
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors relative">
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Mail className="w-5 h-5 text-white/80" />}
            </div>
            <div className="text-center">
              <p className="text-[10px] text-white/40 uppercase tracking-wider font-bold mb-1">Email</p>
              <p className="text-white font-medium text-sm break-all">{email}</p>
            </div>
            <div className="text-[10px] text-white/30 flex items-center gap-1 group-hover:text-white/60 transition-colors mt-1">
               <Copy className="w-3 h-3" /> Copy
            </div>
          </button>

          {/* 2. LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-3 bg-blue-600/5 border border-blue-500/20 p-5 rounded-2xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all backdrop-blur-md hover:shadow-lg hover:-translate-y-1"
          >
            <div className="p-3 bg-blue-500/10 rounded-full text-blue-400 relative">
              <Linkedin className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] text-blue-400/60 uppercase tracking-wider font-bold mb-1">Social</p>
              <p className="text-blue-100 font-medium text-sm">LinkedIn Profile</p>
            </div>
            <ArrowUpRight className="w-3 h-3 text-blue-400/50 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mt-1" />
          </a>

          {/* 3. Phone Number Button */}
          <a 
            href="tel:+919998271731"
            className="group flex flex-col items-center justify-center gap-3 bg-green-600/5 border border-green-500/20 p-5 rounded-2xl hover:bg-green-600/10 hover:border-green-500/30 transition-all backdrop-blur-md hover:shadow-lg hover:-translate-y-1"
          >
            <div className="p-3 bg-green-500/10 rounded-full text-green-400 relative">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-[10px] text-green-400/60 uppercase tracking-wider font-bold mb-1">Phone</p>
              <p className="text-green-100 font-medium text-sm">{phone}</p>
            </div>
            <ArrowUpRight className="w-3 h-3 text-green-400/50 group-hover:text-green-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform mt-1" />
          </a>

        </div>

        <p className="text-white/20 text-xs animate-fade-up stagger-3">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
