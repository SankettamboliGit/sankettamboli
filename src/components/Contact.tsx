import { useState } from "react";
import { Mail, Copy, Check, Linkedin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "sanket.130410111098@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Ambient Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[120px] pointer-events-none rounded-full opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight animate-fade-up">
          Ready to optimize?
        </h2>
        <p className="text-white/50 text-lg mb-16 max-w-xl mx-auto font-light animate-fade-up stagger-1">
          Open to Product Operations and Product Management roles. Let's build scalable systems together.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-20 animate-fade-up stagger-2">
          {/* Email Copy Button */}
          <button 
            onClick={handleCopy}
            className="group flex items-center gap-5 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md text-left w-full md:w-auto hover:shadow-2xl"
          >
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
              {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-white" />}
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-1">Email</p>
              <p className="text-white font-medium text-lg">{email}</p>
            </div>
            <Copy className="w-4 h-4 text-white/20 ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 bg-blue-600/10 border border-blue-500/20 px-8 py-5 rounded-2xl hover:bg-blue-600/20 transition-all backdrop-blur-md text-left w-full md:w-auto hover:shadow-2xl"
          >
            <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-blue-400/60 uppercase tracking-wider font-bold mb-1">Social</p>
              <p className="text-blue-100 font-medium text-lg">Connect on LinkedIn</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-blue-400 ml-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <p className="text-white/20 text-sm animate-fade-up stagger-3">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
