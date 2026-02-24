import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Palette,
  Cog,
  Smartphone,
  Stamp,
  Beaker,
  Zap,
  Heart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design Patent Drawings",
    description: "Precise visual representations emphasizing ornamental features.",
    category: "design",
  },
  {
    icon: Cog,
    title: "Utility Patent Drawings",
    description: "Detailed technical illustrations supporting functional inventions.",
    category: "utility",
  },
  {
    icon: Smartphone,
    title: "Flowchart & Flow Diagram",
    description: "Clear system logic and process flow illustrations for patent reporting.",
    category: "flowchart",
  },
  {
    icon: Stamp,
    title: "Trademark Drawings",
    description: "Clear and compliant representations for trademark applications.",
    category: "trademark",
  },
  {
    icon: Beaker,
    title: "Chemical Illustrations",
    description: "Accurate depiction of chemical structures and reaction pathways.",
    category: "chemical",
  },
  {
    icon: Zap,
    title: "Electrical Drawings",
    description: "Schematics and diagrams for electrical and electronic systems.",
    category: "electrical",
  },
  {
    icon: Heart,
    title: "Medical Drawings",
    description: "High-precision illustrations for medical devices and related technologies.",
    category: "medical",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-animate inline-block text-gold font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="section-animate font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Comprehensive Patent{" "}
            <span className="gradient-text">Illustration Solutions</span>
          </h2>
          <p className="section-animate text-muted-foreground text-lg mt-6">
            From design patents to complex medical devices, we provide
            expert illustrations for every patent category.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={`/samples?category=${service.category}`}
              className={`section-animate service-card bg-card p-6 rounded-xl border border-border cursor-pointer group block ${index === services.length - 1 ? "md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3" : ""
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              <div className="flex items-center text-gold font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Samples
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="section-animate text-center mt-16">
          <Link
            to="/samples"
            className="inline-flex items-center gap-2 bg-gold-gradient text-primary font-semibold px-8 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            View All Work Samples
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
