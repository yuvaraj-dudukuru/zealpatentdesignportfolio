import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Send, CheckCircle, Sparkles } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current?.querySelectorAll(".section-animate");
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-animate inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-wider text-sm">
            <Sparkles className="w-4 h-4" />
            Get In Touch
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="section-animate font-display text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Ready to Start Your{" "}
            <span className="gradient-text">Project?</span>
          </h2>
          <p className="section-animate text-muted-foreground text-lg mt-6">
            Get a free quote for your patent illustration needs.
            We respond within 12 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="section-animate space-y-8" style={{ transitionDelay: "100ms" }}>
            <div className="bg-hero-gradient p-6 sm:p-8 rounded-2xl text-primary-foreground relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />

              <h3 className="font-display text-2xl font-bold mb-8 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-6 relative z-10">
                <a
                  href="tel:9876543210"
                  className="flex items-center gap-4 cursor-pointer group p-3 rounded-xl transition-all duration-300 hover:bg-primary-foreground/5"
                >
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-primary-foreground/60 text-sm">Phone</div>
                    <div className="font-semibold text-lg group-hover:text-gold transition-colors duration-300">
                      +91 9876543210
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:contact@zealpatentdesigns.com"
                  className="flex items-center gap-4 cursor-pointer group p-3 rounded-xl transition-all duration-300 hover:bg-primary-foreground/5"
                >
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 group-hover:scale-110 transition-all duration-300">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-primary-foreground/60 text-sm">Email</div>
                    <div className="font-semibold text-lg group-hover:text-gold transition-colors duration-300 truncate">
                      contact@zealpatentdesigns.com
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Why Contact Us */}
            <div className="section-animate bg-card p-8 rounded-2xl border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-card-hover" style={{ transitionDelay: "200ms" }}>
              <h4 className="font-display text-xl font-semibold text-foreground mb-6">
                Why Work With Us?
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Quick turnaround time",
                  "Competitive pricing",
                  "Non-disclosure guarantee",
                  "Unlimited revisions"
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background hover:bg-gold/5 transition-all duration-300 group cursor-pointer"
                  >
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="section-animate" style={{ transitionDelay: "200ms" }}>
            <form
              onSubmit={handleSubmit}
              className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-lg space-y-6 hover:border-gold/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Get a Free Quote
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-gold transition-colors duration-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 cursor-text hover:border-gold/30"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-gold transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 cursor-text hover:border-gold/30"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-gold transition-colors duration-300">
                  Subject
                </label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={e => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 cursor-text hover:border-gold/30"
                  placeholder="Patent illustration inquiry"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-gold transition-colors duration-300">
                  Message
                </label>
                <textarea
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none cursor-text hover:border-gold/30"
                  placeholder="Describe your project requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full font-semibold py-4 rounded-lg cursor-pointer flex items-center justify-center gap-2 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] ${
                  isSubmitted
                    ? "bg-green-500 text-primary-foreground"
                    : "bg-gold-gradient text-primary"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-bounce" />
                    Message Sent Successfully!
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
