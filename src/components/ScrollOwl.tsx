import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import flyingOwl from "@/assets/flying-owl.png";

const ScrollOwl = () => {
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  
  // Create a smoothed velocity value
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Parallax movement - the owl moves slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  
  // SPECTRAL 2.0: Horizontal Swooping (glides left/right based on scroll speed)
  const x = useTransform(smoothVelocity, [-0.1, 0, 0.1], ["-10%", "0%", "10%"]);
  
  // Unique effect: Wings "expand" slightly with velocity
  const scaleY = useTransform(smoothVelocity, [-0.1, 0, 0.1], [1.25, 1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.45, 0.45, 0]);
  
  // Slight rotation based on velocity to give "tilt" while flying
  const rotate = useTransform(smoothVelocity, [-0.1, 0, 0.1], [-12, 0, 12]);

  // Shimmer Sweep effect
  const shimmerX = useTransform(smoothVelocity, [-0.1, 0, 0.1], ["-100%", "0%", "100%"]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center">
      <motion.div
        style={{
          y,
          x,
          opacity,
          scaleY,
          rotate,
        }}
        className="relative w-[650px] h-[650px] md:w-[900px] md:h-[900px]"
      >
        {/* The Base Owl (Ethereal Brightness) */}
        <img
          src={flyingOwl}
          alt=""
          style={{
            WebkitMaskImage: "radial-gradient(circle, black 45%, transparent 85%)",
            maskImage: "radial-gradient(circle, black 45%, transparent 85%)"
          }}
          className="w-full h-full object-contain mix-blend-screen opacity-80 brightness-150 contrast-125 saturate-50 sepia-[0.1]"
        />
        
        {/* SPECTRAL 2.0: Moving Shimmer Highlight */}
        <motion.div
          style={{ x: shimmerX }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 mix-blend-overlay"
        />

        {/* SPECTRAL 2.0: Living Eye Glows */}
        {/* Left Eye */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[47%] left-[28%] w-3 h-3 bg-amber-400 rounded-full blur-[4px] mix-blend-screen shadow-[0_0_15px_rgba(251,191,36,0.8)]"
        />
        {/* Right Eye */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeInOut"
          }}
          className="absolute top-[49%] left-[34%] w-3 h-3 bg-amber-400 rounded-full blur-[4px] mix-blend-screen shadow-[0_0_15px_rgba(251,191,36,0.8)]"
        />
        
        {/* Main Ambient Glow */}
        <motion.div
          style={{
            opacity: useTransform(smoothVelocity, [-0.1, 0, 0.1], [0.5, 0, 0.5]),
          }}
          className="absolute inset-0 bg-amber-500/5 blur-[150px] rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default ScrollOwl;
