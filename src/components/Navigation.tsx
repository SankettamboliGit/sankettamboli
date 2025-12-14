import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Product Strategy", href: "#services" },
  { label: "Projects", href: "#projects" }, // Renamed from Work
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
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] md:w-auto max-w-5xl`}
    >
      <div
        className={`
          flex items-center justify-center px-3 py-2 md:px-6 md:py-3 rounded-[1.5rem] md:rounded-full 
          backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500
          ${isScrolled ? "bg-black/90" : "bg-black/60 md:bg-black/30"}
        `}
      >
        <ul className="flex flex-wrap md:flex-nowrap items-center justify-center gap-x-1 gap-y-1 md:gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 block"
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
