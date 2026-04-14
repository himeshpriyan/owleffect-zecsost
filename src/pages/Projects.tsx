import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TacticalGrid from "@/components/TacticalGrid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ServiceCTA from "@/components/ServiceCTA";

const allProjects = [
  {
    title: "Global Legacy Identity",
    category: "Branding Ecosystem",
    tag: "Market Dominance",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Corporate Intelligence Hub",
    category: "Platform Architecture",
    tag: "Strategic Precision",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "The Digital Vanguard",
    category: "Performance Narrative",
    tag: "High Conversion",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "Cinematic Visionary",
    category: "Executive Storytelling",
    tag: "Legacy Media",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop",
    size: "large"
  },
  {
    title: "Aura Luxury Branding",
    category: "Identity Design",
    tag: "Premium Positioning",
    image: "https://images.unsplash.com/photo-1600880210819-f5b89e1d1526?q=80&w=2000&auto=format&fit=crop",
    size: "small"
  },
  {
    title: "NextGen Fintech Interface",
    category: "Product Design",
    tag: "User Centric",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad3a?q=80&w=2000&auto=format&fit=crop",
    size: "small"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Branding Ecosystem", "Platform Architecture", "Performance Narrative", "Executive Storytelling", "Identity Design", "Product Design"];

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <TacticalGrid />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 mb-8 relative px-6 py-2"
          >
            <div className="absolute inset-0 border border-primary/20 bg-primary/5 rounded-sm" />
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary" />
            <span className="text-primary font-mono text-[10px] font-bold tracking-[0.5em] uppercase relative z-10">
              Project Intelligence
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl md:text-7xl font-bold mb-6"
          >
            Visual <span className="text-gradient-gold italic">Supremacy.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12"
          >
            Explore our curated gallery of elite digital artifacts and strategic branding ecosystems. Every pixel is calculated for maximum impact.
          </motion.p>

          {/* Categories Filter */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex md:flex-wrap justify-start md:justify-center gap-3 mb-16 overflow-x-auto no-scrollbar pb-4 md:pb-0 px-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 border whitespace-nowrap ${
                  filter === cat 
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" 
                    : "bg-card text-muted-foreground border-primary/10 hover:border-primary/40 shadow-sm dark:shadow-none"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                  project.size === "large" ? "md:col-span-2" : "col-span-1"
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Tactical Scan Line */}
                  <motion.div
                    initial={{ top: "-10%" }}
                    whileHover={{ top: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[100%] bg-gradient-to-b from-transparent via-primary/5 to-transparent z-20 pointer-events-none"
                  />

                  <div className="relative z-30">
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] uppercase tracking-widest border border-primary/40 backdrop-blur-sm mb-4 inline-block">
                      {project.tag}
                    </span>
                    <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-2">{project.category}</p>
                    <h3 className="text-white text-3xl font-bold font-display italic group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Tactical Brackets */}
                  <div className="absolute inset-4 pointer-events-none">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Projects;
