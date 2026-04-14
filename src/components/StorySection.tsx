import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
              alt="Our Story"
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary flex items-center justify-center rounded-3xl rotate-12 shadow-xl">
              <span className="text-primary-foreground font-display font-bold text-4xl">EST.</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-gradient-gold">The Owl?</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed font-body">
            <p>
              In many cultures, the owl represents wisdom, foresight, and the ability to see what others miss. We chose this symbol because it reflects our approach to every project: meticulous observation followed by decisive, brilliant action.
            </p>
            <p>
              Founded by Danush Kumar, The Owl Creations began as a small collective of visionaries who believed that digital experiences should be more than just functional—they should be unforgettable.
            </p>
            <p>
              Today, we operate as a full-service creative engine, blending cutting-edge technology with high-end storytelling to help brands soar above the noise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
