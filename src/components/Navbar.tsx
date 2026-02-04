import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/#about" },
  { name: "Services", path: "/#services" },
  { name: "Work Samples", path: "/samples" },
  { name: "Contact Us", path: "/#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => handleNavClick("/")}
        >
          <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
            <span className="text-primary font-display font-bold text-xl">Z</span>
          </div>
          <span className={`font-display text-xl font-semibold transition-colors duration-300 ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}>
            Zeal Patent Designs
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path.startsWith("/#") ? "/" : link.path}
              onClick={() => handleNavClick(link.path)}
              className={`nav-link font-medium cursor-pointer transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground/90 hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden cursor-pointer p-2 rounded-lg transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path.startsWith("/#") ? "/" : link.path}
              onClick={() => handleNavClick(link.path)}
              className="nav-link text-foreground font-medium cursor-pointer py-2 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
