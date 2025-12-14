import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Methodologies", href: "#skills" }, // Renamed from Matrix
  { label: "Strategies", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const navItem = navItems.find(item => item.href === `#${id}`);
            if (navItem) setActiveSection(navItem.label);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]">
      <div
        className={`
          relative flex flex-col items-center px-6 py-3 
          backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 ease-out
          ${isMobileMenuOpen ? "rounded-3xl bg-[#0a0a0a] border-white/20" : "rounded-full"}
          ${isScrolled && !isMobileMenuOpen ? "bg-[#0a0a0a]/90" : "bg-[#0a0a0a]/80 lg:bg-black/40"}
        `}
      >
        {/* MOBILE/TABLET VIEW: Active Section Pill */}
        <div 
          className="lg:hidden w-full flex items-center justify-between gap-4 cursor-pointer min-w-[160px]" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-sm font-bold text-white tracking-wide mx-auto">
            {activeSection}
          </span>
          {isMobileMenuOpen ? <ChevronUp className="w-4 h-4 text-white/70" /> : <ChevronDown className="w-4 h-4 text-white/70" />}
        </div>

        {/* MOBILE/TABLET MENU: Expanded List */}
        <div className={`
            lg:hidden flex-col gap-1 w-full text-center overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? "max-h-[500px] opacity-100 flex mt-4 pb-2" : "max-h-0 opacity-0 hidden mt-0"}
        `}>
          <div className="w-full h-px bg-white/10 mb-2" />
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                text-sm py-2.5 px-6 rounded-xl transition-all duration-200 block
                ${activeSection === item.label 
                  ? "text-white bg-white/10 font-bold border border-white/5" 
                  : "text-white/60 hover:text-white hover:bg-white/5"}
              `}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* DESKTOP VIEW: Full Horizontal List */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`
                  px-5 py-2 text-xs font-medium rounded-full transition-all duration-300
                  ${activeSection === item.label 
                    ? "text-white bg-white/15 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10" 
                    : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"}
                `}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
