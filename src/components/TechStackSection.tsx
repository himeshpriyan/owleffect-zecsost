import { motion } from "framer-motion";

const tools = [
  { name: "React", category: "Web" },
  { name: "Node.js", category: "Backend" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Tailwind CSS", category: "Design" },
  { name: "Meta Ads", category: "Marketing" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "Cinema 4D", category: "3D / Motion" },
  { name: "Adobe Suite", category: "Creative" },
];

const TechStackSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-[3rem] p-12 md:p-20 text-center"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Toolbox
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">
            The Digital <span className="text-gradient-gold">Infrastructure</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group"
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <span className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                    {tool.name}
                  </span>
                </div>
                <div className="h-1 w-8 bg-primary/20 mx-auto rounded-full group-hover:w-12 transition-all" />
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
