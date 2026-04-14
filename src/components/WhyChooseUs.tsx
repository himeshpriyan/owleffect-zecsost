import { motion } from "framer-motion";
import { Lightbulb, Search, IndianRupee, Users, Clock } from "lucide-react";
import TacticalGrid from "./TacticalGrid";

const reasons = [
  { icon: Search, text: "Strategic market intelligence & SEO dominance" },
  { icon: Lightbulb, text: "Precision-engineered creative architecture" },
  { icon: IndianRupee, text: "ROI-optimized value scaling models" },
  { icon: Users, text: "Direct elite-level founder strategic access" },
  { icon: Clock, text: "Industrial-grade delivery & quality assurance" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative py-16 md:py-24 px-6 overflow-hidden">
      <TacticalGrid />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.4em] uppercase mb-3">
            Why Partner With Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            The <span className="text-gradient-gold italic">Owl</span> Advantage
          </h2>
        </motion.div>

        <div className="space-y-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 p-5 md:p-6 rounded-2xl dark:bg-card/60 bg-card backdrop-blur-md border border-primary/10 dark:border-white/5 hover:border-primary/30 transition-all duration-300 group shadow-sm dark:shadow-none hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 relative overflow-hidden group-hover:bg-primary/20 transition-colors">
                <motion.div
                  whileHover={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="relative z-10"
                >
                  <reason.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-primary/20"
                />
              </div>
              <p className="text-foreground font-body text-base md:text-lg font-medium tracking-tight">{reason.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparative Edge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Elite <span className="text-gradient-gold">Standard</span> vs. Market Average</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                <Search className="w-24 h-24 rotate-12" />
              </div>
              <h4 className="font-display font-bold text-primary mb-8 flex items-center gap-2 text-xl">
                <div className="w-2 h-2 rounded-full bg-primary" /> The Owl Advantage
              </h4>
              <ul className="space-y-5 text-sm md:text-base font-body">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">01</span>
                  <span>Deep strategic discovery before any execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">02</span>
                  <span>Custom-built, performance-first digital ecosystems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">03</span>
                  <span>Direct architectural oversight from agency founders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">04</span>
                  <span>Holistic brand-first storytelling & legacy building</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-[2rem] bg-card border border-border dark:opacity-50 opacity-70 dark:grayscale grayscale-[0.5] hover:grayscale-0 transition-all duration-500 shadow-sm dark:shadow-none">
              <h4 className="font-display font-bold text-muted-foreground mb-8 flex items-center gap-2 text-xl">
                <div className="w-2 h-2 rounded-full bg-muted-foreground" /> Market Average
              </h4>
              <ul className="space-y-5 text-sm md:text-base font-body text-muted-foreground">
                <li className="flex items-start gap-3"><span>01</span> <span>Template-driven, generic visual solutions</span></li>
                <li className="flex items-start gap-3"><span>02</span> <span>Siloed services without cohesive brand logic</span></li>
                <li className="flex items-start gap-3"><span>03</span> <span>Communication diluted through management layers</span></li>
                <li className="flex items-start gap-3"><span>04</span> <span>Short-term metrics over long-term brand equity</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
