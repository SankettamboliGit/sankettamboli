import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-white/90 font-bold text-lg">Sanket Tamboli</p>
          <p className="text-white/40 text-sm">Product Operations & Strategy</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/sanket-tamboli" className="text-white/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
