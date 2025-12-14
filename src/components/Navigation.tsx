import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Methodology", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 1. SCROLL SPY: Detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    
    // Create an Intersection Observer to track sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the label matching the ID (e.g., id="home" -> label="Home")
            const id = entry.target.id;
            const navItem = navItems.find(item => item.href === `#${id}`);
            if (navItem) setActiveSection(navItem.label);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px", // Triggers when section is near the top
        threshold: 0
      }
    );

    // Observe all sections
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
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-auto max-w-[95vw]`}
    >
      <div
        className={`
          relative flex flex-col items-center px-6 py-3 rounded-full 
          backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500
          ${isScrolled || isMobileMenuOpen ? "bg-black/90" : "bg-black/60 md:bg-black/30"}
        `}
      >
        
        {/* === MOBILE VIEW: Active Section Indicator === */}
        <div className="md:hidden w-full flex items-center justify-between gap-4 cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="text-sm font-bold text-white tracking-wide min-w-[80px] text-center">
            {activeSection}
          </span>
          {isMobileMenuOpen ? <ChevronUp className="w-4 h-4 text-white/70" /> : <ChevronDown className="w-4 h-4 text-white/70" />}
        </div>

        {/* === MOBILE MENU: Expanded List (Dropdown style) === */}
        <div className={`
            md:hidden flex-col gap-2 mt-4 w-full text-center overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? "max-h-[300px] opacity-100 flex" : "max-h-0 opacity-0 hidden"}
        `}>
          <div className="w-full h-px bg-white/10 mb-2" /> {/* Divider */}
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close on click
              className={`
                text-sm py-2 px-4 rounded-lg transition-colors
                ${activeSection === item.label ? "text-white bg-white/10 font-bold" : "text-white/60 hover:text-white"}
              `}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* === DESKTOP VIEW: Full Horizontal List (Hidden on Mobile) === */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`
                  px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${activeSection === item.label 
                    ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
                    : "text-white/70 hover:text-white hover:bg-white/5"}
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
