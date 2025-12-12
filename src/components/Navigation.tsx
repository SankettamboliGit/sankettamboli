import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
        <div 
          className={`
            flex items-center justify-between md:justify-center px-6 py-3 rounded-full 
            backdrop-blur-xl border border-white/10 transition-all duration-300
            ${isScrolled ? "bg-black/80 shadow-2xl" : "bg-black/20"}
            w-full md:w-auto max-w-5xl
          `}
        >
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-white font-bold tracking-tight text-lg">ST.</span>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030303]/95 backdrop-blur-3xl flex items-center justify-center md:hidden animate-fade-up">
          <ul className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-light text-white/90 hover:text-white tracking-tight"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;
