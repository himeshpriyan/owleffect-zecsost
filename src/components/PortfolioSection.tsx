import { motion } from "framer-motion";
import TacticalGrid from "./TacticalGrid";

const projects = [
  {
    title: "Global Legacy Identity",
    category: "Branding Ecosystem",
    tag: "Market Dominance",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Corporate Intelligence Hub",
    category: "Platform Architecture",
    tag: "Strategic Precision",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "The Digital Vanguard",
    category: "Performance Narrative",
    tag: "High Conversion",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "Cinematic Visionary",
    category: "Executive Storytelling",
    tag: "Legacy Media",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-16 md:py-24 px-6 overflow-hidden">
      <TacticalGrid />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.4em] uppercase mb-3">
            Elite Case Studies
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Project <span className="text-gradient-gold italic">Intelligence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[2.5rem] cursor-pointer border border-primary/20 dark:border-white/5 shadow-premium hover:shadow-xl transition-all"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                {/* Tactical Scan Line */}
                <motion.div
                  initial={{ top: "-10%" }}
                  whileHover={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[100%] bg-gradient-to-b from-transparent via-primary/5 to-transparent z-20 pointer-events-none"
                />

                {/* Tactical Brackets */}
                <div className="absolute inset-8 pointer-events-none">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/60 dark:border-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                </div>

                <div className="relative z-30">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] uppercase tracking-widest border border-primary/30 mb-4 inline-block">
                    {project.tag}
                  </span>
                  <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-2">{project.category}</p>
                  <h3 className="text-white text-3xl font-bold font-display italic leading-none">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
