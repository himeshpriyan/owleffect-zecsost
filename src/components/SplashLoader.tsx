import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const SplashLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Flying Owl Animation using current logo with a swoop effect */}
        <motion.div
          initial={{ scale: 0.2, y: 100, opacity: 0 }}
          animate={{ 
            scale: [0.2, 1.2, 1], 
            y: [100, -20, 0], 
            opacity: [0, 1, 1],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ 
            duration: 2.5, 
            ease: "easeOut",
            times: [0, 0.7, 0.9, 1]
          }}
          className="mb-8"
        >
          <img src={logo} alt="The Owl Creations" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
        </motion.div>

        {/* Brand Text Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
            <span className="text-gradient-gold">The Owl</span>{" "}
            <span className="text-foreground">Creations</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.5 }}
            className="text-muted-foreground text-sm uppercase tracking-[0.4em] mt-4 font-body translate-x-1"
          >
            Creative Spark
          </motion.p>
        </motion.div>

        {/* Aesthetic "Wind" lines to simulate flight speed */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: 200, 
              opacity: [0, 0.2, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "linear"
            }}
            className="absolute h-[1px] bg-primary/30"
            style={{ 
              width: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: "-10%",
            }}
          />
        ))}
      </div>

      {/* Background glow that pulses as owl "approaches" */}
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"
      />
    </motion.div>
  );
};

export default SplashLoader;
