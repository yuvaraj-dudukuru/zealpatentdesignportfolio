import { Link } from "react-router-dom";
import { Phone, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-hero-gradient text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-primary font-display font-bold text-xl">Z</span>
              </div>
              <span className="font-display text-xl font-semibold">
                Zeal Patent Designs
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Professional patent illustrations crafted with precision and legal compliance. 
              Over 6 years of experience serving patent attorneys, law firms, and inventors worldwide.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="tel:9876543210"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </a>
              <a
                href="mailto:Zealpatentdesigns@gmail.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Samples", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Samples" ? "/samples" : `/#${link.toLowerCase().replace(" ", "")}`}
                    className="nav-link text-primary-foreground/70 hover:text-gold transition-colors cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Design Patents",
                "Utility Patents",
                "App Drawings",
                "Trademark",
                "Chemical",
                "Electrical",
                "Medical",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/samples"
                    className="nav-link text-primary-foreground/70 hover:text-gold transition-colors cursor-pointer"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Zeal Patent Designs. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-gold/20 hover:bg-gold/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-5 h-5 text-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
