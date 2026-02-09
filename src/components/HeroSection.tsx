import heroGraphic from "@/assets/hero-graphic.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] px-2 sm:px-0">
          {/* Left Content */}
          <div className="space-y-8">
            
             <h1 className="fade-in-up fade-in-up-delay-1 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Precision Patent Drawings That Turn{" "}
              <span className="gradient-text">Ideas Into Reality</span>
            </h1>
            
            <p className="fade-in-up fade-in-up-delay-2 text-primary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed">
              Detailed drawings speak louder than words when it comes to protecting innovation. We specialize in high-quality patent, utility, and design drawings that clearly present every aspect of your invention. With 24/7 support, fast turnaround times, and uncompromised accuracy, we deliver reliable drawing solutions that help move your patent application forward — anytime, all year round.
            </p>

            <div className="fade-in-up fade-in-up-delay-3 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 bg-gold-gradient text-primary font-semibold px-8 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 animate-pulse-gold">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50">
                Get Quote
              </a>
            </div>

            {/* Trust badges */}
            <div className="fade-in-up fade-in-up-delay-4 flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">10+</div>
                <div className="text-primary-foreground/60 text-sm">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">5000+</div>
                <div className="text-primary-foreground/60 text-sm">Patents Illustrated</div>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-gold">100%</div>
                <div className="text-primary-foreground/60 text-sm">Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image (hidden on mobile) */}
          <div className="fade-in-up fade-in-up-delay-2 relative hidden lg:block">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-3xl transform rotate-6" />
              <img src={heroGraphic} alt="Patent Design Illustration" className="relative rounded-3xl shadow-2xl w-full max-w-lg mx-auto" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-gold/30 rounded-full blur-2xl animate-float" style={{
            animationDelay: "0.5s"
          }} />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float" style={{
            animationDelay: "1s"
          }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up fade-in-up-delay-5">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;