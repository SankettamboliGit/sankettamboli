import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "w-[90%] md:w-auto" : "w-[95%] md:w-auto"
      }`}
    >
      <div
        className={`
          flex items-center px-4 md:px-6 py-3 rounded-full 
          backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500
          ${isScrolled ? "bg-black/80" : "bg-black/30"}
          overflow-x-auto no-scrollbar
        `}
      >
        {/* Navigation List - Visible on ALL screens */}
        <ul className="flex items-center gap-2 md:gap-1 min-w-max mx-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 whitespace-nowrap"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Hide Scrollbar CSS */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
