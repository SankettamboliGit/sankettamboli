import { useState } from "react";
import { Mail, Phone, Copy, Check, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="contact" className="py-32 px-6 bg-[#030303] relative overflow-hidden">
      {/* Ambient Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-900/20 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          Ready to optimize?
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto">
          Open to Product Operations and Product Management roles. Let's build scalable systems together.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          {/* Email Copy Button */}
          <button 
            onClick={handleCopy}
            className="group flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md text-left w-full md:w-auto"
          >
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Mail className="w-5 h-5 text-white" />}
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider font-bold">Email</p>
              <p className="text-white font-medium">{email}</p>
            </div>
            <Copy className="w-4 h-4 text-white/20 ml-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-blue-600/10 border border-blue-500/20 px-6 py-4 rounded-2xl hover:bg-blue-600/20 transition-all backdrop-blur-md text-left w-full md:w-auto"
          >
            <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-blue-400/60 uppercase tracking-wider font-bold">Social</p>
              <p className="text-blue-100 font-medium">Connect on LinkedIn</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-blue-400 ml-4 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <p className="text-white/20 text-sm">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
