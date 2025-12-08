import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check home section first
      const homeElement = document.getElementById("home");
      if (homeElement) {
        const homeRect = homeElement.getBoundingClientRect();
        if (homeRect.bottom > 150) {
          setActiveSection("home");
          return;
        }
      }

      // Then check other sections
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-foreground/80 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.3)] scale-100"
          : "bg-foreground/60 backdrop-blur-md scale-[0.98]"
      } rounded-full px-1 py-1 border border-white/10`}
      style={{
        boxShadow: isScrolled 
          ? '0 4px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1)' 
          : 'inset 0 1px 1px rgba(255,255,255,0.05)'
      }}
    >
      <ul className="flex items-center gap-0.5">
        <li>
          <a
            href="#home"
            className={`relative px-3 py-1.5 text-xs font-medium transition-all duration-300 rounded-full flex items-center justify-center group ${
              activeSection === "home"
                ? "text-foreground bg-background/95 shadow-sm"
                : "text-background/70 hover:text-background"
            }`}
          >
            <span className="relative z-10">Home</span>
            {activeSection !== "home" && (
              <span className="absolute inset-0 rounded-full bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
          </a>
        </li>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`relative px-3 py-1.5 text-xs font-medium transition-all duration-300 rounded-full flex items-center justify-center group ${
                activeSection === item.href.slice(1)
                  ? "text-foreground bg-background/95 shadow-sm"
                  : "text-background/70 hover:text-background"
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activeSection !== item.href.slice(1) && (
                <span className="absolute inset-0 rounded-full bg-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
