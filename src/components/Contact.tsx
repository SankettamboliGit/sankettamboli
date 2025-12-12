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
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] pointer-events-none rounded-full opacity-40" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-up">
          Ready to optimize?
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-lg mx-auto font-light animate-fade-up stagger-1">
          Open to Product Operations and Product Management roles.
        </p>

        {/* Rectangular Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 animate-fade-up stagger-2 max-w-5xl mx-auto">
          
          {/* 1. Email Card */}
          <button 
            onClick={handleCopy}
            className="group relative flex flex-col items-center justify-center py-8 px-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform mb-4 border border-white/5">
              {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-white" />}
            </div>
            
            <p className="text-white font-semibold text-lg mb-1 truncate w-full px-4">{email}</p>
            <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Copy Email</p>
          </button>

          {/* 2. LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center py-8 px-6 bg-blue-500/5 border border-blue-500/10 rounded-3xl hover:bg-blue-500/10 hover:border-blue-500/20 transition-all backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform mb-4 border border-blue-500/10">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </div>
            
            <div className="flex items-center gap-2 mb-1">
              <p className="text-white font-semibold text-lg">LinkedIn</p>
              <ArrowUpRight className="w-4 h-4 text-blue-400 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
            <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Connect</p>
          </a>

          {/* 3. Phone Card */}
          <a 
            href="tel:+919998271731"
            className="group relative flex flex-col items-center justify-center py-8 px-6 bg-green-500/5 border border-green-500/10 rounded-3xl hover:bg-green-500/10 hover:border-green-500/20 transition-all backdrop-blur-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
          >
            <div className="p-3 bg-green-500/10 rounded-2xl group-hover:scale-110 transition-transform mb-4 border border-green-500/10">
              <Phone className="w-6 h-6 text-green-400" />
            </div>
            
            <p className="text-white font-semibold text-lg mb-1">{phone}</p>
            <p className="text-white/40 text-xs uppercase tracking-wider font-bold">Call Me</p>
          </a>

        </div>

        <div className="flex items-center justify-center gap-2 text-white/30 text-sm animate-fade-up stagger-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Based in Vadodara, Gujarat • Open to Remote
        </div>
      </div>
    </section>
  );
};

export default Contact;
