import { motion } from "framer-motion";
import { Megaphone, CalendarHeart, Code, Film } from "lucide-react";
import ServiceCard from "./ServiceCard";
import TacticalGrid from "./TacticalGrid";

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 md:py-24 px-6 overflow-hidden">
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
            Industrial-Grade Solutions
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >Elite</motion.span> <span className="text-gradient-gold">Capabilities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {/* Featured Wide: Digital Marketing */}
          <ServiceCard
            icon={Megaphone}
            title="Narrative Engineering"
            description="Algorithmic reach optimization and high-conversion storytelling designed for market dominance. We don't just market; we engineer brand authority."
            features={["Strategic Narrative", "ROI Optimization", "Market Dominance", "Content Ecology"]}
            className="md:col-span-2"
          />

          {/* Standard: Event Management */}
          <ServiceCard
            icon={CalendarHeart}
            title="Event Orchestration"
            description="Precision-engineered event experiences from high-stakes corporate summits to immersive private launches."
            features={["Corporate Summits", "Brand Immersions", "Technical Direction"]}
            className="md:col-span-1"
          />

          {/* Featured Tall: Web & App Dev */}
          <ServiceCard
            icon={Code}
            title="Digital Ecosystems"
            description="Architecting high-performance full-stack solutions and performance-first interfaces for the modern digital era. We build robust, scalable foundations for visionary leaders."
            features={["Ecosystem Architecture", "Performance UX", "Scalable Commerce", "Mobile Excellence"]}
            className="md:col-span-1 md:row-span-2 flex flex-col justify-between"
          />

          {/* Standard: Short Films & Media */}
          <ServiceCard
            icon={Film}
            title="Cinematic Storytelling"
            description="High-impact brand narratives that transform corporate identity into emotional resonance and lasting digital legacy."
            features={["Legacy Films", "Commercial Narratives", "Tactical Media"]}
            className="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
