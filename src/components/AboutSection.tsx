import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import TacticalGrid from "./TacticalGrid";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-32 px-6 overflow-hidden">
      <TacticalGrid />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.4em] uppercase mb-3">
            Elite Strategy & Creativity
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 md:mb-8">
            The <span className="text-gradient-gold">Visionary</span> Standard
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto leading-relaxed font-body excerpt">
            At the intersection of calculated wisdom and creative spark, we craft the legacies of tomorrow. Our approach is tactical, our vision is absolute, and our impact is engineered for excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-10 rounded-3xl dark:bg-card/60 bg-card/80 backdrop-blur-3xl border border-primary/20 dark:border-white/5 hover:border-primary/40 transition-all shadow-premium hover:shadow-xl dark:shadow-none"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
              To empower elite business leaders with innovative digital ecosystems and unforgettable high-stakes experiences that drive sustainable industrial growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-10 rounded-3xl dark:bg-card/60 bg-card/80 backdrop-blur-3xl border border-primary/20 dark:border-white/5 hover:border-primary/40 transition-all shadow-premium hover:shadow-xl dark:shadow-none"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed font-body text-sm md:text-base">
              To define the global benchmark for creative authority—merging the watchful precision of the owl with the relentless pursuit of digital perfection.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-20 relative p-12 md:p-24 rounded-[2rem] md:rounded-[4rem] bg-secondary/30 dark:bg-[#0a0c12]/40 backdrop-blur-sm border border-primary/10 dark:border-white/5 overflow-hidden group"
        >
          {/* Tactical Background silhouette */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <img src="/src/assets/logo.png" alt="" className="w-[500px] h-auto grayscale" />
          </div>

          {/* Tactical HUD Markers */}
          <div className="absolute top-8 left-8 font-mono text-[8px] text-primary/60 dark:text-primary/30 tracking-widest hidden md:block">
            SYS_VAL_ID: 0x4F92
          </div>
          <div className="absolute top-8 right-8 font-mono text-[8px] text-primary/60 dark:text-primary/30 tracking-widest hidden md:block">
            STK_LVL: OPTIMAL
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary/60 dark:text-primary/40 tracking-[0.4em] uppercase">
            Target_Lock_Enabled
          </div>

          {/* Tactical Brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-primary/20 rounded-tl-[2rem] md:rounded-tl-[4rem]" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/20 rounded-tr-[2rem] md:rounded-tr-[4rem]" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-primary/20 rounded-bl-[2rem] md:rounded-bl-[4rem]" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-primary/20 rounded-br-[2rem] md:rounded-br-[4rem]" />

          {/* Scan Line effect */}
          <motion.div
            animate={{ top: ["-10%", "110%", "-10%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[20%] bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent z-0 pointer-events-none"
          />

          <div className="relative z-10">
            <h3 className="font-display text-4xl md:text-6xl font-bold mb-16 text-center leading-tight">
              Rooted in <br className="md:hidden" />
              <span className="text-gradient-gold italic">Calculated Values</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {[
                { title: "Innovation", desc: "Pushing digital frontiers." },
                { title: "Precision", desc: "Meticulous & data-driven." },
                { title: "Integrity", desc: "Absolute transparency." },
                { title: "Impact", desc: "Engineered for success." },
              ].map((value, i) => (
                <div key={i} className="text-center group/item transition-all duration-300">
                  <h4 className="font-display text-xl md:text-2xl font-bold text-primary mb-3 group-hover/item:text-foreground dark:group-hover/item:text-white transition-colors">
                    {value.title}
                  </h4>
                  <div className="w-8 h-[1px] bg-primary/20 mx-auto mb-4 group-hover/item:w-12 group-hover/item:bg-primary transition-all" />
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/80 leading-relaxed max-w-[120px] mx-auto">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
