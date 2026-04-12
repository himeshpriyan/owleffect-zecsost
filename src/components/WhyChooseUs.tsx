import { motion } from "framer-motion";
import { Lightbulb, Search, IndianRupee, Users, Clock } from "lucide-react";

const reasons = [
  { icon: Lightbulb, text: "Creative ideas backed by smart strategy" },
  { icon: Search, text: "SEO-friendly and performance-driven solutions" },
  { icon: IndianRupee, text: "Affordable and customized services" },
  { icon: Users, text: "Friendly, dedicated team support" },
  { icon: Clock, text: "On-time delivery with quality assurance" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Promise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Why Choose <span className="text-gradient-gold">Us</span>
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
              className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border hover:border-glow transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-body text-lg font-medium">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
