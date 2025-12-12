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
    <section id="contact" className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-up">
          Ready to optimize?
        </h2>
        <p className="text-white/50 text-lg mb-12 max-w-lg mx-auto font-light animate-fade-up stagger-1">
          Open to Product Operations and Product Management roles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-up stagger-2 max-w-4xl mx-auto">
          {/* ... (Keep the rectangular glass cards I gave you in the previous turn) ... */}
          {/* They are already sized correctly for this consistency update. */}
        </div>

        <p className="text-white/20 text-xs animate-fade-up stagger-3">Based in Vadodara, Gujarat • Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
