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
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled ? "w-[90%] md:w-auto" : "w-[95%] md:w-auto"
        }`}
      >
        <div className={`
          flex items-center justify-between md:justify-center px-6 py-3 rounded-full 
          backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500
          ${isScrolled ? "bg-black/50 supports-[backdrop-filter]:bg-black/20" : "bg-black/30"}
        `}>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-white font-bold tracking-tight">ST.</span>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex items-center justify-center md:hidden animate-fade-in">
          <ul className="flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-light text-white/90 hover:text-white tracking-tight"
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
