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
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-md border border-border shadow-lg"
          : "bg-transparent"
      } rounded-full px-2 py-2`}
    >
      <ul className="flex items-center gap-1">
        <li>
          <a
            href="#home"
            className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full flex flex-col items-center ${
              activeSection === "home"
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
            <span className={`w-1 h-1 rounded-full mt-0.5 transition-opacity ${activeSection === "home" ? "bg-foreground opacity-100" : "opacity-0"}`} />
          </a>
        </li>
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full flex flex-col items-center ${
                activeSection === item.href.slice(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              <span className={`w-1 h-1 rounded-full mt-0.5 transition-opacity ${activeSection === item.href.slice(1) ? "bg-foreground opacity-100" : "opacity-0"}`} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
