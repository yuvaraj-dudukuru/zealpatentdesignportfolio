import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-animate inline-block text-gold font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="section-animate font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Ready to Start Your{" "}
            <span className="gradient-text">Project?</span>
          </h2>
          <p className="section-animate text-muted-foreground text-lg mt-6">
            Get a free quote for your patent illustration needs. 
            We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="section-animate space-y-8">
            <div className="bg-hero-gradient p-8 rounded-2xl text-primary-foreground">
              <h3 className="font-display text-2xl font-bold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <a
                  href="tel:9876543210"
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/70 text-sm">Phone</div>
                    <div className="font-semibold group-hover:text-gold transition-colors">
                      +91 9876543210
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:Zealpatentdesigns@gmail.com"
                  className="flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/70 text-sm">Email</div>
                    <div className="font-semibold group-hover:text-gold transition-colors">
                      Zealpatentdesigns@gmail.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
            </div>

            {/* Why Contact Us */}
            <div className="section-animate bg-card p-6 rounded-xl border border-border">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Why Work With Us?
              </h4>
              <div className="space-y-3">
                {[
                  "Quick turnaround time",
                  "Competitive pricing",
                  "Non-disclosure guarantee",
                  "Unlimited revisions",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-animate">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl border border-border shadow-lg space-y-6"
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Get a Free Quote
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all cursor-text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all cursor-text"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all cursor-text"
                  placeholder="Patent illustration inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none cursor-text"
                  placeholder="Describe your project requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold-gradient text-primary font-semibold py-4 rounded-lg cursor-pointer flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
