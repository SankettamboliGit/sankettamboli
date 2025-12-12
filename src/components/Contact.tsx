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
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight animate-fade-up">
          Ready to optimize?
        </h2>
        <p className="text-white/50 text-base mb-12 max-w-lg mx-auto font-light animate-fade-up stagger-1">
          Open to Product Operations and Product Management roles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 animate-fade-up stagger-2">
          
          {/* Email Card */}
          <button 
            onClick={handleCopy}
            className="group flex flex-col items-center justify-center p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <div className="p-2.5 bg-white/5 rounded-full mb-3 group-hover:bg-white/10 transition-colors">
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Mail className="w-5 h-5 text-white/80" />}
            </div>
            <p className="text-white font-medium text-sm mb-1 break-all px-2">{email}</p>
            <span className="text-[10px] text-white/30 uppercase tracking-wider font-bold">Copy</span>
          </button>

          {/* LinkedIn Card */}
          <a 
            href="https://linkedin.com/in/sanket-tamboli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-5 bg-blue-600/5 border border-blue-500/20 rounded-2xl hover:bg-blue-600/10 hover:border-blue-500/30 transition-all backdrop-blur-md"
          >
            <div className="p-2.5 bg-blue-500/10 rounded-full mb-3 text-blue-400">
              <Linkedin className="w-5 h-5" />
            </div>
            <p className="text-blue-100 font-medium text-sm mb-1">LinkedIn Profile</p>
            <span className="text-[10px] text-white/30 uppercase tracking-wider font-bold">Connect</span>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+919998271731"
            className="group flex flex-col items-center justify-center p-5 bg-green-600/5 border border-green-500/20 rounded-2xl hover:bg-green-600/10 hover:border-green-500/30 transition-all backdrop-blur-md"
          >
            <div className="p-2.5 bg-green-500/10 rounded-full mb-3 text-green-400">
              <Phone className="w-5 h-5" />
            </div>
            <p className="text-green-100 font-medium text-sm mb-1">{phone}</p>
            <span className="text-[10px] text-white/30 uppercase tracking-wider font-bold">Call Me</span>
          </a>

        </div>

        <p className="text-white/20 text-xs animate-fade-up stagger-3">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
