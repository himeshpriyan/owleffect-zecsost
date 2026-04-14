import { motion } from "framer-motion";
import { Search, PenTool, Terminal, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, audience, and goals to craft a tailored roadmap.",
  },
  {
    icon: PenTool,
    title: "Creative Design",
    description: "Our artists bring concepts to life through stunning visuals and intuitive experiences.",
  },
  {
    icon: Terminal,
    title: "Development & Build",
    description: "We turn designs into reality using the latest tech and high-end production tools.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    description: "The journey doesn't end at launch. We monitor, optimize, and help you scale.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/20 dark:bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            The Owl Way
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our Creative <span className="text-gradient-gold">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl dark:bg-card bg-card border border-primary/10 dark:border-border shadow-sm dark:shadow-none hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
