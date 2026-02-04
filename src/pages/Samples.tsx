import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const categories = [
  { id: "all", name: "All Samples" },
  { id: "design", name: "Design Patent" },
  { id: "utility", name: "Utility Patent" },
  { id: "app", name: "App Drawings" },
  { id: "trademark", name: "Trademark" },
  { id: "chemical", name: "Chemical" },
  { id: "electrical", name: "Electrical" },
  { id: "medical", name: "Medical" },
];

// Placeholder samples - in production, these would be real images
const samples = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Sample ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].id,
  description: "Professional patent illustration showcasing technical precision.",
}));

const Samples = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get("category") || "all"
  );
  const [selectedSample, setSelectedSample] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
    }
  }, [searchParams]);

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

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const filteredSamples =
    activeCategory === "all"
      ? samples
      : samples.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background cursor-pointer">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-hero-gradient pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block text-gold font-semibold uppercase tracking-wider text-sm mb-4">
            Our Portfolio
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Work <span className="gradient-text">Samples</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mt-6">
            Explore our collection of professional patent illustrations 
            across various categories and industries.
          </p>
        </div>
      </section>

      {/* Samples Section */}
      <section ref={sectionRef} className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="section-animate flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${
                  activeCategory === category.id
                    ? "bg-gold-gradient text-primary shadow-lg scale-105"
                    : "bg-card border border-border text-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Samples Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSamples.map((sample, index) => (
              <div
                key={sample.id}
                onClick={() => setSelectedSample(sample.id)}
                className="section-animate sample-image bg-card border border-border rounded-xl overflow-hidden cursor-pointer group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Placeholder image box */}
                <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-gold/5" />
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-display font-bold text-gold">
                          {sample.id}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm">
                        {categories.find((c) => c.id === sample.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-primary-foreground font-medium">View Details</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors">
                    {sample.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {categories.find((c) => c.id === sample.category)?.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSamples.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No samples found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedSample && (
        <div
          className="fixed inset-0 z-50 bg-primary/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedSample(null)}
        >
          <div
            className="relative bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSample(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-display font-bold text-gold">
                    {selectedSample}
                  </span>
                </div>
                <p className="text-muted-foreground">Sample Image Placeholder</p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Sample {selectedSample}
              </h3>
              <p className="text-muted-foreground mt-2">
                Professional patent illustration showcasing technical precision 
                and adherence to USPTO/EPO standards.
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Samples;
