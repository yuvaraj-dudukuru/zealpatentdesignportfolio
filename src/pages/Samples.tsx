import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const categories = [
  { id: "all", name: "All Samples" },
  { id: "design", name: "Design Patent" },
  { id: "utility", name: "Utility Patent" },
  { id: "flowchart", name: "Flowchart" },
  { id: "flowdiagram", name: "Flow Diagram" },
  { id: "mechanical", name: "Mechanical" },
  { id: "graphs", name: "Graphs" },
  { id: "screenshot", name: "Screenshot" },
  { id: "trademark", name: "Trademark" },
  { id: "chemical", name: "Chemical" },
  { id: "electrical", name: "Electrical" },
  { id: "medical", name: "Medical" },
];

const samplesData = [
  // Designs
  {
    id: 1,
    title: "Patent design sample – shoe",
    category: "design",
    image: "/images/1-Design.jpg",
    description: "High-precision design patent illustration for footwear.",
  },
  {
    id: 2,
    title: "Patent design sample – machine",
    category: "design",
    image: "/images/2-Design.jpg",
    description: "Detailed mechanical design patent illustration.",
  },
  {
    id: 3,
    title: "Patent design sample – consumer product",
    category: "design",
    image: "/images/3-Design.jpg",
    description: "Professional orthopedic design patent drawing.",
  },
  // Utilities
  {
    id: 4,
    title: "Utility patent drawing – component A",
    category: "utility",
    image: "/images/5-Utility.jpg",
    description: "Precise utility patent illustration showcasing functional assembly.",
  },
  {
    id: 5,
    title: "Utility patent drawing – component B",
    category: "utility",
    image: "/images/6-Utility.jpg",
    description: "Detailed technical illustration for utility patent application.",
  },
  // Flowcharts
  {
    id: 6,
    title: "Patent process flowchart – version 1",
    category: "flowchart",
    image: "/images/11-Flowchart-1.jpg",
    description: "Clear system logic and process flow diagram.",
  },
  {
    id: 7,
    title: "Patent process flowchart – version 2",
    category: "flowchart",
    image: "/images/12-Flowchart-2.jpg",
    description: "Comprehensive process flowchart for patent reporting.",
  },
  // Flow Diagram
  {
    id: 8,
    title: "System Flow Diagram",
    category: "flowdiagram",
    image: "/images/10-Flowdiagram.jpg",
    description: "Professional flow diagram illustrating system architecture.",
  },
  // Mechanical
  {
    id: 9,
    title: "Mechanical assembly illustration",
    category: "mechanical",
    image: "/images/7-Mechanical.jpg",
    description: "Exploded view of a complex mechanical assembly.",
  },
  {
    id: 10,
    title: "Mechanical component detail",
    category: "mechanical",
    image: "/images/4-Mechanical.jpg",
    description: "High-precision mechanical component drawing.",
  },
  // Graphs
  {
    id: 11,
    title: "Patent analytics graph",
    category: "graphs",
    image: "/images/9-Graph.jpg",
    description: "Detailed data visualization and analytics graph.",
  },
  // Screenshot
  {
    id: 12,
    title: "Application Screenshot",
    category: "screenshot",
    image: "/images/8-Screenshot.jpg",
    description: "Clear interface screenshot for software patent illustration.",
  },
];

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
      ? samplesData
      : samplesData.filter((s) => s.category === activeCategory);

  const getSectionTitle = (id: string) => categories.find((c) => c.id === id)?.name || id;

  const renderSampleGrid = (samplesToRender: typeof samplesData, showHeadings = false) => {
    // Group samples by category if headings are shown
    const grouped = showHeadings
      ? samplesToRender.reduce((acc, sample) => {
        if (!acc[sample.category]) acc[sample.category] = [];
        acc[sample.category].push(sample);
        return acc;
      }, {} as Record<string, typeof samplesData>)
      : { all: samplesToRender };

    return Object.entries(grouped).map(([catId, catSamples]) => (
      <div key={catId} className="w-full mb-16 last:mb-0">
        {showHeadings && (
          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground">
              {getSectionTitle(catId)}
            </h2>
            <div className="h-px flex-grow bg-border" />
          </div>
        )}

        <div className={`grid gap-6 ${catId === 'flowchart'
            ? 'grid-cols-1 md:grid-cols-2'
            : catId === 'flowdiagram'
              ? 'grid-cols-1 max-w-4xl mx-auto'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
          {catSamples.map((sample, index) => (
            <div
              key={sample.id}
              onClick={() => setSelectedSample(sample.id)}
              className="section-animate sample-image bg-card border border-border rounded-xl overflow-hidden cursor-pointer group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={`aspect-square bg-muted flex items-center justify-center relative overflow-hidden ${catId === 'flowdiagram' ? 'aspect-video' : ''
                }`}>
                <img
                  src={sample.image}
                  alt={sample.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">View Details</span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors">
                  {sample.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {getSectionTitle(sample.category)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

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
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 cursor-pointer ${activeCategory === category.id
                  ? "bg-gold-gradient text-primary shadow-lg scale-105"
                  : "bg-card border border-border text-foreground hover:border-gold hover:text-gold"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Samples Grid */}
          <div className="flex flex-col">
            {renderSampleGrid(filteredSamples, activeCategory === "all")}
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
            className="relative bg-card rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSample(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-muted/50 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-auto max-h-[70vh] flex items-center justify-center bg-muted p-4">
              <img
                src={samplesData.find(s => s.id === selectedSample)?.image}
                alt={samplesData.find(s => s.id === selectedSample)?.title}
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="p-8 border-t border-border">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full uppercase tracking-wider">
                  {getSectionTitle(samplesData.find(s => s.id === selectedSample)?.category || "")}
                </span>
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground">
                {samplesData.find(s => s.id === selectedSample)?.title}
              </h3>
              <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
                {samplesData.find(s => s.id === selectedSample)?.description}
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
