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
      {/* Ambient Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] pointer-events-none rounded-full opacity-50" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight animate-fade-up">
          Ready to optimize?
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto font-light animate-fade-up stagger-1">
          Open to Product Operations and Product Management roles. Let's build scalable systems together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20 animate-fade-up stagger-2">
          
          {/* 1. Email Copy Button */}
          <button 
            onClick={handleCopy}
            className="group flex flex-col items-center justify-center gap-4 bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="p-4 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors relative">
              {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-white" />}
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Email</p>
              <p className="text-white font-medium break-all">sanket.13...com</p>
            </div>
            <div className="text-xs text-white/30 flex items-center gap-1 group-hover:text-white/70 transition-colors">
               <Copy className="w-3 h-3" /> Click to Copy
            </div>
          </button>

          {/* 2. LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center gap-4 bg-blue-600/5 border border-blue-500/20 p-8 rounded-3xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all backdrop-blur-md hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="p-4 bg-blue-500/10 rounded-full text-blue-400 relative">
              <Linkedin className="w-6 h-6" />
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <div>
              <p className="text-xs text-blue-400/60 uppercase tracking-wider font-bold mb-1">Social</p>
              <p className="text-blue-100 font-medium">LinkedIn Profile</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-blue-400/50 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* 3. Phone Number Button (NEW) */}
          <a 
            href="tel:+919998271731"
            className="group flex flex-col items-center justify-center gap-4 bg-green-600/5 border border-green-500/20 p-8 rounded-3xl hover:bg-green-600/10 hover:border-green-500/30 transition-all backdrop-blur-md hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="p-4 bg-green-500/10 rounded-full text-green-400 relative">
              <Phone className="w-6 h-6" />
              <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <div>
              <p className="text-xs text-green-400/60 uppercase tracking-wider font-bold mb-1">Phone</p>
              <p className="text-green-100 font-medium">{phone}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-green-400/50 group-hover:text-green-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

        </div>

        <p className="text-white/20 text-sm animate-fade-up stagger-3">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
