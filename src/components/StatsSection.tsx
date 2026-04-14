import { motion } from "framer-motion";
import TacticalGrid from "./TacticalGrid";

const stats = [
  { label: "Elite Deliverables", value: "50+" },
  { label: "Global Partners", value: "20+" },
  { label: "Digital Expressions", value: "100k+" },
  { label: "Years of Excellence", value: "3+" },
];

const StatsSection = () => {
  return (
    <section className="relative py-12 bg-background overflow-hidden flex justify-center border-y border-primary/10 dark:border-white/5">
      <TacticalGrid />
      <div className="max-w-6xl w-full px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center group"
          >
            <h3 className="text-4xl md:text-6xl font-display font-bold text-gradient-gold mb-3 group-hover:scale-110 transition-transform">
              {stat.value}
            </h3>
            <div className="w-8 h-[1px] bg-primary/20 mx-auto mb-3" />
            <p className="text-muted-foreground font-body text-xs md:text-sm uppercase tracking-[0.2em] font-medium mb-1">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
