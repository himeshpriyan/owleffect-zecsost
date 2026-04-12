import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-gradient-gold">The Owl Creations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed font-body">
            Inspired by the wisdom and vision of the owl, our team is dedicated to helping brands grow, connect, and stand out. We are a full-service creative agency that blends creativity with strategy to deliver impactful digital and real-world experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              To empower businesses with innovative digital solutions and unforgettable experiences that inspire growth and long-term success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed font-body">
              To become a trusted global partner known for creativity, excellence, and delivering meaningful impact through technology and events.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
