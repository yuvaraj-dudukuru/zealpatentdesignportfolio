import { useEffect, useRef } from "react";
import { CheckCircle, Award, Shield, Clock } from "lucide-react";
import qualityBadge from "@/assets/quality-badge.png";

const features = [
  {
    icon: Award,
    title: "Best Quality",
    description: "Premium illustrations meeting the highest patent office standards",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising on precision and detail",
  },
  {
    icon: Shield,
    title: "NDA Guarantee",
    description: "Complete confidentiality with signed non-disclosure agreements",
  },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="section-animate">
              <span className="text-gold font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
                We Transform Ideas Into{" "}
                <span className="gradient-text">Visual Clarity</span>
              </h2>
            </div>

            <p className="section-animate text-muted-foreground text-lg leading-relaxed">
              Welcome to Zeal Patent Designs. We are a team of highly experienced 
              patent illustrators, each with over 6 years of professional experience, 
              providing precise and legally compliant patent drawings for patent attorneys, 
              law firms, inventors, and corporate clients.
            </p>

            <p className="section-animate text-muted-foreground text-lg leading-relaxed">
              Our work emphasizes technical accuracy, clarity, and consistency with 
              established patent drafting standards, supporting a wide range of technologies 
              including mechanical systems, medical devices, consumer products, and 
              software-based inventions.
            </p>

            <div className="section-animate space-y-4">
              {[
                "USPTO, EPO, and WIPO compliant drawings",
                "Dedicated project manager for each client",
                "Unlimited revisions until satisfaction",
                "Competitive pricing with transparent quotes",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features & Badge */}
          <div className="space-y-8">
            {/* Quality Badge */}
            <div className="section-animate flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                <img
                  src={qualityBadge}
                  alt="Best Quality Guarantee"
                  className="relative w-48 h-48 object-contain cursor-pointer transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="section-animate service-card bg-card p-6 rounded-xl border border-border cursor-pointer group"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
